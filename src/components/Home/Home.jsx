import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
// ====================================================================== //

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <div className="home-container mt-16 flex justify-between">
                <div className="our-courses">
                    <h2 className='font-bold text-rose-700 text-3xl text-start'>Our Popular Courses</h2>
                    <div className="course-container grid grid-cols-1 md:grid-cols-3 gap-5 ">
                        {
                            courses.map(course => <Courses
                                key={course.id}
                                course={course}
                            ></Courses>)
                        }
                    </div>
                </div>
                <div className="enrolled-container">
                    <h2>Enrolled Course</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;