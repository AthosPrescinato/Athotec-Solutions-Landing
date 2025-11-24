function PDFViewer({ pdfUrl, title = "Manual" }) {
  return (
    <div className="pdf-viewer">
      <div className="pdf-controls">
        <h3>{title}</h3>
        <a href={pdfUrl} download className="download-btn">
          📥 Baixar PDF
        </a>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="open-btn"
        >
          🔗 Abrir em Nova Aba
        </a>
      </div>

      <iframe
        src={pdfUrl}
        width="100%"
        height="800px"
        title={title}
        frameBorder="0"
      />
    </div>
  );
}

export default PDFViewer;
