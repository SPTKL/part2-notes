import React from 'react'
import Note from './components/Note'
import { summarizers } from 'istanbul-lib-report'

const App = ({ notes }) => { 
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

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
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <ul>
          {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
        </ul>
        <Total parts={course.parts} />
      </div>
    )
  }

  return (
    <div>
      {courses.map(course => Course({course}))}
    </div>
  )
}

export default App 