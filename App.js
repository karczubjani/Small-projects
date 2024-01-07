import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CityData } from './Content';
import City from "./Cities";
import Counter from "./Counter";
import Users from "./Users";
import Szinezo from "./Szinezo";
import User from "./User";
import Valto from "./Valto";
import Penzvalto from "./Penzvalto";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>Cities</h2>
      </header>

      <section>
        <nav>
          <ul>
            <li><Link to="/london">London</Link></li>
            <li><Link to="/paris">Paris</Link></li>
            <li><Link to="/tokyo">Tokyo</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/szinezo">Szinezo</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/penzvalto">Penzvalto</Link></li>
            <li><Link to="/valto">Valto</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/paris" element={ <City data={CityData.paris }/>}/>
          <Route path="/london" element={ <City data={CityData.london}/> }/>
          <Route path="/tokyo" element={ <City data={CityData.tokyo}/> }/>
          <Route path="/counter" element={ <Counter/> }/>
          <Route path="/users" element={ <Users/> }/>
          <Route path="/szinezo" element={ <Szinezo/> }/>
          <Route path="/user/:id" element={ <User/> }/>
          <Route path="/penzvalto" element={ <Penzvalto/> }/>
          <Route path="/valto" element={ <Valto/> }/>
          </Routes>

      </section>

      <footer>
        <p>Footer</p>
      </footer>
    </BrowserRouter>
  );
}



export default App;
