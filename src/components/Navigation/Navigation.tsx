import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sheetConfig, sheetData } from "../../store/sheetStore";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
const Navigation: FC = () => {
  const location = useLocation();
  // state
  console.log(location);
  const currentSheetData = {
    config: useRecoilValue(sheetConfig),
    data: useRecoilValue(sheetData),
  };
  let navigate = useNavigate();

  // functions
  const saveSheet = () => {
    let listOfSheets = JSON.parse(localStorage.getItem("spreadsheet") || "[]");
    listOfSheets.push(currentSheetData);
    localStorage.setItem("spreadsheet", JSON.stringify(listOfSheets));
    console.log(listOfSheets);
    navigate("/list");
  };
  // template
  return (
    <div className="optionsRow">
      <Link to="/" className="blue-btn btn">
        New Sheet
      </Link>

      {location.pathname === "/" ? (
        <button onClick={() => saveSheet()} className="green-btn btn">
          Save Sheet
        </button>
      ) : (
        <Link to="/list" className="black-btn btn">
          View Sheets
        </Link>
      )}
    </div>
  );
};

export default Navigation;
