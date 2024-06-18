import logo from './logo.svg';
import './App.css';
import AddStud from './components/AddStud';
import AddFac from './components/AddFac';
import Attendence from './components/Attendence';
import LogStud from './components/LogStud';
import LogFac from './components/LogFac';
import SearchStud from './components/SearchStud';
import ViewAttend from './components/ViewAttend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LogStud/>}/>
    <Route path='/lfac' element={<LogFac/>}/>
    <Route path='/astud' element={<AddStud/>}/>
    <Route path='/afac' element={<AddFac/>}/>
    <Route path='/view' element={<ViewAttend/>}/>
    <Route path='/search' element={<SearchStud/>}/>
    <Route path='/attend' element={<Attendence/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
