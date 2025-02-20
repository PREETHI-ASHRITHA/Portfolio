import React from 'react';
import './certificates.css';

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h2 className="section-title">My Certificates</h2>
      
      <div className="certificates-grid">
        {/* Certificate Card 0 */}
        <div className="certificate-card">
          <img 
            src="src\assets\HTML.png" 
            alt="HTML and CSS" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">HTML and CSS</h3>
            <p className="certificate-issuer">IT SPECIALIST</p>
            <p className="certificate-date">Completed: 06 May 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1IFzGijhsNyzaiXf6yYozxZbDO3Hl7o-2/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>

        {/* Certificate Card 1 */}
        <div className="certificate-card">
          <img 
            src="src\assets\JS.png" 
            alt="Python Essentials" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Javascript (Basic)</h3>
            <p className="certificate-issuer">Hackerrank</p>
            <p className="certificate-date">Completed: 23 September 2024</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1FTkkRN2s5WAuvzVTq2T7YTKhTKjJDysb/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>

        {/* Certificate Card 0 */}
        <div className="certificate-card">
          <img 
            src="src\assets\C.png" 
            alt="C Programming" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">C Programming</h3>
            <p className="certificate-issuer">Cisco</p>
            <p className="certificate-date">Completed: 19 January 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/134n9varEgEpz00bcGHR6vsKniLe11wZ6/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>

        {/* Certificate Card 2 */}
        <div className="certificate-card">
          <img 
            src="src\assets\Java.png" 
            alt="Java Oracle Certificate" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Java Foundations</h3>
            <p className="certificate-issuer">Issued by: Oracle</p>
            <p className="certificate-date">Completed: 09 September 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1aOmojhDPLf9uZE7WCdvih0ZSxTv20Pbi/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>

        {/* Certificate Card 3 */}
        <div className="certificate-card">
          <img 
            src="src\assets\Python.png" 
            alt="Python Essentials" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Python Programming</h3>
            <p className="certificate-issuer">Issued by: Python Institute</p>
            <p className="certificate-date">Completed: 28 March 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1CsxAdFx1VQAvXC-Q4eqV0cEOYBekFaHo/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>

        {/* Certificate Card 4 */}
        <div className="certificate-card">
          <img 
            src="src\assets\AI.png" 
            alt="Azure AI Fundamentals" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Azure AI Fundamentals</h3>
            <p className="certificate-issuer">Issued by: Microsoft</p>
            <p className="certificate-date">Completed: 15 April 2024</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1qhvAE16KW_4VvjWfCL7QZuEg8kpeBWWc/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>

         {/* Certificate Card 0 */}
         <div className="certificate-card">
          <img 
            src="src\assets\datamining.png" 
            alt="Data Mining" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Introduction to Data Mining</h3>
            <p className="certificate-issuer">Infosys</p>
            <p className="certificate-date">Completed: 06 May 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1hnBJRLUNwWLBWt2dpiSSFxqEHKCcxZZL/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>



         {/* Certificate Card 0 */}
         <div className="certificate-card">
          <img 
            src="src\assets\ml.png" 
            alt="Machine Learning" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Introduction to Machine Learning</h3>
            <p className="certificate-issuer">Infosys</p>
            <p className="certificate-date">Completed: 25 February 2024</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1qasGyZwFqM76qO-tmcGLtUH6X93heUiV/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>



        {/* Certificate Card 0 */}
        <div className="certificate-card">
          <img 
            src="src\assets\dl.png" 
            alt="Deep Learning" 
            className="certificate-image"
          />
          <div className="certificate-content">
            <h3 className="certificate-title">Introduction to Deep Learning</h3>
            <p className="certificate-issuer">Infosys</p>
            <p className="certificate-date">Completed: 23 January 2025</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1NxOBb_S5_Agser3q1PswYMdfHucu1VPK/view?usp=sharing" className="view-button">View Certificate</a>
              {/* <a href="#" className="verify-button">Verify</a> */}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Certificates;