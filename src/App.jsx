import "./style.css";
import { Switch, Route, Redirect } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio" component={MainComponent} />
        <Route exact path="/portfolio/projects" component={Projects} />
      </Switch>
      {<Redirect to="/portfolio" />}
    </>
  );
}

export default App;
