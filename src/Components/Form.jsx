/* eslint-disable no-unused-vars */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { latLng } from "leaflet";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";
import "react-datepicker/dist/react-datepicker.css";


export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client?"
  const navigate = useNavigate();
  const [lat,lng] = useUrlPosition() ;
  const [cityDetail,setCityDetail] = useState();
  const [emoji,setEmoji] = useState("");
  const {addCity}=    useCities()


useEffect(function (){
  if(!lat&&!lng) return ; 
async function getCityByLocation(){

const res= await fetch(`${BASE_URL}latitude=${lat}&longitude=${lng}`)
const data = await res.json()
console.log(data)
setCityDetail(data.countryName);
setCountry(data.countryName)
setEmoji(convertToEmoji(data.countryCode))

} getCityByLocation()},[lat,lng])

function  onSubmitForm(e){
e.preventDefault();
if(!cityDetail || !date) return;
const newCity = {
"cityName":cityDetail,
country,
emoji,
date,
notes,
position:{lat,lng}



}

console.log(newCity)
addCity(newCity)
}


  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name : {cityDetail&&cityDetail}</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityDetail}
        />
        { <span className={styles.flag}>{emoji}</span> }
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
       { /**<input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />*/}
<DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
      <Button type ="primary" >ADD</Button>     

   <Button   type="back"  onClick={(e)=>{

                e.preventDefault();
                navigate(-1)


        }}  >&larr; Back</Button>
      </div>
    </form> 
  );
}

export default Form;
