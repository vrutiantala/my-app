  import React, { Component } from 'react'
import SelectBox from './features/select-box'

class App extends Component {
  render() {
    return <div>
      <h1>EXPLORE COURSES</h1>
      <div style={{margin: '16px', position: 'relative'}}>
        <SelectBox
          name="venue[course]"
          items={[
            { value: 'DATA SCIENCE', id: 1 },
            { value: 'NETWORKING', id: 21 },
            { value: 'MOBILE APP', id: 43 },
            { value: 'DATA MANAGEMENT', id: 2 },
            { value: 'SOFTWARE DEVELOPEMENT', id: 22 },
            { value: 'ETHICAL HACKING', id: 23 },
            { value: 'WEB DESIGN', id: 23 },
          ]}
        />
      </div>
    </div>
  }
}

export default App