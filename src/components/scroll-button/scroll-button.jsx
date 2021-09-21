import React, { useState, useEffect } from 'react'
import './scroll-button.scss'
import { Button } from 'react-bootstrap'
import ScrollIcon from '../../assets/arrow-up-icon.svg'


const scrollToTop = () => {
  window.scrollTo({top:0, behaviour:"smooth"})
}

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500) {
              setVisible(true);
            } else {
              setVisible(false);
            }
          });
    }, [])

    return (
        <div className="scroll-button-wrapper">
            <Button aria-label="Scroll to top" className={"scroll-button" + (visible ? " show" : "")} onClick={scrollToTop}>
              <img alt="Up arrow" src={ScrollIcon}/>
            </Button>
        </div>
    )
}

export default ScrollButton;