import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import StatisticLine from './StatisticLine'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = "give feedback"
  const stats = "statistics"

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleBad = () =>{
    setBad(bad + 1)
  }

  const  handleNeutral = () =>{
    setNeutral(neutral + 1)
  }

  const all = good + bad + neutral
  const average = (all/3)
  const positive = (good/all)


  if (all === 0){
    return(
      <div>
        <Header title = {title}/>
        <Button handleClick = {handleGood} text = {"good"}/>
        <Button handleClick = {handleNeutral} text = {"neutral"}/>
        <Button handleClick = {handleBad} text = {"bad"}/>
        <Header title = {stats}/>
        <p>No feedback avaliable</p>
      </div>
    )
  }

  return (
    <div>
      <Header title = {title}/>
      <Button handleClick = {handleGood} text = {"good"}/>
      <Button handleClick = {handleNeutral} text = {"neutral"}/>
      <Button handleClick = {handleBad} text = {"bad"}/>
      <Header title = {stats}/>
      <StatisticLine text = {"good"} number = {good}/>
      <StatisticLine text = {"neutral"} number = {neutral}/>
      <StatisticLine text = {"bad"} number = {bad}/>
      <StatisticLine text = {"all"} number = {all}/>
      <StatisticLine text = {"average"} number = {average}/>
      <StatisticLine text = {"positve"} number = {positive + " %"}/>

      
    </div>

  )
}

export default App
