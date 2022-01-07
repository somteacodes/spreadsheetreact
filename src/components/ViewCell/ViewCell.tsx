import { FC } from "react";
import '../Cell/Cell.css'
// import { evaluatedCellValueStore } from "../../store/EvaluatedCellValueStore";
type ViewCellProps = {
    cellKey: string;
    cellValue:string
  };

const ViewCell:FC<ViewCellProps> = ({cellKey, cellValue}) => {
    // console.log(cellKey)
    return (
        <div  className="cellLabel">
            {(cellValue)}
        </div>
    )
}

export default ViewCell
