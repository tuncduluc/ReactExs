import './App.css';
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import Welcome from './components/Welcome.js'

function App() {
  return (
    <div className="App">
     
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Message/>
      <Welcome name="Feras"/>
    </div>
  );
}

export default App;
