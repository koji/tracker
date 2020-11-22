import { useState, useEffect } from 'react';
import { Map } from './components/Map';
import { Loader } from './components/Loader';
import { Header } from './components/Header';

function App() {
  const [eventsData, setEventsData] = useState([]);
  const [locading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async() => {
      setLoading(true);
      const url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
      const res = await fetch(url);
      const { events } = await res.json();
      setEventsData(events);
      setLoading(false);
    }

    fetchEvents();
    // console.log(eventsData);
  },[])


  return (
    <div className="App">
      <Header />
      {!locading ? <Map eventsData={eventsData} /> : <Loader />}
    </div>
  );
}

export default App;
