import { FC, useState, useEffect, useRef, ChangeEvent } from "react";
import './Cell.css'
import  {useRecoilState} from 'recoil'

import {cellValueState} from '../../store/cellStore'

type CellProps = {
  cellKey:string
};

const Cell: FC<CellProps> = (props) => {

  // states
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);
  const [cellValue, setCellValue] = useRecoilState<string>(cellValueState(props.cellKey))
  // functions
  const changeLabelToInput = () => {
    setEditMode(true);
  };
  const changeInputToLabel = () => {
    setEditMode(false);
  };
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellKey !== props.cellKey) {
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
        <input ref={inputRef} value={cellValue} data-cell-key={props.cellKey} className="cellInput" onChange={updateCellValue}/>
      ) : (
        <div data-cell-key={props.cellKey} onClick={changeLabelToInput} className="cellLabel">
          {cellValue}
        </div>
      )}
    </>
  );
};

export default Cell;
