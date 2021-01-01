import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Views';
import SignIn from './Views/signin';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
