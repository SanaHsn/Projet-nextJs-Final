import Link from 'next/link';
import styles from '../src/styles/SlideBar.module.css';

import { RxCross2 } from "react-icons/rx";
export default function OptionMenuLike({ active2, closeFunction2}) {
    console.log(' la plus belle');
    return(

        <>
        <div className={!active2?styles.modal2+' '+styles.off:styles.modal2} onClick={closeFunction2}>
        
        </div>
        <div className={!active2?styles.menu2+' '+styles.off:styles.menu2}>
                <div className={styles.header}>
                    <h3 className={styles.quit} onClick={closeFunction2}><RxCross2/></h3>
                    
                    
                </div>
                <div className={styles.content}>
                    
                </div>
                
            </div>
        
        </>
        
    )
}