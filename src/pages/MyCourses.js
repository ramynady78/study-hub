import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { leavingCoure } from "../redux TK/slices/register-course";

function MyCourses(){

    const mycourses = useSelector(state => state.register);
    const dispatch = useDispatch();

    const handleLeaveCourseBtn = (course) => {
        Swal.fire({
            title:"Are you sure ,you want to leave course ",
            showCancelButton:true,
        }).then((resulte) => {
            if(resulte.isConfirmed){
                dispatch(leavingCoure(course))
            }
        })
    }

    return(
        <>
        
        {
            mycourses.length == 0 
            ? <div className="not-courses">
                <Card.Title className="message">Not courses added yet</Card.Title>
                <Link className="btn btn-primary not-message-btn" to={"/courses"}>Add New Courses</Link>
            </div>
            :   <Container className="my-courses" >
            <Col className="mt-5">
            <Row  className="justify-content-center" style={{ margin:"0 auto"}}>
                {
                    mycourses.length > 0 && mycourses.map((course) => (
                        <div className="card m-2 p-1 my-course-card" key={course.id} style={{ "width": "90%"}}>
                        <div className="image">
                        <Link to={`/course/${course.id}`}>
                         <img src={course.image} className="course-img" alt={course.name}/>
                         </Link>
                        </div>
                        <div className="card-body p-2">
                          <Link className="card-title" to={`/course/${course.id}`}>{course.name}</Link>
                          <p className="card-text">{course.info}</p> 
                          <div className="extra-info">
                            <p className="data-register">{course.dateRegistered}</p>
                            <button 
                            className="btn btn-danger"
                            onClick={() => handleLeaveCourseBtn(course)}
                            >Leave Course</button>
                          </div>
                        </div>
                        </div>
                    ))
                }
            </Row>
            </Col>
          </Container>
        }

        </>
        
    )
}

export default MyCourses;