//Generic placeholder T

import { ReactNode } from "react";

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode 
}

import React from 'react'
import { render } from "react-dom";

const List = <T,>({ items, render }: ListProps<T>) => {
// NOTE: when using anonymous fx with a const TS will have issues detecting generic
// FIX: Alternative to <T,> is <T extends {}> 

    return (

    <ul>
        {items.map((item, i) => (
            <li key={i}>
                {render(item)}
            </li>
        ))}

    </ul>

  )
}

export default List