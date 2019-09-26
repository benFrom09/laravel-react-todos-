import React from 'react'

export default function FormError(props) {
    return (
        <span className="error text-danger">{props.error}</span>
    )
}
