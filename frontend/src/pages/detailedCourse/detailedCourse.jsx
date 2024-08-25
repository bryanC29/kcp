import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const importCourseData = async (courseName) => {
    try {
        const courseData = await import(`../../courses/detailed/${courseName}.json`);
        return courseData.default;
    } catch (error) {
        console.error("Error loading course data:", error);
        return null;
    }
};

const Course = () => {
    const { courseName } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            const data = await importCourseData(courseName);
            setCourse(data);
        };

        fetchCourseData();
    }, [courseName]);

    if (!course) return <div>Error in Loading document</div>;

    return (
        <div>
            <h1>{course.heading}</h1>
            <p><strong>Description:</strong> {course.body}</p>
            <p><strong>Software Included:</strong> {course.software}</p>
            <p><strong>Previous Price:</strong> {course.prevRate}</p>
            <p><strong>Price:</strong> {course.rate}</p>
            <p><strong>Teacher:</strong> {course.instruuctor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
        </div>
    );
};

export default Course;