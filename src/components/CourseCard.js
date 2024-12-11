import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CourseCard(){
    const courses = useSelector(state => state.courses); 
   
     return(
      <Container className="all-courses-container" >
        <Col className="mt-5">
        <Row  className="justify-content-center" style={{ margin:"0 auto"}}>
            {
                courses.map((course) => (
                    <div className="card m-2 p-1 course-card" key={course.id}>
                    <img src={course.image} className="course-img" alt={course.name}/>
                    <div className="card-body p-2">
                      <Link className="card-title" to={`/course/${course.id}`}>{course.name}</Link>
                      <p className="card-text">{course.info}</p> 
                    </div>
                    <div className="category-info p-2 pb-0">
                        <h6 className="category">{course.category}</h6>
                        <p className="rate">{course.rate}</p>
                    </div>
                    <div className="author-info p-2 pb-0">
                        <p className="students-number">Subscribes : {course.studentsNumber}</p>
                        <h6 className="author">{course.author}</h6>
                    </div>
                    </div>
                ))
            }
        </Row>
        </Col>
      </Container>
           
     )
}

export default CourseCard;