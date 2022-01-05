import { FC } from "react"
import './Column.css'
const Column:FC = ({children}) => {
    return (
        <td className="column">
            {children}
        </td>
    )
}

export default Column
