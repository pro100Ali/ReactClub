
import './App.css';
import Appbar from './components/Appbar'
import Student from './components/Student'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main'
import { StudentList } from './pages/StudentList';
import  AddClub  from './pages/AddClub';
function App() {
  return  (
    <BrowserRouter>
    <div className="App">
          <Routes>
            <Route path = '/add-club' element = {[<Appbar/>, <AddClub/>]} />
            <Route path = "/student-list" element = {[<Appbar/>, <StudentList/>]} />
            <Route path = "/add-student" element = {[<Appbar/>, <Student/>]} />
            <Route path = '/' element = {[<Appbar />,<Main />]} />
          </Routes>
    </div>
    </BrowserRouter>

    

  );
}

export default App;

