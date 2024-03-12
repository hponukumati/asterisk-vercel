import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [randomItem, setRandomItem] = useState(null);
  const [shownIds, setShownIds] = useState([]);
  const [allShown, setAllShown] = useState(false);

  useEffect(() => {
    axios.get('/api/things')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Load shownIds from localStorage on mount
    const savedShownIds = JSON.parse(localStorage.getItem('shownIds')) || [];
    setShownIds(savedShownIds);
  }, []);

  useEffect(() => {
    // Save shownIds to localStorage whenever it changes
    localStorage.setItem('shownIds', JSON.stringify(shownIds));

    // Check if all items have been shown
    if (shownIds.length >= items.length) {
      setAllShown(true);
    }
  }, [shownIds, items.length]);

  const handleRandomSelect = () => {
    const unseenItems = items.filter(item => !shownIds.includes(item.id));

    if (unseenItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * unseenItems.length);
      const selectedItem = unseenItems[randomIndex];
      setRandomItem(selectedItem);
      setShownIds(prevIds => [...prevIds, selectedItem.id]);
    } else {
      setAllShown(true);
    }
  };

  const buttonMessage = allShown
    ? "🎉 All out of fun! Hang tight for our next update of adventures! 🌟"
    : "Find your Fun.";

  return (
    <div className="App">
      <h1>Things to do if you are bored</h1>
      <p>There are 30 fun things to do in the world at different places in the world.</p>
      <p>When you click the button you might find a lot of things that you can do some of which can be adventurous and others which can be very chill.</p>
      <p>Click the button to find out.</p>
      <button onClick={handleRandomSelect} disabled={allShown}>{buttonMessage}</button>
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
