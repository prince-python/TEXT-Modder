import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Text } from './components/Text.jsx';

let App=()=>{
  return(
    <>
     <Navbar />
     <div className='container mt-5 rows-10'>
     <Text title='TEXT ANYLYZER' />
     </div>
     </>
  )
};

export default App;




