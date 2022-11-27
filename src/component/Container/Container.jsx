import React, { useState, useEffect } from 'react'
import Drag from "../Drag/Drag"
import Customize from '../Customize/Customize'
import ButtonElement from "../Elements/ButtonElement"
const Container = () => {
    const [elements, setElements] = useState([])
    const [target, setTarget] = useState(null)
    const div = document.createElement("div")

    const addButton = () => {
        const container = document.createElement("div")
        const button = document.createElement("button")
        const input = document.createElement("input")
        input.type = "text"
        button.classList.add("flex", "items-center", "justify-center")
        button.style.backgroundColor = "#FFFFFF"
        button.style.borderColor = "#FFFFFF"
        button.style.borderStyle = "solid"
        button.style.borderWidth = "1px"
        button.style.color = "#000000"
        button.style.fontSize = "19px"
        button.style.width = "90px"
        button.style.height = "45px"
        button.style.borderRadius = "0px"
        input.classList.add("h-full", "w-full", "border-2", "outline-none", "rounded-sm", "border-neutral-700", "hidden", "bg-white", "z-10", "absolute", "text-center")
        input.onblur = () => {
            if (input.value != "") {
                input.classList.toggle("hidden")
                button.innerText = input.value
            }
            else {
                input.focus()
            }
        }
        input.onkeyup = (e) => {
            if (e.key === "Enter") input.blur()
        }
        button.onmouseup = () => {
            setTarget(() => button)
        }
        button.onmousedown = () => {
            setTarget(null)
        }
        button.innerText = "Click"
        input.value = button.innerText
        container.classList.add("items-center", "justify-center", "flex")
        container.appendChild(button)
        container.appendChild(input)
        container.ondblclick = () => {
            input.classList.toggle("hidden")
            input.focus()
        }
        setElements([...elements, container])
    }
    const addText = () => {
        const container = document.createElement("div")
        const text = document.createElement("p")
        const input = document.createElement("input")
        container.appendChild(text)
        container.appendChild(input)
        const textClass = []
        text.type = "text"
        input.onblur = () => {
            if (input.value != "") {
                input.classList.toggle("hidden")
                text.innerText = input.value
            }
            else {
                input.focus()
            }
        }
        input.onkeyup = (e) => {
            if (e.key === "Enter") input.blur()
        }
        text.onmouseup = () => {
            setTarget(() => text)
        }
        text.onmousedown = () => {
            setTarget(null)
        }
    }
    const addButtonElement = () => {
        //add data of button element 
        setElements([...elements, {}])
    }
    const addTextElement = () => {
        //add data of text element 
    }
    return (
        <div className='flex'>
            <div className='w-9/12 fixed h-screen overflow-x-hidden overflow-y-hidden'>
                <Drag element={div} />{/* escape from error */}

                {elements.map((element, index) => {
                    return (
                        <Drag key={index}  >
                            <ButtonElement changeTarget={setTarget} />
                        </Drag>
                    )
                })}
            </div>
            <div className='w-3/12 h-screen bg-neutral-900'>
                <h1 className='text-3xl mt-3 mb-14 ml-3 text-white font-semibold tracking-wider'>For<span className='text-blue-600 text-4xl'>M</span>aker</h1>
                <ul className='flex flex-col items-center'>
                    <li onClick={addButtonElement} className='w-full text-white text-lg tracking-wider cursor-pointer hover:bg-white hover:text-neutral-900 text-center border-b-[2px] duration-150 delay-75 border-t-[2px] border-white py-2'>
                        Add Button
                    </li>
                    <li onClick={addTextElement} className='w-full text-white text-lg tracking-wider cursor-pointer hover:bg-white hover:text-neutral-900 text-center duration-150 delay-75 border-b-[2px] border-white py-2'>
                        Add Text
                    </li>
                </ul>
            </div>
            <Customize element={target} />{/*probleme here */}
        </div >
    )
}

export default Container