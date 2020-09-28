import React, { Component } from "react";
import Garden from "./garden";
import Tools from "./tools"
import "./garden-game.css";

class GardenGame extends Component{
    render(){
        return(
            <div className="garden-game-container">
                <Garden/>
                <Tools/>
            </div>
        )
    }
}
export default GardenGame