import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      {/* <button onClick={() => { toast.success('This is test toaster') }} className='p-5 text-lg bg-slate-100 text-black absolute z-[500] left-48 top-48'>Test Toaster</button> */}
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        toastOptions={
          {
            duration: 5000,
            style: {
              background: "rgba(0, 0, 0, 0.5)",
              color: "#ffff",
              fontSize: "24px",
              padding: "20px 20px",
              border: "3px solid yellow",
              backdropFilter: "blur(15px)",
            }
          }
        }
      />
    </>
  )
}

export default App
