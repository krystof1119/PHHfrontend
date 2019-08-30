import * as React from 'react';
import {useState} from "react";
import HelpModal from "./helpModal";

export default function Help() {
    let [modalVisible, setModalVisible] = useState(false);
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: 1}}/>
            <button className={'btn btn-primary text-right'} onClick={() => setModalVisible(true)}>Open help</button>
            <HelpModal visible={modalVisible} onClose={() => setModalVisible(false)}/>
        </div>
    )
}
