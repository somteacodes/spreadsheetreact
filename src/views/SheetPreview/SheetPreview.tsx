import { FC, useEffect,useState } from "react";
import { useRecoilValue } from "recoil"
import "../../components/Sheet/Sheet.css";
import "../../components/Axis/Axis.css";
import "../../components/Column/Column.css";
 
import "../../components/Cell/Cell.css";
import { useParams } from "react-router-dom";
import Row from "../../components/Row/Row";
import Axis from "../../components/Axis/Axis";
import { numToLetter } from "../../utils/numToLetter";
import { sheetConfig } from "../../store/sheetStore";
import Column from "../../components/Column/Column";
import ViewCell from "../../components/ViewCell/ViewCell";
const SheetPreview: FC = () => {
    // state
    const params = useParams()
    const defaultSettings = useRecoilValue(sheetConfig)
    const sheetCode = params.sheetCode
    console.log(sheetCode)
    interface SheetData {
        [key: string]: any
    }
    let obj: SheetData = {
        config:{
            numOfCols:defaultSettings.numOfCols,
            numOfRows:defaultSettings.numOfRows
        },
        data:{ 1_2: "My very own spreadsheet", 3_3: "That is all" }
    };
    const [selectedSheet, setselectedSheet] = useState(obj)
    const {numOfCols, numOfRows} =selectedSheet.config
    const sheetData = selectedSheet.data
    // /functions
   

    // lifecycles
    useEffect(() => {
        function loadSheet() {
            const  spreadSheets=JSON.parse(localStorage.getItem('spreadsheet')|| "[]")
            const selectedSheet=spreadSheets.filter((sheet: { config: { code: string | undefined; }; }) =>sheet.config.code ===sheetCode)
            setselectedSheet(selectedSheet[0])
             
            console.log(selectedSheet[0])
         }
        loadSheet()
        return loadSheet()
    },[sheetCode])
    // template
  return (
    <>
     

      <table className="sheet">
        <thead>
            <Row>
            {[...Array(numOfCols+1)].map((col, colIndex)=>
                    colIndex === 0 ? <Axis key={colIndex}/>: <Axis key={colIndex}>{numToLetter(colIndex) }</Axis>
                    )}
            </Row>
          
        </thead>

        <tbody>
        {[...Array(numOfRows)].map((row, rowIndex) => 
                <Row key={rowIndex}>
                    {/* row header */}
                    <Axis key={rowIndex}>{rowIndex+1}</Axis>

                    {/* Cells */}
                        {
                            [...Array(numOfCols)].map((col,colIndex) =>
                            <Column key={colIndex}>
                                <ViewCell cellKey={`${rowIndex}_${colIndex}`} cellValue={sheetData[`${rowIndex}_${colIndex}`]}/>
                                {/* <Cell cellKey={`${rowIndex}_${colIndex}`}/> */}
                            </Column>
                            )
                        }
                </Row>)}
        </tbody>
      </table>
    </>
  );
};

export default SheetPreview;
