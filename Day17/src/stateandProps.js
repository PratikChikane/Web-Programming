import { Component } from "react";

const Fruit = (props) =>{
    return (
        <div className="fruit">
            <h1>List of Fruits</h1>
            <p>Name:{props.fruits.name}</p>
            <p>color:{props.fruits.color}</p>
            

        </div>
    )
}
export default Fruit;