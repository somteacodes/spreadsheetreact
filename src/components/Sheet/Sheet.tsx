import { FC } from "react"
import { useRecoilValue } from "recoil"
import Cell from "../Cell/Cell"
import Column from "../Column/Column"
import Row from "../Row/Row"
import {sheetConfig} from '../../store/sheetStore'
import './Sheet.css'
const Sheet:FC = () => {

    const {numOfCols, numOfRows} = useRecoilValue(sheetConfig)
    return (
        <table className="sheet">
            <tbody>

                {[...Array(numOfRows)].map((row, rowIndex) => 
                <Row key={rowIndex}>
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
