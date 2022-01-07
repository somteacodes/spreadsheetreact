import { FC, useState, useEffect } from "react";
import Sheet from "../components/Sheet/Sheet";
import { useRecoilValue } from "recoil";
import { sheetConfig, sheetData } from "../store/sheetStore";
const SheetView: FC = () => {
 const currentSheetData = useRecoilValue(sheetData)
  return (
    <>
      <button onClick={() => console.log(currentSheetData)}>Save Sheet</button>
      <Sheet />
    </>
  );
};

export default SheetView;
