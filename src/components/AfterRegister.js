import { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateFinishedLessons } from "../redux TK/slices/register-course";

function AfterRegister(props) {
    const course =props.course;
    const [finshedLessons , setFinshedLessons]  = useState(course.finishedLessons);

    const dispatch = useDispatch()
    const courseId = course.id;
    const handleCheck = (event) => {
        const lessonName = event.target.name;
        if (!finshedLessons.includes(lessonName)){
            setFinshedLessons([ lessonName , ...finshedLessons ])
        }else{
            setFinshedLessons(finshedLessons.filter(less => less !== lessonName));
        }
        dispatch(updateFinishedLessons({ courseId, lessonName }));  
    }
     const percentage = (finshedLessons.length / course.lessons.length) * 100 ;
    return (
        <>
         <div className="check-list">
                <div className="check-list-title">
                    <h2 className="titlle"> <FaBook /> Lessons</h2>
                </div>
            
                <div className="check-list-items">
                {course.lessons.map(lesson => (
                     <ListGroup.Item key={lesson}>
                         <Form.Check
                        type="checkbox"
                        label={lesson}
                        name={lesson}
                        className="check-box"
                        onChange={handleCheck}
                        checked = 
                        {finshedLessons.includes(lesson) ? true : false}
                        />
                     </ListGroup.Item>
                ))}
                </div>

            </div>
            <div className="completion-rate">
                <div className="rate-div" style={{ "--percentage": percentage,}}>
                    <div className="rate-persent">{percentage} %</div></div>
            </div>
            </>
    )
}
export default AfterRegister;