import logo from './logo.svg';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ListCompany from './components/company/ListCompany';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element = {<Header/>}>
          <Route path='/' element = {<Home/>}/>
          <Route path='/listCompany' element= {<ListCompany/>}/>
          
      </Route>

      
      

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
