const React = require('react');

const PledgeOption = (props) => {
  let location = 'Only certain countries';
  if (props.option.shippingLocation) {
    location = 'Anywhere in the world'
  }

  return (
    <div className="pledge-option">
      <h3>Pledge ${props.option.tier} or more</h3>
      <h4>{props.option.reward}</h4>
      <p>[reward-desc]</p>
      <p className="subheading-caps">Includes:</p>
      <ul>
        {props.option.rewardDetail.map((detail) => <li>{detail}</li>)}
      </ul>
      <p className="subheading-caps">Estimated Delivery</p>
      <p>{props.option.estimatedDelivery}</p>
      <p className="subheading-caps">Ships To</p>
      <p>{location}</p>
      <p className="subhead">{props.option.pledgeBackers} backers</p>
    </div>
  )
}

export default PledgeOption;