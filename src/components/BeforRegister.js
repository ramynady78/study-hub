import { FaBook } from "react-icons/fa";

function BeforRegister(props) {
    const course =props.course;
    return (
        <>
         <div className="lessons-list justify-content-center">
                <div className="lesson-list-title">
                    
                    <h2 className="titlle"> <FaBook /> Lessons</h2>
                </div>
            <ul>
                {course.lessons.map(lesson => (
                     <li key={lesson}>{lesson}</li>
                ))}
            </ul>

            </div>
            <div className="students-number">
                <div className="subscriber-number">
                    <p className="number">{course.studentsNumber}</p>
                    <p className="subscriber">Subscriber</p>
                </div>

            </div>
            </>
    )
}
export default BeforRegister;