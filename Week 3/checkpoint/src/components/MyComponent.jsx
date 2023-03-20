import React from 'react';
import image from './sea.jpg'

// Components are functions which are exported to be used elsewhere
export default function MyComponent() {
    // Components return things to render something on the page
    const img = <img src={image} alt = "hello! this is sea!" height = '1000' width = '1800'></img>
    return (
        <>
            {img}
        </>
    );

    /* NOTE: The empty html tags (<> & </>) are called react fragments. We use these to group
    together child elements (the content inside of them) because return statements may only
    return a single parent element. */
}