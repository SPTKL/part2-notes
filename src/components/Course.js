import React from 'react'

const Course = ({course}) => {
    const Header = ({name}) =>{
      return (
          <div>
              <h1> {name} </h1>
          </div>
      )
    }
  
    const Total = ({parts}) => {
      let total_count = parts.reduce((prev, cur) => {
        return prev + cur.exercises;
      }, 0);
      return (
        <p>
          total of {total_count} exercises
        </p>
      )
    }
    return (
      <div key={course.name}>
        <Header name={course.name} />
        <ul>
          {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
        </ul>
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course