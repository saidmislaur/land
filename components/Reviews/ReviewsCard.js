import Image from 'next/image';
import styles from '../../styles/Reviews.module.scss';

export default function ReviewsCard({text, name, status, avatar}) {
    return (
        <div className={styles.reviews_card}>
                <div className={styles.reviews_card__text}>
                   <span>{text}</span>
                </div>
                <div className={styles.reviews_card_info}>
                    <img src={avatar} alt=""/>
                    <div>
                        <span className={styles.reviews_card_info__name}>{name}</span>
                        <span className={styles.reviews_card_info__status}>{status}</span>
                    </div>
                </div>
        </div>
    )
}