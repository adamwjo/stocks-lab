import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioIds: [],
    sort: '',
    filter: 'All'
  }

  componentDidMount = async () => {
    const response = await fetch(URL)
    const stocks = await response.json()
    this.setState({ stocks })
  }

  addStock = (id) => {
    // If the id passed in cant be found in the portfolioids array
    // add it to state
    if(!this.state.portfolioIds.find(folioId => folioId === id)){
      this.setState({
        portfolioIds: [...this.state.portfolioIds, id]
      })
    }
  }

  removeStock = (id) => {
    //filter the list of portfolioId's based on the id thats passed in
    //return all that DONT match
    this.setState({
      portfolioIds: this.state.portfolioIds.filter(portId => portId !== id)
    })
  }

  updateFilter = (filter) => {this.setState({filter})}

  updateSort = (sort) => {this.setState({sort})}

  stockDisplayCalculator = () => {
    let { filter, stocks, sort } = this.state
    //create a copy of state using the spread operator
    let filteredStocks = [...stocks]

    //If the stock filter isn't all use 
    //Whatever filter is in state, and
    // filter the copy based on that
    if(filter !== "All"){
      filteredStocks = filteredStocks.filter(stock => stock.type === filter )
    }

    //Now we can take the filtered list and sort it based on state
     switch(sort){
      case "Alphabetically":
        return filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
          return filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return filteredStocks
    }
  }

  render() {

    // Map over the portfolioids
    // With each ID, find the stock in state that matches
    let portfolioData = this.state.portfolioIds.map(id => this.state.stocks.find(stock => stock.id == id))

    let displayData = this.stockDisplayCalculator()

    return (
      <div>
        <SearchBar
          sort={this.state.sort}
          filter={this.state.filter}
          updateFilter={this.updateFilter}
          updateSort={this.updateSort}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                addStock={this.addStock} 
                stocks={displayData} 
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                removeStock={this.removeStock}
                portfolioData={portfolioData}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
