import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import Welcome from './components/Welcome.js'
import ClickTracker from './components/ClickTracker';
import InteractiveWelcome from './components/InteractiveWelcome';
function App() {
  return (
    <div className="App">
     
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Message/>
      
      <Counter initialValue={0} incInterval={599} incAmount={1} />
      <ClickCounter/>
      <ClickTracker/>
      <InteractiveWelcome/>
    </div>
  );
}

export default App;
