import React, { useEffect, useRef } from 'react'

const ButtonElement = React.memo(({ changeTarget }) => {

    const elementContainer = useRef(null)

    const blurFunction = () => {
        const input = elementContainer.current.childNodes[1]
        const button = elementContainer.current.childNodes[0]
        if (input.value != "") {
            input.classList.toggle("hidden")
            button.innerText = input.value
        }
        else {
            input.focus()
        }
    }
    const focusFunction = () => {
        const input = elementContainer.current.childNodes[1]
        input.classList.toggle("hidden")
        input.focus()
    }
    const keyupFunction = (e) => {
        const input = elementContainer.current.childNodes[1]
        if (e.key === "Enter") input.blur()
    }
    const mouseupFunction = () => {
        const button = elementContainer.current.childNodes[0]
        changeTarget(() => button)
    }
    const mousedownFunction = () => {
        changeTarget(null)
    }
    return (
        <div ref={elementContainer} className='relative flex items-center justify-center'>
            <button onMouseUp={mouseupFunction} onMouseDown={mousedownFunction} onDoubleClick={focusFunction} className='flex py-2 px-5 rounded-sm items-center justify-center bg-blue-500 text-white'>Button</button>
            <input onKeyUp={keyupFunction} onBlur={blurFunction} type="text" className='h-full w-full hidden px-1 outline-none border-2 border-stone-300 z-10 absolute text-[16px]' />
        </div>
    )
})

export default ButtonElement