import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AcademicsPage.css'; // Will create this file next

const AcademicsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="academics-page">
      <h2 data-aos="fade-down">Our Academic Programs</h2>

      <section className="program-section" data-aos="fade-up">
        <h3 className="program-title">Department of Science</h3>
        <p className="program-description">
          Explore the wonders of science with our comprehensive curriculum covering Physics, Chemistry, and Biology. Our state-of-the-art labs provide hands-on learning experiences, fostering a spirit of inquiry and discovery.
        </p>
        <div className="courses-list" data-aos="fade-up" data-aos-delay="100">
          <h4>Key Courses:</h4>
          <ul>
            <li>Introduction to Physics & Mechanics</li>
            <li>Organic Chemistry & Biochemistry</li>
            <li>Cellular & Molecular Biology</li>
            <li>Environmental Science & Ecology</li>
          </ul>
        </div>
      </section>

      <section className="program-section" data-aos="fade-up" data-aos-delay="150">
        <h3 className="program-title">Department of Arts & Humanities</h3>
        <p className="program-description">
          Nurture your creativity and critical thinking through our diverse Arts & Humanities programs. We cover literature, history, philosophy, and visual arts, encouraging students to explore human expression and culture.
        </p>
        <div className="courses-list" data-aos="fade-up" data-aos-delay="250">
          <h4>Key Focus Areas:</h4>
          <ul>
            <li>World Literature & Creative Writing</li>
            <li>Ancient & Modern History</li>
            <li>Ethics & Philosophical Inquiry</li>
            <li>Studio Art & Art History</li>
          </ul>
        </div>
      </section>

      <section className="program-section" data-aos="fade-up" data-aos-delay="200">
        <h3 className="program-title">Mathematics Program</h3>
        <p className="program-description">
          Our Mathematics Program develops strong analytical and problem-solving skills. From foundational concepts to advanced calculus and statistics, we prepare students for success in STEM fields and beyond.
        </p>
        <div className="courses-list" data-aos="fade-up" data-aos-delay="300">
          <h4>Core Subjects:</h4>
          <ul>
            <li>Algebra & Trigonometry</li>
            <li>Calculus I & II</li>
            <li>Probability & Statistics</li>
            <li>Discrete Mathematics</li>
          </ul>
        </div>
      </section>

      <section className="program-section" data-aos="fade-up" data-aos-delay="250">
        <h3 className="program-title">Computer Studies & Technology</h3>
        <p className="program-description">
          Dive into the world of technology with our Computer Studies program. We offer courses in programming, software development, data analysis, and cybersecurity, equipping students with essential digital age skills.
        </p>
        <div className="courses-list" data-aos="fade-up" data-aos-delay="350">
          <h4>Specialization Tracks:</h4>
          <ul>
            <li>Python & Java Programming</li>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Database Management</li>
            <li>Introduction to Cybersecurity</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default AcademicsPage;
