import { FC } from "react"

const Row:FC = ( {children}) => {
    return (
        <tr className="row">
            {children} 
        </tr>
    )
}

export default Row
