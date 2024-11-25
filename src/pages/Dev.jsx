import React, { useEffect, useState } from 'react';
import styles from './Dev.module.css';
import ParticlesBackground from '../components/ParticlesBackground';

const Dev = ({ isDarkMode }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://aquiles-hinestrosa-back.vercel.app/api/dev');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching dev projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className={`${styles.devPage} ${isDarkMode ? styles.dark : styles.light}`}>
            <ParticlesBackground isDarkMode={isDarkMode} />
            <div className={styles.projectList}>
                {projects.map((project) => (
                    <div key={project._id} className={styles.projectCard}>
                        <img src={project.image} alt={`${project.title} cover`} className={styles.projectImage} />
                        <div className={styles.projectInfo}>
                            <p className={styles.projectTitle}>{project.title}</p>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                Visit
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dev;
