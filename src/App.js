import React from 'react';
import styled from 'styled-components'

import './App.css'
import Header from './component/Header'
import Subtotal from './component/Subtotal'
import PickupSavings from './component/PickupSavings'
import TaxesFess from './component/TaxesFees'
import EstimatedTotal from './component/EstimatedTotal'
import ItemDetails from './component/ItemDetails'
import PromoCode from './component/PromoCode'

import {connect} from 'react-redux'
import {handleChange} from './actions/promoCodeAction'

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
      total: 550,
      PickupSavings: -3.50,
      taxes: 0,
      estimatedTotal: 0,
      disabledPromoButton: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.0875
    },
      function (){
        this.setState({
          estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
        })
      }
    )
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT'){
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function(){
        this.setState({
          disabledPromoButton: true
        })
      }
      )
    }
  }

  render(){
    return(
      <Wrapper>
        <Grid>
          <Header />
          <br/>
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings.toFixed(2)} />
          <TaxesFess taxes={this.state.taxes.toFixed(2)} />
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr/>
          <PromoCode 
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disabledPromoButton}
          />
        </Grid>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(App);
