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
import GithubUser from './components/GitHubUser';
import GitHubUserList from './components/GitHubUserList';
function App() {
  
  
      
  const handleReset = (name) => { 
    console.log('Clearing input...');
  }
  return (
    <div className="App">
      <Hello/>
      <Message/>  
      <Counter initialValue={0} incInterval={599} incAmount={1} />
      <ClickCounter initialValue={44} interval={5}/>
      <ClickTracker/>
      <InteractiveWelcome onReset={handleReset}/>
      <TodoList/>
      <GithubUser username="fjobeir"/>
      <GitHubUserList/>
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
