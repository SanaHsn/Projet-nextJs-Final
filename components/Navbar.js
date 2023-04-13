import { FaSistrix } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link.js";
import styles from '../src/styles/Navbar.module.css';
import { useSelector } from "react-redux";



export default function Navbar({optionFonction, optionFonction2, setInput, input}) {

    const users = useSelector((state) => state.auth.isAuthenticated);

    console.log(users);


    return (
        <nav className={styles.navbar}>

            <div className={styles.logo}>
                <FiAlignLeft className={styles.FiAlignLeft} onClick={optionFonction} />
                <h2><Link href={'/'} style={{ textDecoration: 'none', color:'black' }} >BOOKSHELF</Link></h2>
            </div>
            <div className={styles.search}>
                <FaSistrix />
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder= "Search your book here"/>
            </div>
            <div className={styles.tele}>
                <FiPhoneCall/>
                <p>+01234567890</p>
                {users == true ?
                <div className={styles.AiFillHeart} ><AiFillHeart onClick={optionFonction2} /></div>
                : null
                }
            </div>

        </nav>
    );
}

