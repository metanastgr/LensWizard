import React, { useState } from 'react'



function Option({ lbl, icon }) {

    const [isActive, setIsActive] = useState(false)

    const toggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="option" data-check={isActive} onClick={toggle}>

            <div className="icon">
                {icon}
            </div>

            <div className="lbl">
                {lbl}
            </div>
        </div>
    )
}

export default Option