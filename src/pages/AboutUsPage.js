import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUsPage.css'; // Will create this file next

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="about-us-page">
      <h2 data-aos="fade-down">About Our School</h2>

      <section className="about-section history" data-aos="fade-right">
        <h3>Our History</h3>
        <p>
          Founded in 1974, Our School has a rich tradition of academic excellence and community involvement.
          What started as a small institution with a handful of students has grown into a leading center for learning,
          innovation, and holistic development. We are proud of our journey and the thousands of successful alumni
          who have passed through our doors.
        </p>
        <p>
          Over the decades, we have continually adapted to the evolving educational landscape, embracing new technologies
          and pedagogical approaches to ensure our students are well-prepared for the future.
        </p>
      </section>

      <section className="about-section mission" data-aos="fade-left">
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide a supportive and stimulating environment where students can achieve their full potential.
          We aim to foster critical thinking, creativity, and a lifelong love for learning, while instilling values of
          respect, integrity, and social responsibility.
        </p>
      </section>

      <section className="about-section vision" data-aos="fade-right" data-aos-delay="200">
        <h3>Our Vision</h3>
        <p>
          Our vision is to be a beacon of educational excellence, recognized for our innovative programs,
          dedicated faculty, and the positive impact our graduates make on the world. We aspire to cultivate
          leaders and innovators who are equipped to tackle global challenges.
        </p>
      </section>

      <section className="statistics-section" data-aos="zoom-in-up" data-aos-delay="300">
        <h3>Our Achievements</h3>
        <div className="counters-container">
          <div className="counter-item" data-aos="flip-left" data-aos-delay="400">
            <h4><CountUp end={50} duration={3} enableScrollSpy />+</h4>
            <p>Years Established</p>
          </div>
          <div className="counter-item" data-aos="flip-left" data-aos-delay="500">
            <h4><CountUp end={1200} duration={3} enableScrollSpy />+</h4>
            <p>Students Enrolled</p>
          </div>
          <div className="counter-item" data-aos="flip-left" data-aos-delay="600">
            <h4><CountUp end={75} duration={3} enableScrollSpy />+</h4>
            <p>Qualified Faculty</p>
          </div>
          <div className="counter-item" data-aos="flip-left" data-aos-delay="700">
            <h4><CountUp end={20} duration={3} enableScrollSpy />+</h4>
            <p>Awards Won</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
