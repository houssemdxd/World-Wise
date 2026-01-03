
import SideBar from "../Components/SideBar"
import styles from "./AppLayout.module.css"
import Map from "../Components/Map"

export default function AppLayout() {
  return (
    <div className={styles.app}>

<SideBar ></SideBar>
<Map></Map>
    </div>
  )
}
