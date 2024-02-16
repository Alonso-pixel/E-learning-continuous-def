import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>Cursos de maestros del TESI</h2>
          <p>Cursos seleccionados de tus profesores favoritos, que te ayudaran a comprender mejor tus materias</p>
          <p>Por cierto pásense por el canal de mi hermano, hace videos de Clash Royale y Pixel Gun, Aqui su link: </p>
          <a href="https://www.youtube.com/@thewinnxd1054/videos">Clickeame!!</a>
        </div>

        <Tabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList