import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';

function Add() {

    const [clickState, setClick] = useState({
        inputLinkClicked: false,
        inputText: ""
    });

    const isClicked = () => {
        setClick({
            inputLinkClicked: true,
            inputText: clickState.inputText
        });
    }
    const isChanged = (event) => {
        setClick({
            inputLinkClicked: false,
            inputText: event.target.value
        });
    }
    const [styleState, setStyle] = useState({
        textDecorationLine: "",
        textDecorationStyle: ""
    });
    const isStyleClicked = () => {
        setStyle({
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid'
        });
    }

if(!clickState.inputLinkClicked) {
    return (
        <div>

            <IconButton onClick={isClicked}>
                <Icon color="primary" style={{fontSize: 40}}>add_circle</Icon>
            </IconButton>
            <TextField id="standard-basic" label="Text Here" value={clickState.inputText} onChange={isChanged}/>

        </div>
    );
}
else {
    return(
        <h1 onClick={isStyleClicked} style={{textDecorationLine: styleState.textDecorationLine,
            textDecorationStyle: styleState.textDecorationStyle}}> {clickState.inputText}</h1>
    );
}
}

export default Add;