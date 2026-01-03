import CityItem from "./CityItem";
import styels from "./CityList.module.css"
import Spinner from "./Spinner"
import PropTypes from "prop-types";

export default function CityList({cities,isLoading}) {

if(isLoading) return <Spinner></Spinner>


  return (



    <ul className={styels.cityList}>

        {cities.map((item)=><CityItem city={item} key={item.id}/>)}


    </ul>
  )
}
CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};