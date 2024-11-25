import React, { useEffect, useState } from 'react';
import styles from './Music.module.css';
import ParticlesBackground from '../components/ParticlesBackground';

const Music = ({ isDarkMode }) => {
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await fetch('https://aquiles-hinestrosa-back.vercel.app/api/music');
                const data = await response.json();

                const sortedReleases = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setReleases(sortedReleases);
            } catch (error) {
                console.error('Error fetching music releases:', error);
            }
        };
        fetchReleases();
    }, []);

    return (
        <div className={`${styles.musicPage} ${isDarkMode ? styles.dark : styles.light}`}>
            <ParticlesBackground isDarkMode={isDarkMode} />
            <div className={styles.releaseList}>
                {releases.map((release) => (
                    <div key={release._id} className={styles.releaseCard}>
                        <img src={release.image} alt={`${release.title} cover`} className={styles.releaseImage} />
                        <div className={styles.releaseInfo}>
                            <p className={styles.releaseTitle}>{release.title}</p>
                            <p className={styles.releaseArtist}>Artist: {release.artist}</p>
                            <p className={styles.releaseLabel}>Label: {release.label}</p>
                            <a href={release.link} target="_blank" rel="noopener noreferrer" className={styles.releaseLink}>
                                Listen
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Music;

