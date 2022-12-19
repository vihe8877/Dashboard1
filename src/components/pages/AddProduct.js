import React from 'react';
import './AddProduct.css';
import { useState } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('2.00');

  const handleClick = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className='create'>
      <form onClick={handleClick}>
        <label>Item name:</label>
        <input 
        type = "text" 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label>Item description:</label>
        <textarea 
        type = "text" 
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <label>Item cost</label>
        <input 
        type = "number" 
        required
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        />
        <button>Post</button>
      </form>
    </div>
  )
}

export default Create;