import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Hello from './components/Hello.js'
import Message from './components/Message.js'
import Welcome from './components/Welcome.js'
import ClickTracker from './components/ClickTracker';
import InteractiveWelcome from './components/InteractiveWelcome';
import Login from './components/Login';
import UncontrolledLogin from './components/UncontrolledLogin';
import TodoList from './components/TodoList';
import { LanguageProvider } from './components/LanguageContext';
import DisplayLanguage from './components/DisplayLanguage';
function App() {
  
  
      
  const handleReset = (name) => { 
    console.log('Clearing input...');
  }
  return (
    <div className="App">
     
    
      <Hello/>
      <Message/>
      
      <Counter initialValue={0} incInterval={599} incAmount={1} />
      <ClickCounter/>
      <ClickTracker/>
      <InteractiveWelcome onReset={handleReset}/>
      <TodoList/>
      <LanguageProvider>
      <div>
        Language Selector
        <DisplayLanguage />
      </div>
    </LanguageProvider>
    </div>
  );
}

export default App;
