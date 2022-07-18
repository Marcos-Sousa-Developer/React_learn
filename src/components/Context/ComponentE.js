import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {

    static contextType = UserContext // only work with class context  
  render() {
    return (
        <div>
            Component E context {this.context}
            <ComponentF></ComponentF>
        </div>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE