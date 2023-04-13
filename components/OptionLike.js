import Link from 'next/link';
import styles from '../src/styles/SlideBar.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { supprimerFavori } from '../store/features/likeSlice.js';

import { RxCross2 } from "react-icons/rx";

export default function OptionMenuLike({ active2, closeFunction2}) {
    
    const fav = useSelector(state => state.favoris.fav);
    const dispatch = useDispatch();

    const handleSupprimerFav = (idArticle) => {
        const article = fav.find(article => article.id === idArticle);
        if (article) {
            dispatch(supprimerFavori(article));
        }
    }

    return(
        <>
            <div className={!active2 ? styles.modal2 + ' ' + styles.off : styles.modal2} onClick={closeFunction2}></div>
            <div className={!active2 ? styles.menu2 + ' ' + styles.off : styles.menu2}>
                <div className={styles.header}>
                    <h1>Favoris</h1>
                    <h3 className={styles.quit} onClick={closeFunction2}><RxCross2/></h3>
                </div>
                <div className={styles.content}>
                    {fav.map((item) => (
                        <div key={item.id} className={styles.like}>
                            <img src={item.image} className={styles.imageLike} />
                            <p> {item.title} </p>
                            <RxCross2 onClick={() => handleSupprimerFav(item.id)} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
