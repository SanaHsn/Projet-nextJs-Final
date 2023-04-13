import style from '../styles/Pages.module.css';
import styles from '../styles/Sections.module.css';
import Link from 'next/link.js';
import Layout from '../../components/Layout.js';
import { AiOutlineHeart } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { BsFillGridFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterFavori } from '../../store/features/likeSlice.js';

export default function allBookk() {

    const [data, setData] = useState([]);
    const [nbBook, setNbBook] = useState(0);

    useEffect(() => {
        fetch("https://example-data.draftbit.com/books")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    useEffect(() => {
        setNbBook(data.length);
    }, [data]);
    const [searchQuery, setSearchQuery] = useState('');

    const dispatch = useDispatch();

    const handleIncrementerFav = (book) => {
        const { title, image_url, id } = book;
        const newItem = { title, image: image_url, id };
        dispatch(ajouterFavori(newItem));
    }

    const [category, setCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('');

    const sortedData = [...data].sort((book1, book2) => {
        const title1 = (book1.title ?? '').toLowerCase(); //vérification avec l'opérateur de coalescence nulle
        const title2 = (book2.title ?? '').toLowerCase();
        if (sortOrder === 'a-z') {
            return title1.localeCompare(title2);
        } else if (sortOrder === 'z-a') {
            return title2.localeCompare(title1);
        } else {
            return 0;
        }
    });
    const filteredData = sortedData.filter(book => {
        if (category === 'all') {
            return true;
        } else {
            return (book.genres ?? '').split(',').map(genre => genre.trim()).includes(category);

        }
    });


    const handleSort = (event) => {
        setSortOrder(event.target.value);
    };



    return (
        <Layout>
            <>
                <div className={style.bigAll}>
                    <div className={style.All}>
                        <div className={style.categorie}>
                            <div>
                                <input className={style.search} type="text" placeholder='Search' value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)} />
                            </div>
                            <h2>Category</h2>
                            <div className={style.linkAll}>

                                <p onClick={() => setCategory('all')}>All</p>
                                <p onClick={() => setCategory('Humor')}>Humor</p>
                                <p onClick={() => setCategory('Childrens')}>Childrens</p>
                                <p onClick={() => setCategory('Adventure')}>Adventure</p>
                                <p onClick={() => setCategory('Romance')}>Romance</p>
                                <p onClick={() => setCategory('Horror')}>Horror</p>
                                <p onClick={() => setCategory('Classics')}>Classics</p>
                                <p onClick={() => setCategory('Animals')}>Animals</p>
                                <p onClick={() => setCategory('Inspirational')}>Inspirational </p>
                                
                            </div>
                            <div className={style.selectAll}>
                                <h2>Author</h2>
                                <select className={style.select} name="" id="">
                                    <option value="">All</option>
                                    <option value="">Book Description</option>
                                    <option value="">Fyodor Dostoyevsky</option>
                                    <option value="">John Steinbeck</option>
                                    <option value="">Bram Stoker</option>
                                    <option value="">Aldous Huxley</option>
                                    <option value="">William Goldman</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.leftFiltre}>
                            <div className={style.liftreAZ}>
                                <div className={style.grid}>
                                    <div className={style.gridJustify}>
                                        <BsFillGridFill />
                                    </div>
                                    <div className={style.gridJustify}>
                                        <FiAlignJustify />
                                    </div>
                                </div>
                                <p>{nbBook} Product Available</p>
                                <select value={sortOrder} onChange={handleSort}>
                                    <option value="">Sort by</option>
                                    <option value="a-z">(a-z)</option>
                                    <option value="z-a">(z-a)</option>
                                </select>
                            </div>
                            <div className={styles.cards}>
                                {filteredData
                                    .filter((book) =>
                                        book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())
                                    )

                                    .map((book) => (

                                        <div key={book.id} className={styles.card}>
                                            <img className={styles.imgBook} src={book.image_url} alt="" />
                                            <div className={styles.zoom}>
                                                <div className={styles.iconZoom}>
                                                    <AiOutlineHeart onClick={() => handleIncrementerFav(book)} />
                                                </div>
                                                <div className={styles.iconZoom}>
                                                    <Link href={`/book/${book.id}`}><MdZoomOutMap /></Link>

                                                </div>

                                            </div>
                                            <div className={styles.infos}>
                                                <h6>{book.title}</h6>
                                                <p>{book.edition}</p>
                                                <p>By: <b>{book.authors}</b></p>
                                                <p>Price: <b>$90</b></p>

                                                <button className={styles.btnCarte} onClick={() => handleIncrementerFav(book)}> <AiOutlineHeart /> Add to cart </button>
                                            </div>
                                        </div>
                                    )
                                    )}
                            </div>
                        </div>
                    </div>
                </div>


            </>

        </Layout>
    )
}


