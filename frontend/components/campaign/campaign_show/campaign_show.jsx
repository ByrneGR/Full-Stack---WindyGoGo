import React from 'react';

class CampaignShow extends React.Component {
  
  render() {
    return (
      <ul>
        <li key={this.props.id}>
          <img src={this.props.campaign.photoUrl}/>
        </li>
      </ul>
    )
  }
}

export default CampaignShow;