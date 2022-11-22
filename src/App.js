//import logo from './logo.svg';
import bb_logo from './BB-Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bb_logo} className="App-logo" alt="logo" />
        <p>
          BlockBase is a fractional real estate marketplace that lowers the barrier of entry <br></br>
          for investors in real estate while offering greater liquidity and opportunity to real estate vendors.
        </p>
        <p> This website is still under development. </p>
        <p>
          Fill out<tab> </tab>
          <a
          className="App-link"
          href="https://forms.gle/s5UMhGDtyoTdzNU87"
          target="_blank"
          rel="noopener noreferrer"
        >
          this form
        </a>
           <tab> </tab>for the most current updates and to be added to our shortlist.
        </p>
        
      </header>
    </div>
  );
}

export default App;
