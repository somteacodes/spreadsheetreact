import { FC, useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import "./Cell.css";
import { useRecoilState,useRecoilValue } from "recoil";

import { cellValueState } from "../../store/cellStore";
import {sheetData} from '../../store/sheetStore'
import { evaluatedCellValueStore } from "../../store/EvaluatedCellValueStore";
import { cellKeyToMatrix } from "../../utils/cellKeyToMatrix";
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
const [displayCellValue, setDisplayCellValue] = useState('')
  // functions
  const changeLabelToInput = () => {
    setEditMode(true);
  };
  const changeInputToLabel = () => {
    setEditMode(false);
 
    
  };
  
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellKey !== cellKey) {
      changeInputToLabel();
      // setSheetDataState({...sheetDataState, [cellKey]: cellValue})
    
    } else{
      // console.log('sheet state',sheetDataState)
    }
  };

  const removeInputFocus= (event:KeyboardEvent<HTMLInputElement>)=>{
      if(event.key ==='Enter'){
        changeInputToLabel();
   
        setSheetDataState({...sheetDataState, [cellKey]: cellValue})
        // if(cellValue.startsWith('=')){
         
          // console.log('on enter', cellKeyToMatrix(EvaluatedCellValueStore))
          // const newCellKey=cellKeyToMatrix(EvaluatedCellValueStore)
          // const newCellValue=sheetDataState[newCellKey as keyof typeof sheetDataState] 
          // if(newCellValue){
          //   setSheetDataState({...sheetDataState, [cellKey]: newCellValue})
          //   console.log('sheet state',newCellValue)
          //     // setCellValue(newCellValue)
          //     setDisplayCellValue(newCellValue)
          // }else{
          //   setCellValue('')
          //   console.log('undefined cell value')
          // }
         
        // }else{
          // console.log('on enter',cellKey)
          // setDisplayCellValue(cellValue)
          // console.log('sheet state no reference done',sheetDataState)
        // }
      
        // console.log('sheet state',sheetDataState)
      }
     
  }
  const updateCellValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCellValue(event.target.value);
       
  };

  // lifecycles and sideEffects
  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
    return document.addEventListener("click", onClickOutsideInputHandler);
  }, []);

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
          {/* {displayCellValue} */}
          {/* {cellKey} */}
          {EvaluatedCellValueStore}
        </div>
      )}
    </>
  );
};

export default Cell;
