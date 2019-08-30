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
                <div style={{overflow: 'auto', height: '90%'}}>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                    <p style={{color: 'black'}}>Lorem ipsum dolor sit amet.</p>
                </div>
                <button className={'btn btn-secondary btn-lg btn-block'} onClick={() => props.onClose()}>CLOSE HELP
                </button>
            </div>
        </ReactModal>
    )
}
