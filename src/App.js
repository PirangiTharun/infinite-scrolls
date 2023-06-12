import React, { useEffect, useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Loader from './components/Loader';

function App() {
  const [records, setRecords] = useState([]);
  const [loading ,setLoading] = useState(false);
  const getData = async () => {
    await fetch('https://randomuser.me/api/?results=15')
      .then(response => response.json())
      .then(data => setRecords((prev) => [...prev, ...(data.results)]));
    setLoading(false);
  }
  useEffect(() => {
    getData();
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll',handleInfiniteScroll);
    }
  }, []);
  const handleInfiniteScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
      setLoading(true);
      getData();
    }
  };

  return (
    <div style={{textAlign: 'center'}} >
      <h1>Welcome to Infinite Scroll...</h1>
      <div className="App">
      {records.length===0 && <Loader />}
      {records.map((record,index) => {
        return <UserCard key={index} record={record} />
      })}
      {loading && <Loader />}
      </div>
    </div>
  );
}

export default App;
