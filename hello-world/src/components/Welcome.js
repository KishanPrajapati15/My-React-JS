import React,{Component} from 'react' //need to import component as well for class component

// class Welcome extends Component {
//     render(){
//         return <h1>Class Component</h1>
//     }
// }

// class Welcome extends Component {
//     render(){
//         return <h1>Welcome {this.props.name} and {this.props.heroName}</h1>
//     }
// }

class Welcome extends Component { //destructuring props in class component
    render(){
        const {name,heroName} = this.props
        return <h1>Welcome {name} and {heroName}</h1>
    }
}


export default Welcome