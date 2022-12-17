import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure comp render ')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp

//A pure compo implements shouldComponentUpdate with a shallow props and state comparison . If there is difference in prev state/ props and current state/props then only the componenet rerenders/ 