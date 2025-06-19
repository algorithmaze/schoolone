import React, { useEffect, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomePage.css'; // Create this file for styling

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    // If using 'char' or 'image' shape, you might need the full bundle:
    // await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "#f0f4f8", // A light, neutral background for the particles
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#007bff", // Primary school/education color
      },
      links: {
        color: "#007bff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2, // Slower speed for a calmer effect
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle", // Simple, clean shape
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="home-page">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0 // Ensure it's in the background
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}> {/* Content wrapper */}
        <section className="hero">
          <h1 data-aos="fade-down">Welcome to Our School!</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Nurturing minds for a brighter future. Explore our programs and community.
          </p>
          <button type="button" className="cta-button" data-aos="zoom-in" data-aos-delay="400">
            Learn More
          </button>
        </section>

        <section className="highlights" data-aos="fade-up" data-aos-delay="600">
          <h2>Key Highlights</h2>
          {/* Placeholder for highlight items */}
          <div className="highlight-item" data-aos="fade-left" data-aos-delay="800">Highlight 1...</div>
          <div className="highlight-item" data-aos="fade-left" data-aos-delay="1000">Highlight 2...</div>
          <div className="highlight-item" data-aos="fade-left" data-aos-delay="1200">Highlight 3...</div>
        </section>
      </div>
    </div>
  );
};
export default HomePage;
