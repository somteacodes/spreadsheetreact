import { FC, useState, useEffect, useRef, ChangeEvent } from "react";
import './Cell.css'
import {atom, useRecoilState} from 'recoil'
type CellProps = {};
const cellValueState = atom({
  key:'cell',
  default:"Hello"
})


const Cell: FC<CellProps> = (props) => {

  // states
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);
  const [cellValue, setCellValue] = useRecoilState(cellValueState)
  // functions
  const changeLabelToInput = () => {
    setEditMode(true);
  };
  const changeInputToLabel = () => {
    setEditMode(false);
  };
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellKey !== "2") {
      changeInputToLabel();
      
    } else {
      console.log("do nothing");
    } 
  };

  const updateCellValue =(event:ChangeEvent<HTMLInputElement>) => {
    setCellValue(event.target.value)
  }

  // lifecycles and sideEffects
  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
    return document.addEventListener("click", onClickOutsideInputHandler);
  }, []);

  // template
  return (
    <>
      {editMode ? (
        <input ref={inputRef} value={cellValue} data-cell-key="2" className="cellInput" onChange={updateCellValue}/>
      ) : (
        <div data-cell-key="2" onClick={changeLabelToInput}>
          {cellValue}
        </div>
      )}
    </>
  );
};

export default Cell;
