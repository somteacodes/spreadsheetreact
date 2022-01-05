import { FC } from "react"
import { useRecoilValue } from "recoil"
import Cell from "../Cell/Cell"
import Column from "../Column/Column"
import Row from "../Row/Row"
import {sheetConfig} from '../../store/sheetStore'

const Sheet:FC = () => {

    const {numOfCols, numOfRows} = useRecoilValue(sheetConfig)
    return (
        <table>
            <tbody>

                {[...Array(numOfRows)].map((row, rowIndex) => 
                <Row key={rowIndex}>
                        {
                            [...Array(numOfCols)].map((col,colIndex) =>
                            <Column key={colIndex}>
                                <Cell/>
                            </Column>
                            )
                        }
                </Row>)}
              
            </tbody>
        </table>
    )
}

export default Sheet
