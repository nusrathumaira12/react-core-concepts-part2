
import Counter from './counter';
import Batsman from './batsman';
import Users from './users';
import './App.css'


function App() {
 
  function handleClick(){
alert('I am clicked')
  }

const handleClick3 = () => {
  alert('clicked3')
}
const handleAdd5 = (num) => {
  const newNum = num + 5;
  alert(newNum)
}

 
  return (
    <>
    

      <h3>Vite + React</h3>

<Users></Users>
      <Batsman></Batsman>
      <Counter></Counter>


      {/* <button onclick="handleClick()">Click  me</button> */}
      <button onClick={handleClick}>Click  me</button>
      <button onClick={function handleClick2(){
        alert('clicked2')
      }}>Click  me2</button>
     
     <button onClick={handleClick3}>Click me 3</button>
     <button onClick={() => alert('click 4')}>Click me 4</button>
     
     <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
