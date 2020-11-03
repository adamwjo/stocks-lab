import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let { portfolioData, removeStock } = this.props

    return (
      <div>
        <h2>My Portfolio</h2>
          { portfolioData.map(stock => <Stock key={stock.id} stockAction={removeStock} stockData={stock} />) }
      </div>
    );
  }

}

export default PortfolioContainer;
