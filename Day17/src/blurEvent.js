import React, { useState } from 'react';

function OrderedListOnBlur() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleBlur = () => {
    const items = inputValue
      .split(',')
      .map(item => item.trim())
      .filter(item => item !== '');
    setListItems(items);
  };

  return (
    <div>
      <h3>Enter comma-separated items:</h3>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="e.g. Apple, Banana, Mango"
      />

      <h3>Your Ordered List:</h3>
      <ol>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default OrderedListOnBlur;
