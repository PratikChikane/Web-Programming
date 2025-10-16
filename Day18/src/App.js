import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2> Random Password Generator</h2>

      <label>
        Password Length:
        <input
          type="number"
          value={length}
          min="4"
          max="32"
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ marginLeft: '10px' }}
        />
      </label>

      <br /><br />
      <button onClick={generatePassword}>Generate Password</button>

      {password && (
        <div style={{ marginTop: '20px' }}>
          <strong>Generated Password:</strong>
          <p style={{ fontFamily: 'monospace', fontSize: '1.2em' }}>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
