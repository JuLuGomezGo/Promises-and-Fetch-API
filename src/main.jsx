import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
//import App from './App.jsx'
//import Promesa from './functions/Promesa1.jsx'
//import MyPromises from './functions/MyPromises.jsx'
// import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx'
// import MyFetchAPIs from './functions/MyFetchs.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyFunctions/> */}
    {/* <MyPromises/> */}
    {/* <MyFetchAPIs/> */}
    {/* <MyPromisesAll/> */}
    <MyPromisesRace omises />
  </StrictMode>,
)
