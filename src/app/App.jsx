import HomePage from "../pages/homepage/homepage.jsx"
import SpacestagramView from "../pages/spacestagram-view/spacestagram-view";
import { useState } from 'react'

import "./App.scss"

const App = () => {
  const [displayHomepage, setDisplayHomepage] = useState(true)

  const openSpacestagram = () => {
    window.setTimeout(() => {
      setDisplayHomepage(false)
    }, 1000)
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        {displayHomepage ? 
        (<HomePage openSpacestagram={openSpacestagram}/>) 
        :
        (<SpacestagramView/>)
        }
      </header>
    </div>
  );
}

export default App;
