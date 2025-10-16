import React, { useState } from 'react';

function TextCaseConverter() {
  const [inputText, setInputText] = useState('');
  const [caseType, setCaseType] = useState('none'); // 'uppercase', 'lowercase', 'titlecase', 'none'

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleRadioChange = (event) => {
    setCaseType(event.target.value);
  };

  const getProcessedText = () => {
    switch (caseType) {
      case 'uppercase':
        return inputText.toUpperCase();
      case 'lowercase':
        return inputText.toLowerCase();
      case 'titlecase':
        return inputText
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      default:
        return inputText;
    }
  };

  return (
    <div>
      <h1>Text Case Converter</h1>

      <div>
        <label htmlFor="textInput">Enter Text:</label>
        <input
          type="text"
          id="textInput"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="caseOption"
            value="uppercase"
            checked={caseType === 'uppercase'}
            onChange={handleRadioChange}
          />{' '}
          Uppercase
        </label>
        <label>
          <input
            type="radio"
            name="caseOption"
            value="lowercase"
            checked={caseType === 'lowercase'}
            onChange={handleRadioChange}
          />{' '}
          Lowercase
        </label>
        <label>
          <input
            type="radio"
            name="caseOption"
            value="titlecase"
            checked={caseType === 'titlecase'}
            onChange={handleRadioChange}
          />{' '}
          Title Case
        </label>
      </div>

      <div>
        <h2>Output:</h2>
        <p>{getProcessedText()}</p>
      </div>
    </div>
  );
}

export default TextCaseConverter;