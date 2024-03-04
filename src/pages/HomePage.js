import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      {/* <CategoriesList /> */}
    </div>
  )
}

export default HomePage