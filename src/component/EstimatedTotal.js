import React from 'react'
import styled from 'styled-components'

const Col1 = styled.div`

`
const Col2 = styled.div`

`
const Row = styled.div`
padding-bottom: 1.5em;
display: flex;
justify-content: space-between;
`

class EstimatedTotal extends React.Component{
    render(){
        return(
            <Row>
                <Col1><h2>Est. Total</h2></Col1>
                <Col2> <h2>{`$${this.props.price}`}</h2> </Col2>
            </Row>
        )
    }
}

export default EstimatedTotal