import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Index from './pages/index/index';
import Login from './pages/login/login';
import Courses from './pages/courses/courses';
import Register from './pages/signup/register';
import Course from './pages/detailedCourse/detailedCourse';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/registration' element={<Register />} />
          <Route path='/courses/:courseName' element={<Course />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
