import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
    return (
        <div >

            <h1>hii ! hello</h1>

        </div >     
    )
}

const anotherElement = React.createElement(
    'a',
    {href: 'https:/google.com', target: '_black'},
    'click me'

)

createRoot(document.getElementById('root')).render(

    // <MyApp />
    anotherElement
    // MyApp() we can return Myapp like this also because it is a function 

)

