import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import UserList from "./UserList"

function App() {
  return (
    <div className="App">
      <h1>Welcome Home...</h1>
      {/* <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>

      </BrowserRouter> */}
      <UserList/>
    </div>
  );
}

export default App;
