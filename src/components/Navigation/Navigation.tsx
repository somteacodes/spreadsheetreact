import { FC } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sheetConfig, sheetData } from "../../store/sheetStore";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import Toogle from "../Toogle/Toogle";
const Navigation: FC = () => {
  const location = useLocation();
  // state
 
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
 
    navigate("/list");
  };

 
  // template
  return (
    <div className="optionsRow">
    <div>
    <Link to="/" className="blue-btn btn">
        New Sheet
      </Link>
    </div>

     {location.pathname==='/'&& <Toogle/>}
      <div>
        <Link to="/list" className="black-btn btn">
          View Sheets
        </Link>
        {location.pathname === "/" && (
          <button onClick={() => saveSheet()} className="green-btn btn">
            Save Sheet
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
