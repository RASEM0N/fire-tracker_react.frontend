import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

interface ILocationMarket {
    lat: number
    lng: number
    onClick: any
}

const LocationMarket: React.FC<ILocationMarket> = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarket
