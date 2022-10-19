import './App.css';
import Frontpage from './pages/Frontpage';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <div>
     <Frontpage />
    
    </div>
    </BrowserRouter>
    </>
    
   
  );
}

export default App;
