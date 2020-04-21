import React from 'react';
import styled from 'styled-components'

import Subtotal from './component/Subtotal'
import PickupSavings from './component/PickupSavings'
import TaxesFess from './component/TaxesFees'
import EstimatedTotal from './component/EstimatedTotal'
import ItemDetails from './component/ItemDetails'

const Grid = styled.div`
width: 350px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 1em;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 15px;
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      total: 100,
      PickupSavings: -3.50,
      taxes: 0,
      estimatedTotal: 0,
    }
  }


  render(){
    return(
      <Wrapper>
        <Grid>
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings.toFixed(2)} />
          <TaxesFess taxes={this.state.taxes.toFixed(2)} />
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr/>
        </Grid>
      </Wrapper>
    )
  }
}

export default App;
