import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./home";
import {Game} from "./game";
import NotFound from "./notFound";


class App extends React.Component{

   render() {
       return(
        <Router>
        <Routes>
             <Route path = '/' element={<Home/>}/>
             <Route path = "/game" element={<Game/>}/>
             <Route path="/404" element={<NotFound/>}/>
            <Route path="*" element={<Navigate replace to="/404" />} />

        </Routes>
        </Router>
       )
   }
}
ReactDOM.render(<App />, document.getElementById("root"));

