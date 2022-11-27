import React, { useRef, useEffect } from 'react'

const Customize = React.memo(({ element }) => {
    const container = useRef(null)
    const textColor = useRef(null)
    const bgColor = useRef(null)
    const height = useRef(null)
    const width = useRef(null)
    const borderColor = useRef(null)
    const borderSize = useRef(null)
    const textSize = useRef(null)
    const borderRadius = useRef(null)
    const getPixelsNumber = (pixels) => {
        return Number(pixels.split("p")[0])
    }
    useEffect(() => {
        if (!element) {
            container.current.classList.replace("flex", "hidden")
        }
        else {
            console.log(element.style.color)
            container.current.classList.replace("hidden", "flex")
            height.current.value = getPixelsNumber(element.style.height)
            width.current.value = getPixelsNumber(element.style.width)
            borderRadius.current.value = getPixelsNumber(element.style.borderRadius)
            textSize.current.value = getPixelsNumber(element.style.fontSize)
            borderSize.current.value = getPixelsNumber(element.style.borderWidth)
        }
    }, [element])



    const changeColor = (e) => {
        element.style.color = e.target.value
    }
    const changeRadius = (e) => {
        element.style.borderRadius = e.target.value + "px"
    }
    const changeWidth = (e) => {
        element.style.width = e.target.value + "px"
    }
    const changeHeight = (e) => {
        element.style.height = e.target.value + "px"
    }
    const changeBGC = (e) => {
        element.style.backgroundColor = e.target.value
    }
    const changeTextSize = (e) => {
        element.style.fontSize = e.target.value + "px"
    }
    const changeBorderColor = (e) => {
        element.style.borderColor = e.target.value
    }
    const changeBorderSize = (e) => {
        element.style.borderWidth = e.target.value + "px"
    }
    return (
        <div ref={container} className='fixed hidden z-50 top-7 right-10 py-12 min-h-[55vh]
         min-w-[25%] shadow-lg shadow-neutral-300 px-7 bg-white rounded-md space-y-5 items-center flex-col'>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-lg'>Height</label>
                <input ref={height} className='ml-auto border-neutral-500 border-2 rounded-sm px-1 py-2 h-10 w-20' type='number' onInput={changeHeight} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-lg'>Width</label>
                <input ref={width} className='ml-auto border-neutral-500 border-2 rounded-sm px-1 py-2 h-10 w-20' type='number' onInput={changeWidth} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-lg'>Radius</label>
                <input ref={borderRadius} className='ml-auto' type="range" defaultValue="0" min="0" max="40" onInput={changeRadius} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-md whitespace-nowrap text-md'>Background Color</label>
                <input ref={bgColor} className='ml-auto' type='color' onInput={changeBGC} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-md whitespace-nowrap text-md'>Border Color</label>
                <input ref={borderColor} className='ml-auto' type='color' onInput={changeBorderColor} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-lg'>Text Color</label>
                <input ref={textColor} className='ml-auto' type='color' onInput={changeColor} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-lg'>Border Size</label>
                <input ref={borderSize} className='ml-auto border-neutral-500 border-2 rounded-sm px-1 py-2 h-10 w-20' type='number' onInput={changeBorderSize} />
            </div>
            <div className='flex items-center w-8/12 space-x-3'>
                <label className='mr-auto text-lg'>Text Size</label>
                <input ref={textSize} className='ml-auto border-neutral-500 border-2 rounded-sm px-1 py-2 h-10 w-20' type='number' onInput={changeTextSize} />
            </div>
        </div>
    )
})

export default Customize