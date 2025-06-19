import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AdmissionsPage.css'; // Will create this file next

const AdmissionsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="admissions-page">
      <h2 data-aos="fade-down">Admissions Information</h2>

      <section className="admissions-section process" data-aos="fade-up">
        <h3>Our Admission Process</h3>
        <ol className="process-steps">
          <li data-aos="fade-left" data-aos-delay="100"><strong>Submit Online Application Form:</strong> Complete and submit the application available on our website, along with all required documents such as previous academic transcripts and birth certificate.</li>
          <li data-aos="fade-left" data-aos-delay="200"><strong>Entrance Assessment:</strong> Eligible candidates will be scheduled for an age-appropriate entrance assessment to evaluate their academic readiness.</li>
          <li data-aos="fade-left" data-aos-delay="300"><strong>Student & Parent Interview:</strong> A friendly interview with the student and parents/guardians is conducted to understand the student's aspirations and ensure alignment with the school's values.</li>
          <li data-aos="fade-left" data-aos-delay="400"><strong>Receive Admission Offer:</strong> Successful candidates will receive an admission offer. Complete the enrollment formalities by the specified date to secure your place.</li>
        </ol>
      </section>

      <section className="admissions-section requirements" data-aos="fade-up" data-aos-delay="100">
        <h3>Eligibility & Requirements</h3>
        <p>To be considered for admission, candidates must meet the following criteria:</p>
        <ul>
          <li data-aos="fade-right" data-aos-delay="150">Completed application form with all correct details.</li>
          <li data-aos="fade-right" data-aos-delay="200">Copy of previous two years' academic records/transcripts.</li>
          <li data-aos="fade-right" data-aos-delay="250">Copy of birth certificate.</li>
          <li data-aos="fade-right" data-aos-delay="300">Recent passport-sized photographs of the student.</li>
          <li data-aos="fade-right" data-aos-delay="350">Recommendation letter (if applicable, especially for higher grades).</li>
          <li data-aos="fade-right" data-aos-delay="400">Successful completion of the entrance assessment and interview.</li>
        </ul>
      </section>

      <section className="admissions-section key-dates" data-aos="fade-up" data-aos-delay="200">
        <h3>Important Dates for Admission (Current/Upcoming Cycle)</h3>
        <ul>
          <li data-aos="zoom-in-up" data-aos-delay="250"><strong>Application Opening:</strong> September 1st, 2024</li>
          <li data-aos="zoom-in-up" data-aos-delay="300"><strong>Application Deadline:</strong> January 15th, 2025</li>
          <li data-aos="zoom-in-up" data-aos-delay="350"><strong>Assessment Period:</strong> February 1st - February 28th, 2025</li>
          <li data-aos="zoom-in-up" data-aos-delay="400"><strong>Interview Notifications:</strong> March 15th, 2025</li>
          <li data-aos="zoom-in-up" data-aos-delay="450"><strong>Admission Offers Sent:</strong> April 5th, 2025</li>
        </ul>
      </section>

      <button type="button" className="apply-now-btn" data-aos="zoom-in" data-aos-delay="300">
        Apply Now
      </button>
    </div>
  );
};

export default AdmissionsPage;
