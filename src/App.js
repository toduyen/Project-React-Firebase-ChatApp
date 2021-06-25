import './App.css';
import Login from './Components/Login';
import ChatRom from './Components/ChatRom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
     /* //TODO bước 5---->Setup router*/
    return <BrowserRouter>
      <Switch>
        <Route component={Login} path='/login' ></Route>
        <Route component={ChatRom} path='/' ></Route>
      </Switch>
    </BrowserRouter>
}

export default App;
