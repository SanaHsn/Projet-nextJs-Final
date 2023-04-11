import { FaSistrix } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import styles from '../src/styles/Navbar.module.css';



export default function Sidebar({optionFonction, optionFonction2}) {

    return (
        <nav className={styles.navbar}>

            <div className={styles.logo}>
                <FiAlignLeft className={styles.FiAlignLeft} onClick={optionFonction} />
                <h2>BOOKSHELF</h2>
            </div>
            <div className={styles.tele}>
                <FiPhoneCall/>
                <p>+01234567890</p>
                <AiFillHeart onClick={optionFonction2} />
            </div>
            <div className={styles.AiFillHeart}>
                <AiFillHeart className={styles.AiFillHeart} onClick={optionFonction2} />
            </div>

        </nav>
    );
}
