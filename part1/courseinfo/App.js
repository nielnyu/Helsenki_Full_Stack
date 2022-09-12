import { partial } from "lodash"

const Header = (props) => {
  return (
    <div>
      <h1>Course Name: {props.name}</h1>
    </div>
  )
}

const Parts = ({name,excercise}) => {
  return (
    <div>
      <p>{name} has {excercise} excercises</p>
    </div>
    
    
  )
}


const Content = ({parts}) => {
  const [part1,part2,part3] = parts;
  return (
    <div>
      <Parts name = {part1.part_name} excercise={part1.excercise} />
      <Parts name = {part2.part_name} excercise={part2.excercise} />
      <Parts name = {part3.part_name} excercise={part3.excercise} />
    </div>
  )
}

const Total = ({parts}) => {
  const [part1, part2, part3] = parts
  return (
    <div>
      <p>The total number of excercise is {part1.excercise + part2.excercise + part3.excercise} </p>
    </div>
  )
}



const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts : [
      {
        part_name: "Fundamentals of React", 
        excercise: 10
      }, 
      {
        part_name: "Using Props to Pass Data", 
        excercise: 7
      }, 
      {
        part_name: "State of a Component", 
        excercise: 14
      }
    ] 
  }

  return (
    <div> 
      <Header name = {course.name} /> 
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}





export default App 
