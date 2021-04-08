import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarket from './LocationMarket'
import LocationInfoBox from './LocationInfoBox'

interface IMap {
    center?: {
        lat: number
        lng: number
    }
    zoom?: number
    eventData: Array<any>
}

export interface IInfo {
    id: string
    title: string
    coordinates: {
        lat: number
        lng: number
    }
}

const Map: React.FC<IMap> = ({
    center = {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom = 6,
    eventData,
}) => {
    const [locationInfo, setLocationInfo] = useState<IInfo | null>(null)

    const markers = eventData.map((event, idx) => {
        if (event?.categories[0]?.id === 8) {
            return (
                <LocationMarket
                    key={idx}
                    lat={event.geometries[0].coordinates[1]}
                    lng={event.geometries[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            id: event.id,
                            title: event.title,
                            coordinates: {
                                lat: event.geometries[0].coordinates[1],
                                lng: event.geometries[0].coordinates[0],
                            },
                        })
                    }
                />
            )
        }

        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyA1YvDzC0KwqZdVyX7l6RvcVqaDXuePkF4',
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

export default Map
