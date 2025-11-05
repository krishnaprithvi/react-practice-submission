import { useState } from 'react'

const Header = ({appTitle}) => <h1>{appTitle}</h1>

const ButtonComp = ({clickFunction, buttonText}) => <button onClick={clickFunction}>{buttonText}</button>

const StatisticLine = ({data, title}) => {
  return (
      <tr><td style={{fontWeight: '600'}}>{title}</td><td>{data}</td></tr>
  )
}

const Statistics = ({title, dataTitle, data}) => {
  const dataElements = []
  // for (let i=0;i<dataTitle.length;i++) {
  //   dataElements.push(<Data key={i} title={dataTitle[i]} data={data[i]} />);
  // }
  dataTitle.forEach((title, i) => {
    dataElements.push(<StatisticLine key={i} title={title} data={data[i]} />);
  })

  if(data[3] == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <>
      <h2>{title}</h2>
      <table>
        <tbody>
          {dataElements}
        </tbody>
      </table>
    </>
  )
}

function Application() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const title = 'Unicafe Feedback'
  const average = parseFloat(total/3).toFixed(2)
  const positive = (good/total) * 100? parseFloat((good/total) * 100).toFixed(2) + " %": 0

  const app = {
    appTitle: "Unicafe Feedback",
    stats: "Statistics",
    title: ["Good", "Neutral", "Bad", "Total Feedback", 'Average', 'Positive %' ],
    data: [good, neutral, bad, total, average, positive]
  }

  const setState = (state) => {
    if (state == 'good') {
      setGood(good + 1)
      setTotal(total + 1)
    } else if (state == 'neutral') {
      setNeutral(neutral + 1)
      setTotal(total + 1)
    } else {
      setBad(bad + 1)
      setTotal(total + 1)
    }
  }

  return (
    <>
    <Header appTitle={app.appTitle} />
    <ButtonComp clickFunction={() => setState('good')} buttonText="Good" />
    <ButtonComp clickFunction={() => setState('neutral')} buttonText="Neutral" />
    <ButtonComp clickFunction={() => setState('bad')} buttonText="Bad" />
    <Statistics title={app.stats} dataTitle={app.title} data={app.data}/>
    </>
  )
}

export default Application
