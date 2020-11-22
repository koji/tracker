import React from 'react'

export const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>location info</h2>
            <ul>
                <li>id: <strong>{info.id}</strong></li>
                <li>title: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}
