import style from '../src/styles/Sections.module.css'
import Image from 'next/image.js';
import Link from 'next/link.js';
import { AiOutlineHeart } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { ajouterFavori } from '../store/features/likeSlice.js';

export default function Section2({ book }) {
    const dispatch = useDispatch();

    const { title, edition, authors, image_url, id } = book;

    const newItem = { title, image: image_url, id };
    const handleIncrementerFav = () => {
        dispatch(ajouterFavori(newItem));
    }

    return (
        <div>
            <div className={style.card}>
                <img className={style.imgBook} src={image_url} alt="" />
                <div className={style.zoom}>
                    <div className={style.iconZoom}>
                        <AiOutlineHeart />
                    </div>
                    <div className={style.iconZoom}>
                        <Link href={`/book/${id}`}><MdZoomOutMap /></Link>
                    </div>
                </div>
                <div className={style.infos}>
                    <h6>{title}</h6>
                    <p>{edition}</p>
                    <p>By: <b>{authors}</b></p>
                    <p>Price: <b>$90</b></p>
                    <button className={style.btnCarte} onClick={handleIncrementerFav}> <AiOutlineHeart /> Add to cart </button>
                </div>
            </div>
        </div>
    )
}


