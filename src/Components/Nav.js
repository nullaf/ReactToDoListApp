import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import "./App.scss";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

function Add() {
  const [clickState, setClick] = useState({
    inputLinkClicked: false,
    inputText: "",
  });

  const isClicked = () => {
    if (clickState.inputText !== "") {
      setClick({
        inputLinkClicked: true,
        inputText: clickState.inputText,
      });
    }
  };
  const isChanged = (event) => {
    setClick({
      inputLinkClicked: false,
      inputText: event.target.value,
    });
  };
  const [styleState, setStyle] = useState({
    textDecorationLine: "",
    textDecorationStyle: "",
    color: "",
  });

  const isStyleClicked = () => {
    if (styleState.textDecorationLine !== "line-through") {
      audio.play();
      setStyle({
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        color: "#A9A9A9",
      });
    } else {
      setStyle({
        textDecorationLine: "",
        textDecorationStyle: "",
        color: "black",
      });
    }
  };
  const keyPress = (event) => {
    if (event.keyCode === 13) {
      isClicked();
    }
  };
  const [deleteStyle, setDeleteStyle] = useState({
    style: "",
  });
  const isDeleted = () => {
    audio2.play();
    setDeleteStyle({
      style: "none",
    });
  };

  let audio = new Audio("/success.mp3");
  let audio2 = new Audio("/remove.wav");

  if (!clickState.inputLinkClicked || clickState.inputText === "") {
    return (
      <div className={"button-field"}>
        <IconButton onClick={isClicked} color="secondary">
          <Icon color="secondary" style={{ fontSize: 40 }}>
            add_circle
          </Icon>
        </IconButton>
        <TextField
          noValidate
          autoComplete="off"
          id="standard-basic"
          className="textfield"
          label="To Do Here"
          color="secondary"
          value={clickState.inputText}
          onChange={isChanged}
          onKeyDown={keyPress}
        />
      </div>
    );
  } else {
    return (
      <div className={"todo"}>
        <Add />
        <Grid
          container
          direction="row"
          className={"Grid"}
          style={{ display: deleteStyle.style }}
        >
          <Checkbox onClick={isStyleClicked} color="secondary">
            {" "}
          </Checkbox>
          <Typography
            variant="h4"
            className={"clickable"}
            style={{
              textDecorationLine: styleState.textDecorationLine,
              textDecorationStyle: styleState.textDecorationStyle,
              color: styleState.color,
            }}
          >
            {" "}
            {clickState.inputText}{" "}
          </Typography>
          <DeleteIcon
            color="secondary"
            onClick={isDeleted}
            className={"deleteicon"}
          />
        </Grid>
      </div>
    );
  }
}

export default Add;
