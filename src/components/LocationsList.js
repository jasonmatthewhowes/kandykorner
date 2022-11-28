import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./locations.css"

export const LocationsList = () => {
   const [locations, setLocations] = useState([])

    useEffect(
        () => {
           fetch (`http://localhost:8088/locations`)
                .then (res => res.json())
                .then ((locationArray) => {
                    setLocations(locationArray)
                } )
            },
            []
    )

return <>
<h2>list of locations</h2>
<ul>
{locations.map((location) => {return <li className="location">{location.address} - {location.sqFootage} sq. feet</li>})}    
</ul>
</>
}




