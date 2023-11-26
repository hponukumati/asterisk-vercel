import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [items, setItems] = useState([]); // Stores all items
  const [randomItem, setRandomItem] = useState(null); // Stores the randomly selected item
  useEffect(() => {
    axios.get('/api/things')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRandomSelect = () => {
    if (items.length > 0) {
      const randomIndex = Math.floor(Math.random() * items.length);
      setRandomItem(items[randomIndex]);
    }
  };

  return (
    <div>
      <h1>Things to do if you are bored</h1>
      <p>When you click the button you might find a lot of things that you can do some of which can be adventurous and others which can be very chill.</p>
      <p>Click the button to find out.</p>
      <button onClick={handleRandomSelect}>Find your Fun.</button>
      {randomItem && (
        <div>
          <h2>{randomItem.title}</h2>
          <p>{randomItem.content}</p>
          <p>Location: {randomItem.place}</p>
        </div>
      )}
    </div>
  );
}

export default App;