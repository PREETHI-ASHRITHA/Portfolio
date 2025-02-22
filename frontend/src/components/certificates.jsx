import React from 'react';
import './certificates.css';

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h2 className="section-title">My Certificates</h2>
      
      <div className="certificates-grid">
        {/* Certificate Card 1 - HTML */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="HTML.png" 
              alt="HTML and CSS" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">HTML and CSS</h3>
            <p className="certificate-issuer">IT SPECIALIST</p>
            <p className="certificate-date">Completed: 06 May 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1IFzGijhsNyzaiXf6yYozxZbDO3Hl7o-2/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 2 - JavaScript */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="JS.png" 
              alt="Python Essentials" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Javascript (Basic)</h3>
            <p className="certificate-issuer">Hackerrank</p>
            <p className="certificate-date">Completed: 23 September 2024</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1FTkkRN2s5WAuvzVTq2T7YTKhTKjJDysb/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 3 - C Programming */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="C.png" 
              alt="C Programming" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">C Programming</h3>
            <p className="certificate-issuer">Cisco</p>
            <p className="certificate-date">Completed: 19 January 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/134n9varEgEpz00bcGHR6vsKniLe11wZ6/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 4 - Java */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="Java.png" 
              alt="Java Oracle Certificate" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Java Foundations</h3>
            <p className="certificate-issuer">Issued by: Oracle</p>
            <p className="certificate-date">Completed: 09 September 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1aOmojhDPLf9uZE7WCdvih0ZSxTv20Pbi/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 5 - Python */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="Python.png" 
              alt="Python Essentials" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Python Programming</h3>
            <p className="certificate-issuer">Issued by: Python Institute</p>
            <p className="certificate-date">Completed: 28 March 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1CsxAdFx1VQAvXC-Q4eqV0cEOYBekFaHo/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 6 - Azure AI */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="AI.png" 
              alt="Azure AI Fundamentals" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Azure AI Fundamentals</h3>
            <p className="certificate-issuer">Issued by: Microsoft</p>
            <p className="certificate-date">Completed: 15 April 2024</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1qhvAE16KW_4VvjWfCL7QZuEg8kpeBWWc/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 7 - Data Mining */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="datamining.png" 
              alt="Data Mining" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Introduction to Data Mining</h3>
            <p className="certificate-issuer">Infosys</p>
            <p className="certificate-date">Completed: 06 May 2023</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1hnBJRLUNwWLBWt2dpiSSFxqEHKCcxZZL/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 8 - Machine Learning */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="ml.png" 
              alt="Machine Learning" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Introduction to Machine Learning</h3>
            <p className="certificate-issuer">Infosys</p>
            <p className="certificate-date">Completed: 25 February 2024</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1qasGyZwFqM76qO-tmcGLtUH6X93heUiV/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>

        {/* Certificate Card 9 - Deep Learning */}
        <div className="certificate-card">
          <div className="certificate-image-container">
            <img 
              src="dl.png" 
              alt="Deep Learning" 
              className="certificate-image"
            />
            <div className="certificate-image-overlay"></div>
          </div>
          <div className="certificate-content">
            <h3 className="certificate-title">Introduction to Deep Learning</h3>
            <p className="certificate-issuer">Infosys</p>
            <p className="certificate-date">Completed: 23 January 2025</p>
            <div className="certificate-actions">
              <a href="https://drive.google.com/file/d/1NxOBb_S5_Agser3q1PswYMdfHucu1VPK/view?usp=sharing" className="view-button">View Certificate</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;