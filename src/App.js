
import './App.css';
import FilmContainer from './container/FilmContainer';
import image from "./images/Studio_Ghibli_logo.png"


function App() {
  return(
    <div className='App'>
      <img alt="studio"className="sg-logo" src={image}/>
      <div className='all-films'>
      <FilmContainer/>
      </div>
    </div>
  )
}

export default App;
