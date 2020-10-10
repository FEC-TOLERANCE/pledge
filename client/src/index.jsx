const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');
import ProjectOwner from './components/ProjectOwner.jsx';
import PledgeOption from './components/PledgeOption.jsx';

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
      options: []
    }
    this.fetchOwner = this.fetchOwner.bind(this);
    this.fetchOptions = this.fetchOptions.bind(this);
  }

  componentDidMount() {
    this.fetchOwner(1);
    this.fetchOptions(1);
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

  fetchOptions(itemId) {
    axios.get(`pledge-options/${itemId}`)
      .then((result) => {
        console.log(result.data.options);
        this.setState({options: result.data.options});
      });
  }

  render() {
    return (
      <div id="pledge-sidebar">
        <ProjectOwner owner={this.state.owner}/>
        <h2>Support</h2>
        <div className="pledge-option">
          <h3 className="pledge-option-heading">Pledge without a reward</h3>
        </div>
        {this.state.options.map((option) => <PledgeOption option={option} />)}
      </div>
    )
  }
}

ReactDOM.render(<Pledge />, document.getElementById('pledge'));