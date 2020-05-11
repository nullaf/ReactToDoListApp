import React from 'react';
import './App.scss';
import Add from './Components/Add'
import {Helmet} from 'react-helmet';


const App = () => {

        return (
            <div className="App">
             <Helmet> <style>{'body { background-color: #EFEFEF; }'}</style> </Helmet>
                <Add/>


            </div>
        );
    }

export default App;
