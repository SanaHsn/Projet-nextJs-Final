import style from '../styles/Pages.module.css';
import styles from '../styles/Sections.module.css';
import Image from 'next/image.js';
import Link from 'next/link.js';
import { AiOutlineHeart } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { BsFillGridFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout.js';



export default function allBookk() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://example-data.draftbit.com/books')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <Layout>
            <>
            {data ?
                <div className={style.bigAll}>

                    <div className={style.All}>

                        <div className={style.categorie}>
                            <div>
                                <input className={style.search} type="text" placeholder='Search' />
                            </div>
                            <h2>Category</h2>
                            <div className={style.linkAll}>
                                <Link href={''}> <p>All</p> </Link>
                                <Link href={'/'}> <p>Category</p> </Link>
                                <Link href={'/'}> <p>Mystery thriller</p> </Link>
                                <Link href={'/'}> <p>Fantasty</p> </Link>
                                <Link href={'/'}> <p>Biography</p> </Link>
                                <Link href={'/'}> <p>Music</p> </Link>
                                <Link href={'/'}> <p>Finction</p> </Link>
                                <Link href={'/'}> <p>Book Title</p> </Link>
                                <Link href={'/'}> <p>Inspitatinal</p> </Link>
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
                            <div>
                                <h2>Price</h2>
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
                                <p>13 Product Available</p>
                                <select name="" id="">
                                    <option value="">Price(lowest)</option>
                                    <option value="">Price(highest)</option>
                                    <option value="">(a-z)</option>
                                    <option value="">(z-a)</option>
                                </select>
                            </div>
                            <div className={styles.cards}>
                                {data.map((book) => {
                                    return (
                                        <div key={book.id} className={styles.card}>
                                            <img className={styles.imgBook} src={book.image_url} alt="" />
                                            <div className={styles.zoom}>
                                                <div className={styles.iconZoom}>
                                                    <AiOutlineHeart />
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

                                                <button className={styles.btnCarte}> <AiOutlineHeart /> Add to cart </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                : <div className={style.bigAll}>Loading...</div>
            }

        </>
        
        </Layout>
    )
}


