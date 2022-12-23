import React from 'react'

export default function Header1(props){


    return(
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}