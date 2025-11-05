import { useState } from "react"

const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}

const Part = (prop) => {
  return (
    <p><b>Part {prop.index}:</b> {prop.part.name}, <b>Exercises:</b> {prop.part.exercises}</p>
  )
}

const Body = (prop) => {
  return (
    <>
    <Part index='1' part={prop.parts[0]}/>
    <Part index='2' part={prop.parts[1]}/>
    <Part index='3' part={prop.parts[2]}/>
    </>
  )
}

const Total = (prop) => <p>Total number of exercises in the course is {prop.exercises[0].exercises + prop.exercises[1].exercises + prop.exercises[2].exercises}</p>


const Hello = ({name, age}) => {
  // const {name, age} = props
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - age
  // }

  const bornYear = () => new Date().getFullYear() - age

  return (
    <>
    <p>Hello {name}, you are {age} years old</p>
    <p>So you're probably born in {bornYear()}</p>
    </>
  )
}

const History = (props) => {
  if(props.allClicks.length == 0) {
    return (
      <div>
        <p>The app can be used by clicking the buttons</p>
      </div>
    )
  }
  return (
    <div>
      <p>Button press history: {props.allClicks.join(", ")}</p>
    </div>
  )
}

const DisplayCount = ({name, count}) =>  <div>{name}: {count}</div>

const ButtonComp = ({clickFunction, buttonText}) => <button onClick={clickFunction}>{buttonText}</button>

const Application = () => {
  
  // const [count, setCount] = useState(0)
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  const [clicks, setClicks] = useState({state: 'left', leftCount: 0, rightCount: 0})
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  

  const name = "Julia"
  const age = "20"
  
  const course = {
    name: "Application Development",
    parts: [
      {
        name: "Fundamentals",
        exercises: 8
      },
      {
        name: "Using props for pass data",
        exercises: 5
      },
      {
        name: "State of a component",
        exercises: 12
      }
    ]
  }

  const setToValue = (newVal) => { 
    setTotal(total + 1)
    setAll(allClicks.concat('SetVal'))
    if(clicks.state == 'left') {
      setClicks({...clicks, leftCount: newVal})
    } else {
      setClicks({...clicks, rightCount: newVal}) 
    }
  }

  const incrementCount = () => {
    setAll(allClicks.concat('Inc'))
    setTotal(total + 1)
    if(clicks.state == 'left') {
      setClicks({...clicks, leftCount: clicks.leftCount + 1})
    } else {
      setClicks({...clicks, rightCount: clicks.rightCount + 1})
    }
  }
  
  const decrementCount = () => {
    // const newClicks = {
    //   left: clicks.left,
    //   right: clicks.right,
    //   count: clicks.count - 1
    // }
    //Object Spread syntax
    setTotal(total + 1)
    
    setAll(allClicks.concat('Dec'))
    if(clicks.state == 'left') {
      if(clicks.leftCount == 0) {
        appendText("error", "Counter cannot go under zero!")
      } else {
        setClicks({...clicks, leftCount: clicks.leftCount - 1})
      }
    } else {
      if(clicks.rightCount == 0) {
        appendText("error", "Counter cannot go under zero!")
      } else {
        setClicks({...clicks, rightCount: clicks.rightCount - 1})
      }
    }
  }

  const resetCount = () => {
    setTotal(total + 1)
    setAll(allClicks.concat('Res'))
    if(clicks.state == 'left') { 
      if(clicks.leftCount == 0) {
        appendText("error", "Left Counter is already zero!")
      } else {
        setClicks({
          ...clicks,
          leftCount: 0
        })
      }
    } else {
      if(clicks.rightCount == 0) {
        appendText("error", "Right Counter is already zero!")
      } else {
        setClicks({
          ...clicks,
          rightCount: 0
        })
      }
    }
  }

  const stateCount = (state) => {
    setTotal(total + 1)
    setAll(allClicks.concat('Lef | Rig'))
    setClicks({
      ...clicks,
      state: state
    })
  }

  const appendText = (id, text) => {
    document.getElementById(id).replaceChildren(text)
      setTimeout(() => {
        document.getElementById(id).replaceChildren("")
      }, 1500);
  }

  return (
    <div>
      <Header course={course.name} />
      <Body parts={course.parts}/>
      <Total exercises={course.parts} />
      <Hello name={name} age={age} />
      <Hello name="Robert" age='27' />
      <div style={{display: 'flex', gap: '10px', margin: '0 0 10px 0'}}>
        <DisplayCount count={clicks.leftCount} name={"Left Count"} />
        <DisplayCount count={clicks.rightCount} name={"Right Count"} />
      </div>
      <ButtonComp clickFunction={incrementCount} buttonText={"Increment Count"} />
      <ButtonComp clickFunction={resetCount} buttonText={"Reset Count"} />
      <ButtonComp clickFunction={decrementCount} buttonText={"Decrement Counter"} />
      <ButtonComp clickFunction={() => stateCount('left')} buttonText={"Set Left"} />
      <ButtonComp clickFunction={() => stateCount('right')} buttonText={"Set Right"} />
      <ButtonComp clickFunction={() => setToValue(25)} buttonText={"Set count to 25"} />
      <button onClick={() => console.log('clicked the button')}>Button</button>
      <p id="error" style={{color: "red"}}></p>
      <History allClicks={allClicks} />
      <p>Total clicks: {total}</p>
    </div>
  )
}

export default Application
