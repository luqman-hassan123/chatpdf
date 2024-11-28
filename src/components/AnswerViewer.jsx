function AnswerViewer({ content }) {
    const answers = content.split("\n"); // Example: Split text by newlines or parse JSON
  
    return (
      <div className="answer-viewer">
        <h2>Extracted Answers</h2>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  }
  