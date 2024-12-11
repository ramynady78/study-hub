import WelcomeCard from "../components/WelcomeCard ";
import CourseCard from "../components/CourseCard";

function Home() {

    return(
        <>
        <WelcomeCard/>
        <div className="courses-in-home">
        <CourseCard/>
        </div>
        </>
    )
}
export default Home