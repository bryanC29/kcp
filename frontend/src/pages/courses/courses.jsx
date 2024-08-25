import CourseSection from "../../components/courseSection/courseSection";
import courses from '../../courses/summary/courses.json';

const Courses = () => {

    return (
        <>
        <div className="my-8 pb-8">
            {Object.keys(courses).map((courseKey) => (
                <CourseSection key={courseKey} courseKey={courseKey} courseTitle={courses[courseKey]} />
            ))}
        </div>
        </>
    )
}

export default Courses;