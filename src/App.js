import { Route, Routes } from "react-router";
import CourseCard from "./components/CourseCard";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CourseInfo from "./pages/CourseInfo";
import Footer from "./components/Footer";
import MyCourses from "./pages/MyCourses";
import AboutUs from "./pages/About";
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="courses" element={<CourseCard/>}/>
      <Route path="course/:id" element={<CourseInfo/>}/>
      <Route path="my-courses" element={<MyCourses/>}/>
      <Route path="about-us" element={<AboutUs/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
