import React, { Component } from "react";
import './tools.css'
/**
 * - Can only select one at a time wattering can or seeds
 * - Plant different types of seeds. if plant seeds is 
 * selected have another selection of types reveal itself
 * - wattering can - wet ground, if seeded grow it then fade 
 * wet, if not seeded just wet and fade. 
 * - harvest gets rid of plants, if fully grown gets added to plant counter
 * - seeds available:
 *      - carrot
 *      - watermellon
 *      - pumpkin
 */
class Tools extends Component{
    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
      }
    
      onChangeValue(event) {
        console.log(event.target.value);
      }
    render(){
        return(
            <div className="garden-tools" onChange={this.onChangeValue}>
                <input className="watering-can" type="radio" id="watering-can" name="tool" value="watering-can"/>
                <label  for="watering-can"><img src={require("../img/can.png")}></img></label><br/>
                <input className="plant-seeds" type="radio" id="plant-seeds" name="tool" value="plant-seeds"/>
                <label for="plant-seeds"><img src={require("../img/seeds.png")}></img></label><br/>
                <input className="harvest" type="radio" id="harvest" name="tool" value="harvest"/>
                <label for="harvest">Harvest</label><br/>
            </div>
        )
    }
}
export default Tools