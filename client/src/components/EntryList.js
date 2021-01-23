import React from 'react'
import sampleimage2 from '../aot.png'
import Button from './Button'

const EntryList = () => {
    return (
        <>
            
            <ul>
            <li><img src = "#" alt = "" /></li>
            <li>TitleHere</li>
            </ul>

            <ul className = 'search-column'>
        <li><img src = {sampleimage2} alt = ""  /></li>
        <li><p>Attack on Titan S1</p></li>
        <li><p>04/07/13 - 09/29/13</p></li>
        <li><p>25</p></li>
        <li><p>Completed</p></li>
        <li><Button label = 'Add' /></li>
        </ul>
        
        </>
    )
}

export default EntryList
