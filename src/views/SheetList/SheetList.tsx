import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SheetList.css";
// let sheetList:any[] = [
// //   
// ];
const SheetList: FC = () => {
    // state
    const [sheetList, setSheetList]: any[] = useState([])
    const loadSheets=() => {
        const listOfSheets= JSON.parse(localStorage.getItem('spreadsheet')|| "[]")
        console.log(listOfSheets)
        setSheetList(listOfSheets) 
    }


    // lifecycles
    useEffect(() => {loadSheets()},[])
  return (
    <div className="gridContainer">
      {sheetList.length > 0 ? sheetList.map((sheet:any) => (
        <Link 
        to={`/preview/${sheet.config.code}`}
        className="card" key={sheet.config.code}>
          <img
            src="https://img.icons8.com/color/48/000000/new-spreadsheet.png"
            alt="Sheet Icon"
          />
          <p className="title">{sheet.config.code}</p>
        </Link>
      )):
      'No Sheets yet. Create new sheets'
      }
    </div>
  );
};

export default SheetList;
