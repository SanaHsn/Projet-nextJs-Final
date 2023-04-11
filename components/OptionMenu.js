import Link from 'next/link';
import styles from '../src/styles/SlideBar.module.css';
import { RxCross2 } from "react-icons/rx";

export default function OptionMenu({active, closeFunction}) {
    console.log('tesst ');
    return(
        <>
        <div className={!active?styles.modal+' '+styles.off:styles.modal} onClick={closeFunction}>
        
        </div>
        <div className={!active?styles.menu+' '+styles.off:styles.menu}>
                <div className={styles.header}>
                    <h3>BOOKSHELF</h3>
                    <h3 className={styles.quit} onClick={closeFunction}><RxCross2/></h3>
                </div>
                <div className={styles.content}>
                    <Link href='/'>Bookshelf Minimal</Link>
                    <Link href='/'>Bookshelf Modern</Link>
                    <Link href='/'>Bookshelf Classic</Link>
                    <Link href='/allBook'> All Book</Link>
                </div>
                
            </div>
        </>
        
    )
}