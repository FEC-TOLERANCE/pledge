const React = require('react');

const PledgeOption = (props) => {
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let location = 'Only certain countries';
  let date = `${months[Number(props.option.estimatedDelivery.slice(5, 7)) - 1]} ${props.option.estimatedDelivery.slice(0, 4)}`;

  if (props.option.shippingLocation) {
    location = 'Anywhere in the world'
  }

  return (
    <div className="option-container">
      <div className="pledge-option">
        <h3>Pledge ${props.option.tier} or more</h3>
        <h4>{props.option.reward}</h4>
        <p className="reward-desc grey-text">{props.option.rewardDesc}</p>
        <p className="subheading-caps grey-text">Includes:</p>
        <ul>
          {props.option.rewardDetail.map((detail) => <li key={detail.replace(' ', '')}>{detail}</li>)}
        </ul>
        <div className="delivery-shipping">
          <p className="subheading-caps grey-text">Estimated Delivery</p>
          <p>{date}</p>
          <p className="subheading-caps">Ships To</p>
          <p>{location}</p>
        </div>
        <p className="subheading-caps grey-text">{props.option.pledgeBackers} backers</p>
      </div>
      <div className="select-option-overlay">
        <p>Select this option</p>
      </div>
    </div>
  )
}

export default PledgeOption;