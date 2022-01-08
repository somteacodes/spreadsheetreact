import { FC } from "react";
import '../Cell/Cell.css'
 
type ViewCellProps = {
    cellKey: string;
    cellValue:string
  };

const ViewCell:FC<ViewCellProps> = ({cellKey, cellValue}) => {
   
    return (
        <div  className="cellLabel">
            {(cellValue)}
        </div>
    )
}

export default ViewCell
