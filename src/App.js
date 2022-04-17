import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Resume from './Pages/Resume/Resume';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
