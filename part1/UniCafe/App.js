import {useState} from 'react'
import Button from "./Button.js"
import StatisticLine from './StatisticLine';


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setAll(all +1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all +1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setAll(all +1)
  }


  if (all === 0){
    return (    <div>
      <h1>
        Give Feedback
      </h1>
      <div>
        <Button onClick = {increaseGood} text = "Good"></Button>
        <Button onClick = {increaseNeutral} text = "Neutral"></Button>
        <Button onClick = {increaseBad} text = "Bad"></Button>
      </div>

      <div>
        <h1>Statistics:</h1>
        <p>No Feedback Given</p>
      </div>

    </div>
    )
  }


  return(
    <div>
      <h1>
        Give Feedback
      </h1>
      <div>
        <Button onClick = {increaseGood} text = "Good"></Button>
        <Button onClick = {increaseNeutral} text = "Neutral"></Button>
        <Button onClick = {increaseBad} text = "Bad"></Button>
      </div>

      <table>
        <tbody>
          <StatisticLine text = "Good" value = {good}></StatisticLine>
          <StatisticLine text = "Neutral" value = {neutral}></StatisticLine>
          <StatisticLine text = "Bad" value = {bad}></StatisticLine>
          <StatisticLine text = "All" value = {all}></StatisticLine>
          <StatisticLine text = "Average" value = {(good+bad+neutral)/3}></StatisticLine>
          <StatisticLine text = "Positive" value = {(good)/(good+bad+neutral)}></StatisticLine>
        </tbody>
      </table>
      

    </div>
  )

}

export default App;
