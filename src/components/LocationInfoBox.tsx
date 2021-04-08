import React from 'react'
import { IInfo } from './Map'

const LocationInfoBox: React.FC<{
    info: IInfo
}> = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>
                    ID: <strong>{info.id}</strong>
                </li>
                <li>
                    TITLE: <strong>{info.title}</strong>
                </li>
                <li>
                    COORDINATED:{' '}
                    <strong>
                        {info.coordinates.lat.toFixed(4)}lat{' '}
                        {info.coordinates.lng.toFixed(4)}lng
                    </strong>
                </li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
