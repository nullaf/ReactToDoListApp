import React from 'react';
import './App.scss';
import Add from './Components/Add'
import {Helmet} from 'react-helmet';
import Typography from "@material-ui/core/Typography";


const App = () => {

        return (
            <div className="App">
             <Helmet> <style>{'body { background-color: #EFEFEF; }'}</style> </Helmet>

                <Typography variant={"h2"} color={"secondary"}>To Do List App</Typography><Add/>


            </div>
        );
    }

export default App;
