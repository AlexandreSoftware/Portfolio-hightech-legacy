import logo from './logo.svg';
import "./css/App.css"
import Home from "./Home"
import { Route,Switch } from 'react-router-dom';
import ProjectsContainer from './ProjectsContainer'; 
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div id="app">
      
      <h1 class="titulo">Carlos Alexandre De oliveira Junior</h1>
      <Switch>
        <Route exact path={["/home", "/"]}>
          <Home />
        </Route>
        <Route path="/projects">
          <ProjectsContainer />
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
