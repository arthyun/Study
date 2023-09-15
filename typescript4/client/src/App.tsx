import React, { useEffect, useState } from 'react';
import './style/App.css';

interface AppTypes {
  getTestApi : () => void;
  imgSrc : {
    birthday: string;
    gender: string;
    id: number;
    image: string;
    job: string;
    name: string;
  }[];
}

const App = () => {
  const [imgSrc, setImgSrc] = useState<AppTypes['imgSrc']>([]);

  const getTestApi : AppTypes['getTestApi'] = async () => {
    const response = await fetch('http://localhost:5000/api/user', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    const result = response;
    return setImgSrc(result);
  }

  useEffect(() => {
    getTestApi();
  },[]);

  console.log(imgSrc);

  return (
    <div className="App">
      <header className="App-header">
        <img src='./logo.svg' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {imgSrc?.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt={item.name} />
            </div>
          )
        }
        )}

      </header>
    </div>
  );
}

export default App;
