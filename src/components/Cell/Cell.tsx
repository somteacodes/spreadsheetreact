import { FC, useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import "./Cell.css";
import { useRecoilState,useRecoilValue } from "recoil";
import { cellValueState } from "../../store/cellStore";
import {sheetData} from '../../store/sheetStore'
import { evaluatedCellValueStore } from "../../store/EvaluatedCellValueStore";
 
type CellProps = {
  cellKey: string;
};

const Cell: FC<CellProps> = ({cellKey}) => {
  // states
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);
  const [cellValue, setCellValue] = useRecoilState<string>(
    cellValueState(cellKey)
  );
    const EvaluatedCellValueStore= useRecoilValue<string>(evaluatedCellValueStore(cellKey))
  const [sheetDataState, setSheetDataState] = useRecoilState(
    sheetData
  )
 
  // functions
  const changeLabelToInput = () =>  setEditMode(true);
  const changeInputToLabel = () => setEditMode(false);


  const removeInputFocus= (event:KeyboardEvent<HTMLInputElement>)=>{
      if(event.key ==='Enter'){
        changeInputToLabel();  
        setSheetDataState({...sheetDataState, [cellKey]: EvaluatedCellValueStore}) 
      }     
  }
  const updateCellValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCellValue(event.target.value);
    //  setSheetDataState({...sheetDataState, [cellKey]: event.target.value})     
  };

  // lifecycles and sideEffects
  useEffect(() => {
      
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellKey !== cellKey) {
      changeInputToLabel();   
     } 
  };
    document.addEventListener("click", onClickOutsideInputHandler);
    return document.addEventListener("click", onClickOutsideInputHandler);
  }, [cellKey]);

  // template
  return (
    <>
      {editMode ? (
        <input
          ref={inputRef}
          value={cellValue}
          data-cell-key={cellKey}
          className="cellInput"
          onChange={updateCellValue}
          onKeyDown={removeInputFocus}
        />
      ) : (
        <div
          data-cell-key={cellKey}
          onClick={changeLabelToInput}
          className="cellLabel"
        >    
          {EvaluatedCellValueStore}
        </div>
      )}
    </>
  );
};

export default Cell;
