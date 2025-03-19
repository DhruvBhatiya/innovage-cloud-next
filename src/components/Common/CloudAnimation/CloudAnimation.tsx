"use client";
import React from 'react';
import styles from './CloudAnimation.module.css';

const CloudAnimation = () => {
    return (
        <div className={styles.cloudContainer}>
            {/* Cloud 1 (Light Blue) */}
            <div className={`${styles.cloud} ${styles.cloud1}`}>
                <span className={styles.cloudText}>Innovation</span>
                <div className={styles.part1}></div>
                <div className={styles.part2}></div>
                <div className={styles.part3}></div>
            </div>

            {/* Cloud 2 (Pink) */}
            <div className={`${styles.cloud} ${styles.cloud_a} ${styles.cloud2}`}>
                <span className={styles.cloudText}>Quality</span>
                <div className={styles.part1}></div>
                <div className={styles.part2}></div>
                <div className={styles.part3}></div>
            </div>

            {/* Cloud 3 (Yellow) */}
            <div className={`${styles.cloud}  ${styles.cloud_b} ${styles.cloud3}`}>
                <span className={styles.cloudText}>Trust</span>
                <div className={styles.part1}></div>
                <div className={styles.part2}></div>
                <div className={styles.part3}></div>
            </div>

            {/* Cloud 4 (Purple) */}
            {/* <div className={`${styles.cloud} ${styles.cloud_b} ${styles.cloud4}`}>
                <span className={styles.cloudText}></span>
                <div className={styles.part1}></div>
                <div className={styles.part2}></div>
                <div className={styles.part3}></div>
            </div> */}
        </div>
    );
};

export default CloudAnimation;
