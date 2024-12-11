import { FaBook, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BeforRegister from "../components/BeforRegister";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
import Swal from "sweetalert2";
import AfterRegister from "../components/AfterRegister";

function CourseInfo(){
    const courseId = useParams();

    const courses = useSelector(state => state.courses);
    const registeredCourses = useSelector(state => state.register)
    const course = courses.find((course) => course.id == courseId.id);
    const isRegistered  = registeredCourses.find((checkCourse) => checkCourse.id === course.id)
    


    const selectedCourse = isRegistered
    ? registeredCourses.find((checkCourse) => checkCourse.id === course.id)
    : course;


    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handelBtnClick = () =>{
        setTimeout(() => {setShowRegisterForm(true)} ,500)
        
    }
    const handelCancle = () =>{
        Swal.fire({
            title:"Do You Really Want to Cancel Your Registration?",
            showCancelButton: true
        }).then((result) => {
            if(result.isConfirmed){
                setShowRegisterForm(false)
            }
        })        
    }
    const handleRegsiter = () => {setTimeout(() => setShowRegisterForm(false) ,200)}
    return (
        <>

        <div className="course-info-page">
            <div className='course-info-header'>
            <div className="course-info-header-container justify-content-center">
                    <div className="course-info-left-section">
                            <h1 className="course-name">{selectedCourse.name}</h1>
                            <p className="course-description">{selectedCourse.info}</p>
                            {
                                !isRegistered ?
                                <button 
                                className="btn btn-primary btn-lg register-btn"
                                onClick={handelBtnClick}>Register 
                                </button> : <h2 className="data-registered">{selectedCourse.dateRegistered}</h2>
                                
                            }
                            <div className="more-info">
                                <p className="lessons-count"><FaBook /><span>Lessons: {selectedCourse.lessons.length}</span></p>
                                <h6 className="author"><FaUser /> <span>{selectedCourse.author}</span></h6>
                            </div>  
                               
                    </div>
                    <div className="course-info-right-section">
                        <img className="course-image" src={selectedCourse.image} />
                    </div>
            </div>
            </div>
            <div className="container justify-content-center course-info-container">
                {
                    !isRegistered 
                    ? <BeforRegister course={selectedCourse}/>
                     : <AfterRegister course={selectedCourse}/>
                }      
            </div>
            {showRegisterForm && <RegisterForm onCancle={handelCancle} register={handleRegsiter} course={selectedCourse}/>}
        </div>
     
        </>
            
            
    
    )
}
export default CourseInfo;