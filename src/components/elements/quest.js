import React from 'react'

export default function Quest(props) {
    return (
        <div>
            {props.name}
            {props.rewards}
            {props.rating}
        </div>
    )
}
