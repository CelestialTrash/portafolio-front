// src/pages/Admin.jsx
import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';

const Admin = () => {
    const [musicProjects, setMusicProjects] = useState([]);
    const [devProjects, setDevProjects] = useState([]);
    const [soundDesignProjects, setSoundDesignProjects] = useState([]);
    const [newProject, setNewProject] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editProjectId, setEditProjectId] = useState(null);
    const [currentSection, setCurrentSection] = useState('music');

    useEffect(() => {
        fetchProjects();
        resetNewProject();
    }, [currentSection]);

    const resetNewProject = () => {
        switch (currentSection) {
            case 'music':
                setNewProject({ title: '', artist: '', label: '', link: '', image: '' });
                break;
            case 'dev':
                setNewProject({ title: '', description: '', image: '', link: '' });
                break;
            case 'soundDesign':
                setNewProject({ title: '', video: '', link: '' }); // No description field
                break;
            default:
                setNewProject({});
        }
    };

    const fetchProjects = async () => {
        const endpointMap = {
            music: 'http://localhost:5000/api/music',
            dev: 'http://localhost:5000/api/dev',
            soundDesign: 'http://localhost:5000/api/sound-design'
        };
        try {
            const response = await fetch(endpointMap[currentSection]);
            const data = await response.json();
            if (currentSection === 'music') setMusicProjects(data);
            else if (currentSection === 'dev') setDevProjects(data);
            else if (currentSection === 'soundDesign') setSoundDesignProjects(data);
        } catch (error) {
            console.error('Error al obtener proyectos:', error);
        }
    };

    const createProject = async () => {
        const token = localStorage.getItem('authToken');
        const endpointMap = {
            music: 'http://localhost:5000/api/music',
            dev: 'http://localhost:5000/api/dev',
            soundDesign: 'http://localhost:5000/api/sound-design'
        };

        // Validar campos requeridos
        if (
            (currentSection === 'dev' &&
                (!newProject.title || !newProject.description || !newProject.image || !newProject.link)) ||
            (currentSection === 'music' &&
                (!newProject.title || !newProject.artist || !newProject.label || !newProject.image || !newProject.link)) ||
            (currentSection === 'soundDesign' &&
                (!newProject.title || !newProject.video || !newProject.link))
        ) {
            console.error('Faltan campos requeridos');
            return;
        }

        const filteredProject = Object.fromEntries(
            Object.entries(newProject).filter(([_, value]) => value.trim() !== "")
        );

        try {
            console.log('Datos enviados al backend:', filteredProject);

            const response = await fetch(endpointMap[currentSection], {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify(filteredProject),
            });

            if (!response.ok) {
                const error = await response.json();
                console.error('Error del backend:', error);
            }

            resetNewProject();
            fetchProjects();
        } catch (error) {
            console.error('Error al crear proyecto:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewProject({ ...newProject, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.adminPage}>
            <h1>Admin Dashboard</h1>

            <div className={styles.sectionSelector}>
                <button onClick={() => setCurrentSection('music')}>Música</button>
                <button onClick={() => setCurrentSection('dev')}>Desarrollo</button>
                <button onClick={() => setCurrentSection('soundDesign')}>Diseño de Sonido</button>
            </div>

            <h2>{isEditing ? 'Editar Proyecto' : 'Agregar Nuevo Proyecto'}</h2>
            <form className={styles.projectForm} onSubmit={(e) => {
    e.preventDefault();
    createProject();
}}>
    <input
        type="text"
        name="title"
        value={newProject.title || ''}
        onChange={handleInputChange}
        placeholder="Título"
    />
    {currentSection === 'music' && (
        <>
            <input
                type="text"
                name="artist"
                value={newProject.artist || ''}
                onChange={handleInputChange}
                placeholder="Artista"
            />
            <input
                type="text"
                name="label"
                value={newProject.label || ''}
                onChange={handleInputChange}
                placeholder="Sello"
            />
            <input
                type="text"
                name="image"
                value={newProject.image || ''}
                onChange={handleInputChange}
                placeholder="URL de la Imagen"
            />
        </>
    )}
    {currentSection === 'dev' && (
        <>
            <input
                type="text"
                name="description"
                value={newProject.description || ''}
                onChange={handleInputChange}
                placeholder="Descripción"
            />
            <input
                type="text"
                name="image"
                value={newProject.image || ''}
                onChange={handleInputChange}
                placeholder="URL de la Imagen"
            />
        </>
    )}
    {currentSection === 'soundDesign' && (
        <>
            <input
                type="text"
                name="video"
                value={newProject.video || ''}
                onChange={handleInputChange}
                placeholder="URL del Video"
            />
        </>
    )}
    {/* Campo común para el link */}
    <input
        type="text"
        name="link"
        value={newProject.link || ''}
        onChange={handleInputChange}
        placeholder="URL del Proyecto"
    />
    <button type="submit">Crear Proyecto</button>
</form>
        </div>
    );
};

export default Admin;
