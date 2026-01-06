/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState,useEffect } from "react"
import styles from "./Map.Module.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import { MapContainer ,TileLayer,Marker,Popup ,useMap,useMapEvent} from "react-leaflet"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import {useUrlPosition} from "../hooks/useUrlPosition.js"


import Button from "./Button"
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});


export default function Map() {
const [mapPosition , setMapPosition] =useState([0,40])
  const {isLoading : isLoadingPosition, position:geolocationPosition,getPosition} = useGeolocation()

const {cities} = useCities();
const [lat,lng] = useUrlPosition();
useEffect(

function (){
if(lat&&lng)setMapPosition([lat,lng])
console.log(lat)
console.log("we are inside the useEffect funcion ")
}
  ,[lat,lng]
)

useEffect(function(){
if(geolocationPosition) setMapPosition([geolocationPosition.lat ,geolocationPosition.lng])


},[geolocationPosition])


L.Marker.prototype.options.icon = DefaultIcon;


  return (
    <div className={styles.mapContainer} >
        <Button type ="position" onClick ={()=>getPosition()}>
          {isLoadingPosition?"isLoading...":"Use your position"}
          </Button>

<MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {cities.map((city)=>(<Marker position={city.position} key={city.id}>
    <Popup>
      <span>{city.emoji}</span>
      <span>{city.cityName}</span>
    </Popup>
  </Marker>))}
  {lat? <ChangePosition position ={ mapPosition} />:null}
<DetectClick/>
</MapContainer>


    </div>
  )
}

function ChangePosition({position})
{
const map = useMap()
map.setView(position)

return null;

}
function DetectClick()
{
const navigate = useNavigate()

  useMapEvent({

    click:(e)=>{navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
      console.log(e)
    }
  })
}
  