import Image from "next/image.js";
import style from '../../styles/Modal.module.css';
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router.js";
import { AiOutlineHeart } from "react-icons/ai";


export default function singleProduct({product, setModal}) {
    const {num_pages, genres, edition, authors,image_url, description,title,format,rating, id} = product;
    const router = useRouter();

    return (
        <div className={style.container}>
            <div className={style.modal}>
                <div className={style.headerId}>
                    <h3>{title}</h3>
                    <span onClick={() => router.back(-1)} className={style.RxCross2}><RxCross2/></span>
                </div>
                <div className={style.contenu}>
                    <img src={image_url} className={style.imgModal} />
                    <div className={style.para}>
                        <div>
                        <p>{description}</p>
                        <p><b>Edition</b>&emsp;     : {edition}</p>
                        <p><b>authors</b>&emsp;     : {authors} </p>
                        <p><b>Total pages</b>&emsp; : {num_pages} </p>
                        <p><b>Genres</b> &emsp;      : {genres} </p>
                        <p><b>Price</b>&emsp;       :$90 </p>
                        <p><b>Format</b>&emsp;      : {format} </p>
                        <p><b>Rating</b>&emsp;       : {rating} </p>
                        </div>
                        <button className={style.btnCarte}> <AiOutlineHeart/> Add to cart </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const req = await fetch("https://example-data.draftbit.com/books");
    const products = await req.json();

    const paths = products.map((product)=>{
        return{
            params: {id: product.id.toString()},
        };
    })
    return{
        paths,
        fallback: false,
    }
}
export async function getStaticProps(context){
    const req = await fetch(`https://example-data.draftbit.com/books/${context.params.id}`);
    const product = await req.json();

    return{
        props:{
            product
        }
    }
}