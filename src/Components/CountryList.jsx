/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css"
import Spinner from "./Spinner"


export default function CountryList({cities,isLoading}) {

    console.log("the city passed is "+cities)
    if(isLoading) return  <Spinner></Spinner>
  //  if(!cities.length) return <p>Add your first city by clicking on a city on the map </p>
const countries = cities.reduce((arr,city)=>{
if(!arr.map((el)=>el.city).includes(city.country))
return [...arr,{country:city.country,emoji : city.emoji}]
  else
    return arr ;  
},[]);

console.log(countries)
  return (
    <ul className={styles.countryList}>

        {countries.map((country,index)=> <CountryItem country={country} key={index} /> )}


    </ul>
  )
}
