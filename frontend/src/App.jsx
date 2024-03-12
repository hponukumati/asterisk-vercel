import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [randomItem, setRandomItem] = useState(null);
  const [shownIds, setShownIds] = useState(() => {
    // Initialize shownIds from local storage
    const savedShownIds = localStorage.getItem('shownIds');
    return savedShownIds ? JSON.parse(savedShownIds) : [];
  });

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
    // Update local storage whenever shownIds changes
    localStorage.setItem('shownIds', JSON.stringify(shownIds));
  }, [shownIds]);

  const handleRandomSelect = () => {
    const unseenItems = items.filter(item => !shownIds.includes(item.id));
    if (unseenItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * unseenItems.length);
      const selectedItem = unseenItems[randomIndex];
      setRandomItem(selectedItem);
      setShownIds(prevIds => [...prevIds, selectedItem.id]);
    }
  };

  const isButtonDisabled = shownIds.length >= items.length && items.length > 0;

  return (
    <div className="App">
      <h1>Things to do if you are bored</h1>
      <p>When you click the button you might find a lot of things that you can do some of which can be adventurous and others which can be very chill.</p>
      <button onClick={handleRandomSelect} disabled={isButtonDisabled}>
        {isButtonDisabled ? 'You’ve seen all the fun for now! Wait for new updates.' : 'Find Your Fun'}
      </button>
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
