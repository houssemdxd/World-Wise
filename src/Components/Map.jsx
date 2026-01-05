/* eslint-disable no-unused-vars */

import { useState } from "react"
import styles from "./Map.Module.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import { MapContainer ,TileLayer,Marker,Popup } from "react-leaflet"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});


export default function Map() {
const [searchParam, setSearchParam] = useSearchParams()
const lat = searchParam.get('lat');
const lng = searchParam.get("lng")
const navigate = useNavigate()
L.Marker.prototype.options.icon = DefaultIcon;


  return (
    <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>


<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={styles.map}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>


    </div>
  )
}
  