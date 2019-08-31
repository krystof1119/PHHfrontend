import * as React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#react-container');

export default function HelpModal(props) {
    return (
        <ReactModal
            isOpen={props.visible}
            contentLabel={'HELP'}
            onRequestClose={() => props.onClose()}
            shouldCloseOnOverlayClick={true}
        >
            <div style={{height: '100%'}}>
                <div style={{overflow: 'auto', height: '90%', color: 'black'}}>
                    <h2>Introduction</h2>
                    <p>Hello, and welcome to the worst website you've ever seen! Please, don't
                        learn from my code. It is bad for the purpose of being bad.</p>
                    <p>We at ReallyBadWebsites inc. specialise in using as many frameworks as
                        possible. For this reason, we use React in Angular in Vue in React, with some
                        Bootstrap sprinkled on top of it. This ensures that, no matter how big hard drive
                        manufacturers make their drives, the node_modules folder will never fit on a
                        single HDD.</p>
                    <h2>How to use</h2>
                    <p>On the main page, you have some text that is considered the "Current input". You cannot
                        edit it directly, only with the button. You can also submit the input for processing
                        or reset it, if you've made a mistake.</p>
                    <p>On the main page, you can also see a button that slowly changes its color, from 0x000000
                        to 0xFFFFFF. If you click it, it will reset and add a character to the input text.
                        Which character is added depends on the color that the button is. We simply take the
                        HEX representation of the color, make it an integer, and translate that to a Unicode
                        character. Yes, that does mean that you can enter emojis.</p>
                    <div className={'container'} style={{backgroundColor: 'lightblue', borderRadius: 15}}>
                        <h3>Side note</h3>
                        <p>As I am not as cruel as I seem, you can also enter showcase mode and add characters
                            that way. But that is just so that <i>you</i> don't have to wait hours to enter a string.
                            A normal person wouldn't be able to do this.
                        </p>
                    </div>
                    <p>Once you have entered a string, you can press the submit button to submit it for processing.
                    Our cutting edge <s>Machine learning and AI</s> algorithms will determine what you want to do.
                    Your response will be in a textbox lower in the page.</p>
                    <h2>A list of commands</h2>
                    <ul>
                        <li><b>adventure</b> - open a text adventure to play, right here. use quit to disable. Please do test this, it is awesome.</li>
                        <li><b>hello</b> - the first program everyone writes.</li>
                        <li><b>test</b> - it sees you are testing</li>
                        <li><b>multiline</b> - to prove that you can do multiline responses</li>
                    </ul>
                </div>
                <button className={'btn btn-secondary btn-lg btn-block'} onClick={() => props.onClose()}>CLOSE HELP
                </button>
            </div>
        </ReactModal>
    )
}
