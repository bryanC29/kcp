import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Index from './pages/index/index';
import Login from './pages/login/login';
import Courses from './pages/courses/courses';
import Register from './pages/signup/register';
import Course from './pages/detailedCourse/detailedCourse';
import StudentDashboard from './pages/studentDashboard/studentDashboard';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== '/registration' && location.pathname !== '/login';

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/courses/:courseName' element={<Course />} />
        <Route path='/dashboard' element={<StudentDashboard />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
