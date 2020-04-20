import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
padding-bottom: 1.5em;
display: flex;
justify-content: space-between;
`
const Col = styled.div`

`

class Subtotal extends React.Component{
    render(){
        return(
            <Row>
                <Col>Subtotal</Col>
                <Col>{`$${this.props.price}`}</Col>
            </Row>
        )
    }
}

export default Subtotal