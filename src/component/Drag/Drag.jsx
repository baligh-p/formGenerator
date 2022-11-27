import React, { useRef, useEffect } from 'react'

const Drag = React.memo(({ children }) => {
    const target = useRef(null)
    const getPixelsNumber = (pixels) => {
        return Number(pixels.split("p")[0])
    }
    useEffect(() => {
        target.current.parentNode.style.left = window.innerWidth / 4 + "px"
    }, [])

    const change = (e) => {

        if (target.current.style.marginLeft == "" || (Number(target.current.style.marginLeft.split("p")[0])) >= 0) {
            if (Number(target.current.style.marginLeft.split("p")[0]) >= target.current.parentNode.clientWidth - target.current.clientWidth) {
                target.current.style.marginLeft = target.current.parentNode.clientWidth - target.current.clientWidth - 10 + "px"
                document.removeEventListener("mousemove", change)
            }
            else {
                target.current.style.marginLeft = e.clientX - getPixelsNumber(target.current.parentNode.style.left) - target.current.clientWidth / 2 + "px"
            }
        }
        else {
            target.current.style.marginLeft = 10 + "px"
            document.removeEventListener("mousemove", change)
        }
        if (target.current.style.marginTop == "" || Number(target.current.style.marginTop.split("p")[0]) >= 0) {
            if (Number(target.current.style.marginTop.split("p")[0]) >= target.current.parentNode.clientHeight - target.current.clientHeight) {
                target.current.style.marginTop = target.current.parentNode.clientHeight - target.current.clientHeight - 10 + "px"
                document.removeEventListener("mousemove", change)
            }
            else {
                target.current.style.marginTop = (e.clientY - target.current.clientHeight / 2) + "px"
            }
        }
        else {
            target.current.style.marginTop = 10 + "px"
            document.removeEventListener("mousemove", change)
        }
    }
    const mouseDown = () => {
        document.addEventListener("mousemove", change)
    }
    const mouseUp = () => {
        document.removeEventListener("mousemove", change)
    }
    return (
        <div ref={target} onMouseUp={mouseUp} onMouseDown={mouseDown} className='absolute select-none cursor-move'>
            {children}
        </div>
    )
})

export default Drag