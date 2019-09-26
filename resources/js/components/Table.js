import React from 'react'

export default function Table(props) {
    const keys = Object.keys(props.cells);
    return (
        <table className="table table-bordered">
            <thead>
                {props.head ? props.head.map((item,i) => {
                    return (
                        <tr key={i + 1 }>
                            <th>{item}</th>
                        </tr>
                    )
                }):null}
            </thead>
            <tbody>
                {
                    keys.map((key,i) =>{
                        return(
                            <tr key={i + 1 }>
                                <td>{key}</td>
                                <td>{props.cells[key]}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
