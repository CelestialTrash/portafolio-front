import React, { useEffect, useState } from 'react';
import styles from './SoundDesign.module.css';
import ParticlesBackground from '../components/ParticlesBackground';

const SoundDesign = ({ isDarkMode }) => {
    const [projects, setProjects] = useState([]);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://aquiles-hinestrosa-back.vercel.app/api/sound-design');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching sound design projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const loopedProjects = [...projects, ...projects, ...projects];

    const openFullscreen = (index) => {
        setCurrentIndex(index);
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
        setCurrentIndex(null);
    };

    const nextVideo = () => {
        setCurrentIndex((currentIndex + 1) % projects.length);
    };

    const prevVideo = () => {
        setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className={`${styles.soundDesignPage} ${isDarkMode ? styles.dark : styles.light}`}>
            <ParticlesBackground isDarkMode={isDarkMode} />
            <div className={styles.carousel}>
                {loopedProjects.map((project, index) => (
                    <div
                        key={`${project._id}-${index}`}
                        className={styles.carouselItem}
                        onClick={() => openFullscreen(index % projects.length)}
                    >
                        <video
                            src={project.video}
                            className={styles.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <div className={styles.projectInfo}>
                            <p className={styles.projectTitle}>{project.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {isFullscreen && currentIndex !== null && (
                <div className={styles.fullscreenOverlay}>
                    <button className={styles.closeButton} onClick={closeFullscreen}>
                        ✕
                    </button>
                    <button className={styles.prevButton} onClick={prevVideo}>
                        〈
                    </button>
                    <video
                        src={projects[currentIndex].video}
                        className={styles.fullscreenVideo}
                        controls
                        autoPlay
                    />
                    <button className={styles.nextButton} onClick={nextVideo}>
                        〉
                    </button>
                </div>
            )}
        </div>
    );
};

export default SoundDesign;
