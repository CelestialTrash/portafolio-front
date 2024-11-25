// src/components/Home.jsx
import { useRef, useState } from 'react';
import styles from './Home.module.css';
import ParticlesBackground from '../components/ParticlesBackground';
/* import CustomCursor from '../components/CustomCursor'; */
import photo from "../assets/images/1b_DSC0244.jpg"

const Home = ({ isDarkMode }) => {
  const bioRef = useRef(null);
  const [isInSkillsSection, setIsInSkillsSection] = useState(false);

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : styles.light}`}>
      {/* Fondo de partículas */}
      <ParticlesBackground isDarkMode={isDarkMode} />

      {/* Custom Cursor */}
      {/* <CustomCursor isDarkMode={isDarkMode} isInSkillsSection={isInSkillsSection} /> */}

      {/* Header */}
      <Header />

      {/* Sección de Bio */}
      <BioSection bioRef={bioRef} />

      {/* Sección de Skills */}
      <SkillsSection 
        onMouseEnter={() => setIsInSkillsSection(true)} 
        onMouseLeave={() => setIsInSkillsSection(false)} 
      />
    </div>
  );
};

const Header = () => (
  <div className={styles.header}>
    <h1>MY NAME IS AQUILES HINESTROSA</h1>
    <p>
      I am a Full Stack Web Developer a Music Producer & Sound Designer.
    </p>
  </div>
);

const BioSection = ({ bioRef }) => (
  <div ref={bioRef} className={styles.bioSection}>
    <div className={styles.bioContent}>
      <BioText />
      <BioPhoto />
    </div>
  </div>
);

const BioText = () => (
  <div className={styles.bioText}>
    <div className={styles.bioHeader}>
      <h1>About</h1>
      <hr className={styles.bioDivider} />
    </div>
    <p className={styles.artsyParagraph}>
      From an early age, I was captivated by the power of sound in storytelling, deeply inspired by<br />
      the music of composers like <strong>Akira Yamaoka</strong> and <strong>Mamoru Fujisawa</strong>. This passion led me to explore<br />
      <strong>Sound Design</strong> and <strong>Music Production</strong> through projects like <strong>𝕮𝖊𝖑𝖊𝖘𝖙𝖎𝖆𝖑𝕿𝖗𝖆𝖘𝖍._</strong>, blending<br />
      experimental electronic and Latin sounds, and <strong>𝕯𝖆𝖙𝖆 𝕾𝖑𝖚𝖙._</strong>, focused on Club and Latin Core.<br /><br />
      With a love for technology, I also ventured into <strong>Web Development</strong>, combining sound with<br />
      interactive experiences in apps and video games. My goal is always to push creative boundaries,<br />
      finding fresh solutions through innovation and experimentation.
    </p>
    <SocialLinks />
  </div>
);

const BioPhoto = () => (
  <div className={styles.bioPhotoContainer}>
    <div className={styles.bioPhoto}>
      <img src="src/assets/images/1b_DSC0244.jpg" alt="Your photo" />
    </div>
  </div>
);

const SocialLinks = () => (
  <div className={styles.socialLinks}>
    <a href="">Instagram</a>
    <a href="">SoundCloud</a>
    <a href="">Spotify</a>
    <a href="">GitHub</a>
  </div>
);

const SkillsSection = ({ onMouseEnter, onMouseLeave }) => (
  <div className={styles.skillsSection} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <h2>Technologies I Use</h2>
    <div className={styles.skillsGrid}>
      {['React', 'JavaScript', 'HTML & CSS', 'MongoDB', 'Node.js', 'Sanity'].map((tech) => (
        <div key={tech} className={styles.skillCard}>
          <p>{tech}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
