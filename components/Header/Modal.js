import React, {useState} from 'react';
import styles from '../../styles/Modal.module.scss';

export default function Modal({open, setOpen}) {
    return (
        <div className={open ? styles.modal : styles.modal__isActive}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QCwLEDaIVjk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
            <img src="/img/close.svg" 
                    alt="close" 
                    style={{color: 'white', position: 'absolute', left: '-50px', top: '30px', cursor: 'pointer'}} 
                    onClick={() => setOpen(false)}
            />
            </div>
        </div>
    )
}