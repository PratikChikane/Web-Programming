// import { Component } from "react";

// export default class Factorial extends Component{

//     constructor(props){
//            super(props)
//            this.a = props.num1
           

//     }
//     doOperation (){
//         return <>
//         <h1>from doOperation</h1></>
 
//     }
//     myeventHandler(e){
//           console.log(e.target);
//           console.log(e.target.value);
//           console.log("in event handler")

//           if(e.target.value === 'factorial'){
            

//           }
//           if (e.target.value === 'call'){

//           }
//           if(e.target.value ==='call2'){

//           }
          
          
//     }

//     render(){
//         return(
//             <> 
//             <h1>From class Component</h1>
//             Enter a number
//             <input type="text" id="t1"
//             onBlur={(e)=>{console.log(e.target.value)}}></input>
//             <button value ="Factorial" onClick={this.myeventHandler}> Call Factorial</button>
//             <button value ="call" onClick={this.myeventHandler}>call</button> 
//             <button value= "call2" onClick={this.myeventHandler}>call2</button>
//             {this.doOperation()}
//             </>
//         )
//     }
// }
import { Component } from "react";

export default class Fact extends Component {

    constructor(props) {
        super(props)   
        this.a = props.num1;
          this.state = {
            inputValue: '',
            result: null
        };

    }
 calculateFactorial = (n) => {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };

 myEventHandler = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        console.log("in event handler");
           
        const number = parseInt(this.state.inputValue);
        if (!isNaN(number)) {
            const factorialResult = this.calculateFactorial(number);
            this.setState({ result: factorialResult });
        } else {
            this.setState({ result: "Please enter a valid number" });
        }
    }

     handleInputChange = (e) => {
       console.log(e.target.value);
         this.setState({ inputValue: e.target.value });
     }
    // <Fact>
    render() {
        return (
            <>
    <h1>Class Component</h1>
    {/* Enter a number <input
     type="text" id="t1" onBlur={(e) => 
                    { console.log(e.target.value) }}
                    ></input> */}
                     <div>
                        <label >
                    Enter a number:
                </label>
                        <input
                    type="text"
                    id="t1"
                     value={this.state.inputValue}
                       onChange={this.handleInputChange}
                        // onBlur={(e) => { 
                        //     console.log(e.target.value);
                        // }
                        //}
                /></div> 

    <button     value="Factorial" 
                onClick={this.myEventHandler}>
                    Call Factorial
                     </button>
                     {this.state.result !== null && (
                    <div >
                        <p>Result:</p>
                        <p>{this.state.result}</p>
                    </div>
                )}
                    </>
        )
    }


}