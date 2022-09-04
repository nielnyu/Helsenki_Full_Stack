const Header = (props) => {
  return (
    <div>
      <h1>Course Name: {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part} has {props.exercise} excercise</p>
    </div>
  )
}

const Total = (props) =>{
  return ( 
    <div>
      <p>Number of excercise is {props.sum}</p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack Application Development"
  const part1 = "Fundamentals of React"
  const excercise1 = 10
  const part2 = "Using Props to pass data"
  const excercise2 = 7
  const part3 = "State of a component"
  const excercise3 = 14
  return(
    <div>
      <Header course = {course}/>
      <Content part = {part1} exercise = {excercise1}/>
      <Content part = {part2} exercise = {excercise2}/>
      <Content part = {part3} exercise = {excercise3}/>
      <Total sum = {excercise1 + excercise2 + excercise3} />
    </div>
  )
}
export default App 