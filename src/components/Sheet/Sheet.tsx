import { FC } from "react"
import Cell from "../Cell/Cell"
import Column from "../Column/Column"
import Row from "../Row/Row"

const Sheet:FC = () => {
    return (
        <table>
            <tbody>

                <Row>
                    <Column>
                        <Cell/>
                    </Column>
                    <Column>
                        <Cell/>
                    </Column>
                </Row>
              
            </tbody>
        </table>
    )
}

export default Sheet
