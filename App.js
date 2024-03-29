import './App.css';
import Nav from './Nav'
import Banner from './Banner';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <h1> NETFLEX</h1>
        <Row title='Netflix Originals' 
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow/>
        <Row title='Trending Now'
        fetchurl={requests.fetchTrending}/>
        <Row title='Top Rated'
        fetchurl={requests.fetchTopRated}/>
        <Row title= 'ActionMovies' fetchurl={requests.fetchActionMovies}/>
        <Row title='ComedyMovies'fetchurl={requests.fetchComedyMovies}/>
        <Row title='HorrorMovies' fetchurl={requests.fetchHorrorMovies}/>
        <Row title='RomanceMovies' fetchurl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries' fetchurl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
