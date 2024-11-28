// src/services/api.js
export const processPDF = async (file) => {
    // Placeholder for API call logic, like sending the file to a backend for text extraction
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('/api/process-pdf', {
        method: 'POST',
        body: formData,
      });
      return response.json(); // Assuming the API returns text extracted from the PDF
    } catch (error) {
      console.error('Error processing PDF:', error);
    }
  };
  