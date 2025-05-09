import React from 'react'

function Header({ results, update, lensData, category, selected }) {
    return (
        <header>

            <div className="selector">
                <select value={selected} onChange={update}>
                    <option value="">All Categories</option>
                    {Object.keys(lensData.photography).map((category) => (
                        <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                </select>
            </div>


            <div className="details">
                <div className="title">{category ? category + ' Photography' : 'All Categories'}</div>
                <div className="value">Found {results} lenses..</div>
            </div>
        </header>
    )
}

export default Header