import { FC, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./SheetList.css";
 
const SheetList: FC = () => {
    // state
    const [sheetList, setSheetList]: any[] = useState([])
    const loadSheets=() => {
        const listOfSheets= JSON.parse(localStorage.getItem('spreadsheet')|| "[]")
      
        setSheetList(listOfSheets) 
    }


    // lifecycles
    useEffect(() => {loadSheets()},[])

    // template
  return (
    <div className="gridContainer">
      {sheetList.length > 0 ? sheetList.map((sheet:any) => (
       
        <Card sheetCode={sheet.config.code}/>
      )):
      'No Sheets yet. Create new sheets'
      }
    </div>
  );
};

export default SheetList;
