import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';
import './Add.scss';
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';

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
        if(styleState.textDecorationLine !== 'line-through') {
            setStyle({
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid'
            });

        }
        else {
            setStyle({
                textDecorationLine: '',
                textDecorationStyle: ''
            });

        }

    }
    const keyPress = (event) => {
        if(event.keyCode === 13) {
            isClicked()
        }
    }
    const isDeleted = () => {
        setClick({
            inputLinkClicked: false,
            inputText: ""
        });
    }

if(!clickState.inputLinkClicked) {
    return (
        <div>

            <IconButton onClick={isClicked}>
                <Icon color="primary" style={{fontSize: 40}}>add_circle</Icon>
            </IconButton>
            <TextField id="standard-basic" label="Text Here" value={clickState.inputText} onChange={isChanged} onKeyDown={keyPress}/>

        </div>
    );
}
else {
    return(
        <div>
            <Add/>
            <Grid container direction="row">
            <h1 onClick={isStyleClicked} className={"clickable"} style={{textDecorationLine: styleState.textDecorationLine,
            textDecorationStyle: styleState.textDecorationStyle}}> {clickState.inputText}</h1> <DeleteIcon onClick={isDeleted} className={"deleteicon"}/>
            </Grid>
        </div>
    );
}
}

export default Add;