import React from 'react';
import axios from 'axios';
import ProjectOwner from './ProjectOwner.jsx';
import PledgeOption from './PledgeOption.jsx';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: {
        name: 'Name',
        iconUrl: 'https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
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
    let itemId = Number(window.location.pathname.replaceAll('/', ''));
    this.fetchOwner(itemId);
    this.fetchOptions(itemId);
  }

  fetchOwner(itemId) {
    axios.get(`http://ec2-3-15-177-95.us-east-2.compute.amazonaws.com:3003/project-owner/${itemId}`)
      .then((result) => {
        this.setState({
          owner: {
            name: result.data.name,
            iconUrl: result.data.iconUrl,
            created: result.data.created,
            backed: result.data.backed,
            aboutMe: result.data.aboutMe
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchOptions(itemId) {
    axios.get(`http://ec2-3-15-177-95.us-east-2.compute.amazonaws.com:3003/pledge-options/${itemId}`)
      .then((result) => {
        this.setState({options: result.data.options});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="pledge-sidebar">
        <ProjectOwner owner={this.state.owner}/>
        <h2>Support</h2>
        <div className="option-container">
          <div className="pledge-option">
            <h3 className="pledge-option-heading">Pledge without a reward</h3>
            <div className="no-reward-form">
              <div className="currency-box grey-text">
                <span>$</span>
              </div>
              <input type="text" defaultValue="10" className="no-reward-input" name="backing-amount" placeholder="Pledge any amount"></input>
            </div>
            <div className="no-reward-desc">
              <h3>Back it because you believe in it.</h3>
              <p>Support the project for no reward, just because it speaks to you.</p>
            </div>
            <button className="no-reward-submit">Continue</button>
          </div>
        </div>
        {this.state.options.map((option) => <PledgeOption key={option.tier} option={option} />)}
      </div>
    )
  }
}

export default Pledge;