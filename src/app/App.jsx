import HomePage from "../pages/homepage/homepage.jsx"
import SpacestagramView from "../pages/spacestagram-view/spacestagram-view";
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import "./App.scss"

const App = () => {
  const [displayHomepage, setDisplayHomepage] = useState(true)

  useEffect(() => {
    const isHomepageVisited = window.localStorage.getItem('homepageVisited')

    if (isHomepageVisited != null) {
      setDisplayHomepage(false)
    }
  }, [])

  const openSpacestagram = () => {
    window.localStorage.setItem('homepageVisited', true)

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
