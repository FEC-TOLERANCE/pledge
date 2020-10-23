const React = require('react');

const PledgeOption = (props) => {
  let location = 'Only certain countries';
  if (props.option.shippingLocation) {
    location = 'Anywhere in the world'
  }

  return (
    <div className="option-container">
      <div className="pledge-option">
        <h3>Pledge ${props.option.tier} or more</h3>
        <h4>{props.option.reward}</h4>
        <p>[reward-desc]</p>
        <p className="subheading-caps">Includes:</p>
        <ul>
          {props.option.rewardDetail.map((detail) => <li>{detail}</li>)}
        </ul>
        <div className="delivery-shipping">
          <p className="subheading-caps">Estimated Delivery</p>
          <p>{props.option.estimatedDelivery}</p>
          <p className="subheading-caps">Ships To</p>
          <p>{location}</p>
        </div>
        <p className="subheading-caps">{props.option.pledgeBackers} backers</p>
      </div>
      <div className="select-option-overlay">
        <p>Select this option</p>
      </div>
    </div>
  )
}

export default PledgeOption;