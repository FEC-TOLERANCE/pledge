const React = require('react');
const ReactDOM = require('react-dom');

class Pledge extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p>pledge</p>
    )
  }
}

ReactDOM.render(<Pledge />, document.getElementById('pledge'));