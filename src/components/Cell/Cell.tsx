import { FC, useState, useEffect, useRef } from "react";
import './Cell.css'
type CellProps = {};
const Cell: FC<CellProps> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);
  const changeLabelToInput = () => {
    setEditMode(true);
  };
  const changeInputToLabel = () => {
    setEditMode(false);
  };
  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellKey !== "2") {
      changeInputToLabel();
      console.log(event.target);
    } else {
      console.log("do nothing");
    }

    // return
  };
  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
    return document.addEventListener("click", onClickOutsideInputHandler);
  }, []);
  return (
    <>
      {editMode ? (
        <input ref={inputRef} data-cell-key="2" className="cellInput" />
      ) : (
        <div data-cell-key="2" onClick={changeLabelToInput}>
          {props.children}
        </div>
      )}
    </>
  );
};

export default Cell;
