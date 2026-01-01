const Resume = () => {
  const resumePdf = '/static/pdf/resume.pdf';
  
  return (
    <main className="resume-page">
      <div className="resume-container">



        <div className="pdf-viewer-container">
          <embed
            src={resumePdf}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </div>
        <div className="resume-actions">
          <a href={resumePdf} download="resume.pdf" className="btn btn-primary">
            Download PDF
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Open in New Tab
          </a>
        </div>

      </div>
    </main>
  );
};

export default Resume;
