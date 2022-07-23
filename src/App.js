import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navi from './components/Navi'
import Faq from './components/Faq'
import About from './components/About'
import Fetch from './components/Fetch'



class App extends React.Component{






render(){
  return(
     <BrowserRouter>
    <Navi/>
        <Routes>
      <Route path='/' element={<Fetch/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faq' element={<Faq/>}/>
    </Routes>
  </BrowserRouter>
    )

  }
}

export default App;