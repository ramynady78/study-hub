import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function WelcomeCard(){

  const courses = useSelector(state => state.courses);
  const studentsCount = courses.reduce((acc , course) => {
      acc += course.studentsNumber;
      return acc;
  },0)
  return (
      <>
      <div className='welcome-contuiner'>
      <Card className="courses-headr text-center  shadow-lg">
      <Card.Body className='welcom-massage'>
        <Card.Title as="h3" className="mb-1 text-primary ">
          Your Gateway to Knowledge and Success!
        </Card.Title>
        <Card.Text>
          Unlock your potential with expertly crafted courses tailored just for you
        </Card.Text>
    
        <Link className="btn btn-primary  mt-3 start-learing-btn" to={"/courses"}>Start Learning Now</Link>
      </Card.Body>
      <div className='stundents-count'>
        <h2 className='count'>{studentsCount}</h2>
        <h4>Learners</h4>
      </div>
    </Card>
      </div>
      
      </>
  );
};

export default WelcomeCard;
