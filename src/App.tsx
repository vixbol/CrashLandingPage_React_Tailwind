import './App.css'

import AuthButtons from './components/AuthButtons/AuthButtons'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Trending from './components/Trending/Trending'

function App() {

  return (
    <div className='grid grid-cols-5'>
      <Nav ></Nav>
      <main className='px-12 py-6 col-span-4 bg-cyan-100'>
        <AuthButtons/>
        <Header/>
        <Trending/>
      </main>
    </div>
  )
}

export default App
