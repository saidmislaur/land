import Image from 'next/image'
import Slide from './Slide';
import styles from '../../styles/Reviews.module.scss'
import ReviewsCard from './ReviewsCard'
import Avatar from '../../public/img/avatar.png';
export default function Reviews() {
    return (
        <div id={'reviews'}className={styles.reviews}>
            <div className="container">
                <h1>REVIEWS</h1>
                <div className={styles.reviews_content}>
                    <Slide />
                </div>
            </div>
        </div>
    )
}