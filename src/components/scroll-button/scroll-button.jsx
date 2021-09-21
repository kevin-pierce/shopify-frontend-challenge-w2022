import React, { useState, useEffect } from 'react'
import './scroll-button.scss'
import { Button } from 'react-bootstrap'

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

    const scrollToTop = () => {
        window.scrollTo({top:0, behaviour:"smooth"})
    }

    return (
        <div className="scroll-button-wrapper">
            <Button aria-label="Scroll to top"className={"scroll-button" + (visible ? " show" : "")} onClick={scrollToTop}>^</Button>
        </div>
    )
}

export default ScrollButton;