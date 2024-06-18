import React, { Component } from 'react'
import Childcomp from './childcomp'

// parenta and child intraction
class Parancomp extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            name:"basil ahamed",
            salary:234567
             
        }

        changethename = ()=>{
            this.setState((prevState)=>({
                salary:prevState.salary=1000, name:"basil"
            }))
        }


    }

    }
    
    render() 
    {
        return<div>

                <h2>This is parent component </h2>
                <p>employee name is = {this.state.name}</p>
                <p>employee salary was = {this.state.salary}</p>
                <button onClick={()=> changethename()}></button>

                <hr/>
                <Childcomp name={this.state.name} salary={this.state.salary}/>
            </div>
        
    }




export default Parancomp
