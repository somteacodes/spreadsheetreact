import { FC, useState, useEffect } from "react";
import Sheet from "../components/Sheet/Sheet";
import { useRecoilCallback } from "recoil";
import { sheetConfig } from "../store/sheetStore";
const SheetView: FC = () => {
  const logState = useRecoilCallback(({ snapshot }) => () => {
    console.log("State: ", snapshot.getLoadable(sheetConfig).contents);
    // const newSnapshot = snapshot.map(({ set }) => set(sheetConfig, 42));
  });
  return (
    <>
      <button onClick={() => console.log(logState)}>Save Sheet</button>
      <Sheet />
    </>
  );
};

export default SheetView;
