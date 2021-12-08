import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Business from "./Components/Category/categories/Business";
import Entertainment from "./Components/Category/categories/Entertainment";
import General from "./Components/Category/categories/General";
import Health from "./Components/Category/categories/Health";
import Science from "./Components/Category/categories/Science";
import Sports from "./Components/Category/categories/Sports";
import Technology from "./Components/Category/categories/Technology";
import Search from "./Components/Search/Search";
import "./App.scss";
import NotFoundScreen from "./Screens/NotFoundScreen";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* Home screen */}
          <Route path='/' exact>
            <HomeScreen />
          </Route>

          {/* Search screen */}
          <Route path='/search/:query'>
            <Search />
          </Route>

          {/* Categories */}
          <Route path='/category/business' exact>
            <Business />
          </Route>
          <Route path='/category/entertainment' exact>
            <Entertainment />
          </Route>
          <Route path='/category/general' exact>
            <General />
          </Route>
          <Route path='/category/health' exact>
            <Health />
          </Route>
          <Route path='/category/science' exact>
            <Science />
          </Route>
          <Route path='/category/sports' exact>
            <Sports />
          </Route>
          <Route path='/category/technology' exact>
            <Technology />
          </Route>

          {/* 404 page */}
          <Route path='*'>
            <NotFoundScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
