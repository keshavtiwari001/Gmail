import './App.css'
import Inbox from './components/Inbox'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div className='h-screen bg-[#f6f8fc]'>
        <Navbar />
        <div className='flex'>
          <Sidebar />
          <Inbox />
        </div>
      </div>
    </>
  )
}

export default App
