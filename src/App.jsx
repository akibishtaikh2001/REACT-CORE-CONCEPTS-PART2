import Counter from './counter'
import Batsman from './Batsman'
import Bolwer from './Bowler'
import Users from './users'
import Friends from './Friends'
import Posts from './Post'
import './App.css'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


// const fetchFriends = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handelClick() {
    alert('I am clicked.')
  }

  const handelClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <h3>Vite + React</h3>
{/* 
      <Suspense fallback={<h4>Post are coming......</h4>}>
      <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Bolwer></Bolwer>
      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onClick="handelClick()">Click me</button> */}
      <button onClick={handelClick}>Click me</button>
      <button onClick={function handelClick2() {
        alert('Clicked 2')
      }}>Click me2</button>
      <button onClick={handelClick3}>Clicked me 3</button>

      <button onClick={() => alert('click 4')}>Clicked me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
