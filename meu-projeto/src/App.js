import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Carlos'

  const url = 'https:via.placeholder.com/150'

  const newName = name.toUpperCase()
  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma {2+2}</p>
      <img src={url} />
    </div>
  );
}

export default App;
