import Image from "next/image.js"
import style from '../src/styles/Sections.module.css';
import img from '../public/imgs/sec3.png';
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


export default function Section3() {
    return (
        <div className={style.bigSec3}>
            <div className={style.sec3}>
                <div className={style.imageS3}>
                    <Image className={style.imageS3} src={img} alt="" />
                </div>
                <div className={style.titreS3}>
                    <h1>Join Our Community</h1>
                    <p>Sign up & get 10% first books.</p>
                    <div>
                        <div className={style.inputBtn}>
                            <input className={style.inputS3} type="email" placeholder="Your Email" id="" />
                            <button>Subscribe</button>
                        </div>
                       
                        <div className={style.icons}>
                            <div className={style.iconReseau}>
                                <FaFacebookF />
                            </div>
                            <div className={style.iconReseau}>
                                <BsTwitter />
                            </div>
                            <div className={style.iconReseau}>
                                <AiFillInstagram />
                            </div>
                            <div className={style.iconReseau}>
                                <AiFillYoutube />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
