import React, { useState } from 'react';

const TodoList = ({ render }) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = inputValue.trim();
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const handleRemove = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleReset = () => {
    setItems([]);
  }

  
  return (
    <div>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                {item}
                    <button 
                        onClick={() => handleRemove(index)}>
                        Remove
                    </button>
                </li>
        ))}
        </ul>

      {typeof render === 'function' && render(items, handleRemove)}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TodoList;
