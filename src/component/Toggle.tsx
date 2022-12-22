import React from 'react'
import { useState } from 'react'
import './Toggle.css'

export const Toggle = ({toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <span className="Toggle">
        <label>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span />
        </label>
        </span>
    )
}