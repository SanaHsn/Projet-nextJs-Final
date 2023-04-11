import book1 from '../public/imgs/book1.jpg';
import book2 from '../public/imgs/book2.jpg';
import Image from 'next/image.js';
import style from '../src/styles/Sections.module.css'

export default function Section1() {
    return (
        <div className={style.bigSale}>
            <div className={style.sale}>
                <Image className={style.imgSale} src={book1} alt="" />
                <div className={style.textSale}>
                    <h6>SALE UP TO 15%</h6>
                    <h5>Innovation in Education (Hardcover)</h5>
                    <p>Starting at: <span>$65.09</span></p>
                </div>
            </div>
            <div className={style.sale}>
                <Image className={style.imgSale} src={book2}alt="" />
                <div className={style.textSale}>
                    <h6>SALE UP TO 10%</h6>
                    <h5>Innovation in Education (Hardcover)</h5>
                    <p>Starting at: <span>$50.09</span></p>
                </div>

            </div>
        </div>
    )
}
