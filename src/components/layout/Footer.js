import { FaFacebook, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";


function Footer() {
    return (
      <footer>
        <ul className={styles.social_list}>
          <li><FaFacebook/></li>
          <li><FaYoutube/> </li>
        </ul>
         
      </footer>
    )
  }
  
  export default Footer