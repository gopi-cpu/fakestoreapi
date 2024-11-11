import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Category from './components/categories';
import Productdetails from './components/productdetails';
import FetchCategory from './components/fetchcategory';
import Singleproductpage from './components/singleproductpage';


function App() {
  return (
    <div className="App">
     
     <Routes  >
      <Route  path='/' element={<FetchCategory  />}/>
      <Route  path='/productdetails' element={<Singleproductpage  />} />
     </Routes>
    </div>
  );
}

export default App;
