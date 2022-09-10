import Image from 'next/image'
import React from 'react'
import styles from '../styles/Img.module.scss'

function Img({ src }) {
    return (
        <div className={styles.img}>
            <Image
                src={require(`../img/${src}.jpg`)}
                alt='avatar'
            />
        </div>
    )
}

export default Img