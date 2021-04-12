import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Principal from "./components/Principal";
import Season from "./components/Season";
import Episode from "./components/Episode";
import Search from "./components/Search";
import Character from "./components/Character";


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Principal} />
      <Route path="/season/:name/:id" component={Season} />
      <Route path="/episode/:id" component={Episode} />
      <Route path="/character/:name" component={Character} />
      <Route path="/" component={Search} />
    </Router>
  );
};

export default App;
