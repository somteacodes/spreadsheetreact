import { FC, useState, useEffect } from "react";
import Sheet from "../components/Sheet/Sheet";
import { useRecoilValue } from "recoil";
import { sheetConfig, sheetData } from "../store/sheetStore";

import "./SheetView.css";
const SheetView: FC = () => {
  const { code } = useRecoilValue(sheetConfig);
  const currentSheetData = { code, data: useRecoilValue(sheetData) };
  const saveSheet =(data:any)=>{
    localStorage.setItem(data.code,JSON.stringify(data.data))
    console.log(data)
  }
  return (
    <>
      <div className="optionsRow">
        <button
          onClick={() => console.log(currentSheetData)}
          className="blue-btn btn"
        >
          New Sheet
        </button>
        <button
          onClick={() => saveSheet(currentSheetData)}
          className="green-btn btn"
        >
          Save Sheet
        </button>
      </div>
      <Sheet />
    </>
  );
};

export default SheetView;
