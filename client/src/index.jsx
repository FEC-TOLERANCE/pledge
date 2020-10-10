const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import ProjectOwner from './components/ProjectOwner.jsx';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: {
        name: 'Name',
        created: 0,
        backed: 0,
        aboutMe: 'About Me'
      },
      options: {}
    }
    this.fetchOwner = this.fetchOwner.bind(this);
  }

  componentDidMount() {
    this.fetchOwner(1);
  }

  fetchOwner(itemId) {
    axios.get(`project-owner/${itemId}`)
      .then((result) => {
        this.setState({
          owner: {
            name: result.data.name,
            created: result.data.created,
            backed: result.data.backed,
            aboutMe: result.data.aboutMe
          }
        });
      });
  }

  render() {
    return (
      <div id="pledge-sidebar">
        <ProjectOwner owner={this.state.owner}/>
      </div>
    )
  }
}

ReactDOM.render(<Pledge />, document.getElementById('pledge'));