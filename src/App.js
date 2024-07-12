import './App.css'
import Header from './components/Header';


function App() {

  let count = 0;
  const data ="njananu map"
  const pass ="vanno vannu"

  return (
    <div>
      <HELLO/>
      <p>this is count {count}</p>
      <h2 className="hello">{data}</h2>
      <Header pass={pass} />

    </div>
  );
}

export default App;

function HELLO(){
  return(
    <h1 style={{color:'red'}}>HELLO WORLD</h1>
  )
}