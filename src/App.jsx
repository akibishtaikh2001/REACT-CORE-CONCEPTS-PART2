
import './App.css'

function App() {
  
  function handelClick() {
    alert('I am clicked.')
  }
  
  const  handelClick3 = () => {
    alert('clicked 3')
  } 

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      
      <h3>Vite + React</h3>
      {/* <button onClick="handelClick()">Click me</button> */}
      <button onClick={handelClick}>Click me</button>
      <button onClick={function handelClick2(){
        alert('Clicked 2')
      }}>Click me2</button>
      <button onClick={handelClick3}>Clicked me 3</button>

      <button onClick={() => alert('click 4')}>Clicked me 4</button>
      
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
