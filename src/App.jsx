import './App.css'
import Header from './components/Header'
import Naive from './components/Naive'
import Sanitized from './components/Sanitized'
import Xss from './components/Xss'
function App() {
  return (
    <>
      <Header title={'My React App'}/>
      <main>
        <Naive />
        {/* <Xss /> */}
        {/* <Sanitized /> */}
      </main>
    </>
  )
}

export default App
