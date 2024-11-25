import React from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

const ParticlesBackground = ({ isDarkMode }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60, // Limitar FPS para mejorar rendimiento
        background: {
          color: {
            value: isDarkMode ? "#000000" : "#ffffff", // Fondo oscuro o claro según el modo
          },
        },
        particles: {
          number: {
            value: 150, // Número moderado de partículas
          },
          move: {
            enable: true,
            speed: 0.3, // Movimiento suave
          },
          opacity: {
            value: 0.9, // Opacidad alta para partículas luminosas
            random: true, // Variación en la opacidad
          },
          shape: {
            type: "circle", // Forma de las partículas
          },
          size: {
            value: { min: 0.5, max: 2 }, // Tamaño variable
            anim: {
              enable: true,
              speed: 2, // Animación en tamaño
              size_min: 0.5,
              sync: false,
            },
          },
          color: {
            value: isDarkMode ? "#ffffff" : "#000000", // Blanco en modo oscuro y negro en modo claro
          },
          light: {
            enable: true, // Habilitar el efecto de brillo/luz
            shadow: {
              enable: true,
              color: isDarkMode ? "#ffffff" : "#000000", // Ajuste del color de sombra dependiendo del modo
            },
          },
          retina_detect: true, // Soporte para pantallas retina
        },
        detectRetina: true, // Optimización para pantallas de alta resolución
      }}
    />
  );
};

export default ParticlesBackground;



