
import SideBar from "../Components/SideBar"
import styles from "./AppLayout.module.css"
import Map from "../Components/Map"
import User from "../Components/User"
export default function AppLayout() {
  return (
    <div className={styles.app}>

<SideBar ></SideBar>
<Map></Map>
<User></User>
    </div>
  )
}
