import Image from 'next/image'; 
import styles from '../../styles/Products.module.scss';
import SvgProd from '../../public/img/prodSvg.svg';
import IbutSvg from '../../public/img/ibutamoren.png';

export default function Products({classTitle, title, name, text, svg, img, id, white}) {
    return (
        <div id={'products'} className={white ? styles.products + white : styles.products}>
            <div className="container">
            <h1>{title}</h1>
            <div id={id} className={white ? styles.products_content__white : styles.products_content}>
                <div className={white ? styles.products_des__white : styles.products_des}>
                    <div className={white ? styles.products_des__whiteTitle : styles.products_des__title}>
                        <h2>{name}</h2>
                        <Image src={svg}/>
                    </div>
                    <p>{text}</p>
                </div>
                <div className={styles.products_image}>
                    <img src={img} />
                </div>
            </div>
            </div>
        </div>
    )
}