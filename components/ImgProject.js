import Image from 'next/image'
import React from 'react'
import styles from '../styles/ImgProject.module.scss'

function ImgProject({ src }) {
    return (
        <div className={styles.zoom}>
            <div className={styles.img}>
                <Image
                    src={require(`../img/${src}.jpg`)}
                    alt='project'
                    width={390}
                    height={180}
                />
            </div>
        </div>
    )
}

export default ImgProject