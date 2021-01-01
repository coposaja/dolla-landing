import './App.css';
import { BrowserRouter } from "react-router-dom";
import Home from './Views';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
