import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-green-700 text-4xl text-center my-2'>Hello there I am Ken.</h1>
      <p className="text-green-600 text-2xl mx-3 my-2">This is my portfolio.</p>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out max-w-fit h-60 mx-auto">
        <img src="/vite.svg" alt="Vite icon" className='w-16 h-16 my-0 cursor-pointer' />
        <h3 className="text-green-800 my-1 text-2xl px-2">The above icon is for Vite</h3>
        <p className="text-green-600 my-1">You can click on it to learn about Vite.</p>
      </div>
    </>
  )
}

export default App
