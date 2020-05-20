import React, {Component} from 'react';
import './DrumPad.scss';

class DrumPad extends Component {
    constructor(props) {
        super(props);

        this.playAudio = this.playAudio.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    getRandomColor() {
        const red = Math.random() * 255;
        const green = Math.random() * 255;
        const blue = Math.random() * 255;
        return {red, green, blue};
    }

    playAudio() {
        const audio = document.getElementById(this.props.keyTrigger);
        audio.currentTime = 0;
        audio.parentNode.classList.add("active");
        audio.play();
        this.props.updateDisplay(this.props.keyTrigger);

        const drumMachine = document.getElementById("drum-machine");
        const {red, green, blue} = this.getRandomColor();
        drumMachine.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        
        setTimeout(() => {
            audio.parentNode.classList.remove("active");
        }, 400);
    }

    handleKeyPress(event) {
        if(event.keyCode === this.props.keyCode){
            this.playAudio();
        }
    }

    componentWillUnmount() {
        document.addRemoveListener('keydown', this.handleKeyPress);
    }

    render() {
        return (
            <div className="drum-pad" onClick={this.playAudio} id={this.props.audioId}>
                <audio className="clip" id={this.props.keyTrigger} src={this.props.src}></audio>
              {this.props.keyTrigger}
            </div>
        )
    }
}

export default DrumPad;