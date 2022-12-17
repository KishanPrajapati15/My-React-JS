import React from 'react'

// function Greet(){
//     return <h1>Hello Kishan</h1>
// } 

// const Greet = () => <h1>Hello Kishan</h1>

// const Greet = () => {
//     return (
//         <div className='greetClass'>
//             <h1>Hello kISHANNNN</h1>
//         </div>
//     )
// }

// const Greet1 = props => {
//     console.log(props)
//     return<h1>Hello {props.name} known as {props.heroName}</h1>

// }

// const Greet1 = props => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} known as {props.heroName}</h1>
//             {props.children}
//         </div>
//     )

// }


const Greet1 = props => { //destructuring props
    const {name,heroName} = props
    //if want to destructure state then syntax is:
    //const {state1,state2} = this.sta te
    return (
        <div>
            <h1>Hello {name} known as {heroName}</h1>
        </div>
    )

}

// export default Greet
export default Greet1