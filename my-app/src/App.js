import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import Welcome from './components/Welcome.js'
import ClickTracker from './components/ClickTracker';
function App() {
  return (
    <div className="App">
     
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Message/>
      <Welcome name="John" age={15}/>
      <Counter initialValue={0} incInterval={599} incAmount={1} />
      <ClickCounter/>
      <ClickTracker/>
    </div>
  );
}

export default App;
