import React from 'react'

function Features({features,isOpen,toggle}) {
  if(!isOpen) {
    return null;
  }

  return (
    <div className="featurearea">
        <div className="heading">
            <div className="title">Lens Features</div>
            <div className="closer" onClick={toggle}>X</div>
        </div>

        <div className="features">
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>✔️ {feature}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Features