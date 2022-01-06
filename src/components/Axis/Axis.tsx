import {FC} from 'react'
import './Axis.css'

const Axis:FC = ({children}) => {
    return (
        <th className="axis">
            {children}
        </th>
    )
}

export default Axis
