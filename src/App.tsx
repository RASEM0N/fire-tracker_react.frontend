import React, { useEffect, useState } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'

const App: React.FunctionComponent = () => {
    const [eventData, setEventData] = useState<Array<any>>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const response = await fetch(
                'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
            )
            const { events } = await response.json()
            setEventData(events)
            setLoading(false)
        }

        fetchEvents()
    }, [setEventData])

    return (
        <div>
            <h1>Wildfire Tracker (Powered By NASA)</h1>
            {!loading ? <Map eventData={eventData} /> : <Loader />}
        </div>
    )
}

export default App
