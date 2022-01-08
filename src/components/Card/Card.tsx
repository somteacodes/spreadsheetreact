import { FC } from "react"
import { Link } from "react-router-dom";
import "./Card.css";
type CardProps={
    sheetCode:string
};

const Card:FC<CardProps> = ({sheetCode}) => {
    return (
        <div 
        
        className="card" key={sheetCode}>
          <img
            src="https://img.icons8.com/color/48/000000/new-spreadsheet.png"
            alt="Sheet Icon"
          />
          <p className="title">{sheetCode}</p>
          
            <Link
            className="btn blue-btn"
            to={`/preview/${sheetCode}`}
            >View</Link> 
         
           
        </div>
    )
}

export default Card
