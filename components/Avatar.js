import Image from 'next/image'
import React from 'react'
import styles from '../styles/Avatar.module.scss'

function Avatar() {
    return (
        <div className={styles.avatar}>
            <Image
                src={require('../img/avatar.jpg')}
                alt='avatar'
            />
        </div>
    )
}

export default Avatar