import * as React from "react"
import Navbar from './NavBar'

const Template = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
            <div>Footer</div> 
        </>
    )
}

export default Template