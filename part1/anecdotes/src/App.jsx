import { useState } from 'react'

const ButtonComp = ({clickFunction, title}) => <button onClick={clickFunction}>{title}</button>

const Votes = ({votes}) => {
  return (
    <p>Votes for above anecdote: {votes}</p>
  )
}

function Application() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const min = 0
  const max = anecdotes.length - 1
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(max + 1).fill(0));
  // let vote = Array.apply(null, {length: max + 1}).map(function() {return 0;})

  const changeAnec = () => {
    let randomNumber
    do {
     randomNumber = Math.round(Math.random() * (max - min) + min);
    } while (randomNumber === selected)
    setSelected(randomNumber)
  }
  let voteSelected = 0
  const changeVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  return (
    <>
    <h1>{anecdotes[selected]}</h1>
    <Votes votes={votes[selected]}/>
    <ButtonComp clickFunction={() => changeVote()} title="Vote" />
    <ButtonComp clickFunction={() => changeAnec()} title="Next Anecdote" />
    </>
  )
}

export default Application
