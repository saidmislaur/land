import React, {useState} from 'react';
import styles from '../../styles/Header.module.scss'
import Slide from './Slide'
import Modal from './Modal'
export default function HeaderContent() {

    const [isOpened, setIsOpened] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.header_content}>
                <div className={styles.header_content__text}>
                    <h2><span>50 BMG</span> PHARM</h2>
                    <p>For more than 1 years - helping performance focused athletes achieve their goals.</p>
                </div>
                <div className={styles.header_content__product}>
                    <Slide />
                    <div className={styles.header_content__video} onClick={() => setIsOpened(true)}>
                        <img src="/img/play.svg" alt="play" />
                    </div>
                </div>
            </div>
            <Modal open={isOpened} setOpen={setIsOpened} />
        </div>
    )
}