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

    playAudio() {
        const audio = document.getElementById(this.props.audioId);
        audio.play();
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
            <div className="drum-pad" onClick={this.playAudio}>
                <audio className="clip" id={this.props.audioId} src={this.props.src}></audio>
              {this.props.keyTrigger}
            </div>
        )
    }
}

export default DrumPad;