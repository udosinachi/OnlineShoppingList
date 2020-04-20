import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
text-decoration: underline;
`
const Col1 = styled.div`

`
const Col2 = styled.div`
color: red;
font-weight: 800;
`
const Row = styled.div`
padding-bottom: 1.5em;
display: flex;
justify-content: space-between;
`
class PickupSavings extends React.Component{
    render(){
        return(
            <Row>
                <Col1>
                    <Div>Pickup Savings</Div>
                </Col1>
                <Col2> {`$${this.props.price}`} </Col2>
            </Row>
        )
    }
}

export default PickupSavings