import React, {useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';
import './Add.scss';
import Grid from "@material-ui/core/Grid";
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from "@material-ui/core/Typography";



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
        textDecorationStyle: "",
        color: ""
    });

    const isStyleClicked = () => {
        if(styleState.textDecorationLine !== 'line-through') {
            setStyle({
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                color: 'green'
            });

        }
        else {
            setStyle({
                textDecorationLine: '',
                textDecorationStyle: '',
                color: 'black'
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


    if(!clickState.inputLinkClicked || clickState.inputText === "") {
        return (
            <div className={"button-field"}>

                <IconButton onClick={isClicked} >
                    <Icon color="primary" style={{fontSize: 40}}>add_circle</Icon>
                </IconButton>
                <TextField id="standard-basic" label="Text Here" value={clickState.inputText} onChange={isChanged} onKeyDown={keyPress} />

            </div>
        );
    }
    else {
        return(
            <div className={"todo"}>
                <Add/>
                <Grid container direction="row" className={"Grid"}>
                    <Typography variant="h4" onClick={isStyleClicked} className={"clickable"}  style={{textDecorationLine: styleState.textDecorationLine,
                        textDecorationStyle: styleState.textDecorationStyle,color:styleState.color}}> {clickState.inputText}</Typography><DeleteIcon onClick={isDeleted} className={"deleteicon"}/>
                </Grid>
            </div>
        );
    }
}

export default Add;