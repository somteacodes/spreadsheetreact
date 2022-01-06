import { FC } from "react"
import { useRecoilValue } from "recoil"
import Cell from "../Cell/Cell"
import Column from "../Column/Column"
import Row from "../Row/Row"
import {sheetConfig} from '../../store/sheetStore'
import './Sheet.css'
import Axis from "../Axis/Axis"
import { numToLetter } from "../../utils/numToLetter"
const Sheet:FC = () => { 

    const {numOfCols, numOfRows} = useRecoilValue(sheetConfig)
    return (
        <table className="sheet">
            <tbody>
                {/* row header */}
                <Row>
                    {[...Array(numOfCols+1)].map((col, colIndex)=>
                    colIndex === 0 ? <Axis key={colIndex}/>: <Axis key={colIndex}>{numToLetter(colIndex) }</Axis>
                    )}
                </Row>
                {[...Array(numOfRows)].map((row, rowIndex) => 
                <Row key={rowIndex}>
                    {/* column header */}
                    <Axis key={rowIndex}>{rowIndex+1}</Axis>

                    {/* Cells */}
                        {
                            [...Array(numOfCols)].map((col,colIndex) =>
                            <Column key={colIndex}>
                                <Cell cellKey={`${rowIndex}_${colIndex}`}/>
                            </Column>
                            )
                        }
                </Row>)}
              
            </tbody>
        </table>
    )
}

export default Sheet
