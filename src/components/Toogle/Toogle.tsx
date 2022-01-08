import { FC } from "react";
import { useRecoilState } from "recoil";
import {sheetConfig} from '../../store/sheetStore'
import "./Toogle.css";
const Toogle: FC = () => {

    const [sheetMatrixConfig, setSheetMatrixConfig] = useRecoilState(sheetConfig)
    const increaseCols=()=>{
        setSheetMatrixConfig({...sheetMatrixConfig,numOfCols: sheetMatrixConfig.numOfCols+1})
    }
    const decreaseCols=()=>{
        if(sheetMatrixConfig.numOfCols > 1) setSheetMatrixConfig({...sheetMatrixConfig,numOfCols: sheetMatrixConfig.numOfCols-1})
    }
    const increaseRows=()=>{
        setSheetMatrixConfig({...sheetMatrixConfig,numOfRows: sheetMatrixConfig.numOfRows+1})
    }
    const decreaseRows=()=>{
        if(sheetMatrixConfig.numOfRows > 1)setSheetMatrixConfig({...sheetMatrixConfig,numOfRows: sheetMatrixConfig.numOfRows-1})
    }
    // template
  return (
    <div className="toogleContainer">
      <div className="toogleSet">
        <p className="toogleTitle">Rows</p>
        <div>
          <button className="toogleButtons btn" onClick={()=>decreaseRows()}>-</button>
          <p>{sheetMatrixConfig.numOfRows}</p>
          <button className="toogleButtons btn" onClick={()=>increaseRows()}>+</button>
        </div>
      </div>
      <div className="toogleSet">
        <p className="toogleTitle">Columns</p>
        <div>
          <button className="toogleButtons btn" onClick={()=>decreaseCols()}>-</button>
          <p>{sheetMatrixConfig.numOfCols}</p>
          <button className="toogleButtons btn" onClick={()=>increaseCols()}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Toogle;
