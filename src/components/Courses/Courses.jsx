import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {

    const { id, name, price, banner, instructor } = course;

    return (
        <div className='single-course card shadow-xl border p-5 text-left'>
            <img className='rounded mb-10' src={banner} alt="" />
            <h3 className='font-bold text-2xl'>{name}</h3>
            <h4 className='text-green-700 font-extrabold text-2xl mt-5'>${price}</h4>
            <h5 className='mt-10 text-rose-500 font-bold'>Instructor: {instructor}</h5>
            <div className="button-all flex justify-center gap-5 mt-10">
                <Link to={`/home/${id}`}><button className='btn btn-danger'>Course Details</button></Link>
                <button className='btn btn-warning'>Enroll</button>
            </div>
        </div>
    );
};

export default Courses;