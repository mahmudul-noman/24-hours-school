import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const dCourse = useLoaderData();
    return (
        <div>
            <h2>Course Details</h2>
        </div>
    );
};

export default CourseDetails;