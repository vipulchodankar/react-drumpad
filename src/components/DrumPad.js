import React, { useEffect, useCallback } from 'react'
import './DrumPad.scss'

const DrumPad = ({ audioId, keyCode, keyTrigger, src, updateDisplay }) => {

    const getRandomColor = () => {
        const red = Math.random() * 255
        const green = Math.random() * 255
        const blue = Math.random() * 255
        return { red, green, blue }
    }

    const playAudio = useCallback(() => {
        const audio = document.getElementById(keyTrigger)
        audio.currentTime = 0
        audio.parentNode.classList.add("active")
        audio.play()
        updateDisplay(keyTrigger)

        const drumMachine = document.getElementById("drum-machine")
        const { red, green, blue } = getRandomColor()
        drumMachine.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'

        setTimeout(() => {
            audio.parentNode.classList.remove("active")
        }, 400)
    }, [keyTrigger, updateDisplay])

    const handleKeyPress = useCallback(event => {
        if (event.repeat)
            return

        if (event.keyCode === keyCode)
            playAudio()
    }, [playAudio, keyCode])

    

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => document.addRemoveListener('keydown', handleKeyPress)
    }, [handleKeyPress])

    return (
        <div className="drum-pad" onClick={playAudio} id={audioId}>
            <audio className="clip" id={keyTrigger} src={src}>
            </audio>
            {keyTrigger}
        </div>
    )
}

export default DrumPad 