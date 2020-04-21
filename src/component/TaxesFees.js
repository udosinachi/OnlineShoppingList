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

class TaxesFees extends React.Component{
    render(){
        return(
            <Row>
                <Col1>Est. Tax and Fees<br /> (Based on 94008)</Col1>
                <Col2> {`$${this.props.taxes}`} </Col2>
            </Row>
        )
    }
}

export default TaxesFees