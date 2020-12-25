import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <h1>Works</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;


// TIME https://youtu.be/-cMqr9HpZ-Y?t=3309