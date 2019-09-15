import React from 'react'
import Note from './components/Note'

const App = ({ notes }) => { 
  const course = {
    name: 'Half Stack application development',
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
      }
    ]
  }
  const Header = ({name}) =>{
    return (
        <div>
            <h1> {name} </h1>
        </div>
    )
  }
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <ul>
          {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App 