import React, { useState } from "react";

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('')

    const handleAddItem = () => {
        if(inputValue !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    }

    const handleReset = () => {
        setItems([]);
    }

    return (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddItem}>Add</button>
          <button onClick={handleReset}>Clear the list</button>
        </div>
    );
};

export default TodoList;

