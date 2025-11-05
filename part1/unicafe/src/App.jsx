import { useState } from 'react'


const Header = ({appTitle}) => <h1>{appTitle}</h1>

const ButtonComp = ({clickFunction, buttonText}) => <button onClick={clickFunction}>{buttonText}</button>

const Data = ({data, title}) => <p>{title}: {data}</p>

function Application() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'Unicafe Feedback'

  const setState = (state) => {
    if (state == 'good') {
      setGood(good + 1)
    } else if (state == 'neutral') {
      setNeutral(neutral + 1)
    } else {
      setBad(bad + 1)
    }
  }

  return (
    <>
    <Header appTitle={title} />
    <ButtonComp clickFunction={() => setState('good')} buttonText="Good" />
    <ButtonComp clickFunction={() => setState('neutral')} buttonText="Neutral" />
    <ButtonComp clickFunction={() => setState('bad')} buttonText="Bad" />
    <Header appTitle='Statistics' />
    <Data title='Good' data={good} />
    <Data title='Neutral' data={neutral} />
    <Data title='Bad' data={bad} />
    </>
  )
}

export default Application
