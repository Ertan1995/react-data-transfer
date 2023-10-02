
import './App.css';
import data from './data/data.js'

import Body from './components/Body';
import Navi from './components/Navi';
import Sidebar from './components/Sidebar';
import { useState } from 'react';


function App() {

  const [categories , setCategories ] = useState(data.categories);
const [products , setProducts ] = useState (data.products);

  return (
    
    <div className='app-div'>
    
      <Navi categories={categories}/>
      <Body products = {products}/>
      <Sidebar categories={categories}/>
    </div>
  );
}



export default App;
