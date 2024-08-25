import { useEffect, useState } from "react";
import CourseSummaryCard from "../courseSummaryCard/courseSummaryCard";

const CourseSection = ({courseKey, courseTitle}) => {

    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        import(`../../courses/summary/${courseKey}.json`).then((data) => {
            setCourseData(data.default);
        }).catch((error) => {
            console.error("Error loading course data:", error);
        });
    }, [courseKey]);

    if (!courseData) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <p className="mx-auto w-[90%] text-center text-3xl font-semibold text-slate-500 border-b-2 border-slate-500 p-4">
            {courseTitle}
        </p>
        <CourseSummaryCard data={courseData} />
        </>
    )
}

export default CourseSection;