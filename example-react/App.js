import React from 'react'
import SVGInline from "react-svg-inline"
import mySvg from './tiger.svg'
class App extends React.Component {

  render () {

    return (
      <div>
        <SVGInline width={400} svg={ mySvg } />
      </div>
    )
  }

}

export { App }