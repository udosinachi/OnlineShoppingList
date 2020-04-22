import React from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {handleChange} from '../actions/promoCodeAction'


const Button = styled.button`
`
const Div = styled.div`
`
const Collapse = styled.div`
`
const Row = styled.div`
`
const Col = styled.div`
`
const Form = styled.form`
`
const Formgroup = styled.label`
`
const Controllabel = styled.p`
`
const Formcontrol = styled.input`
`
const Button1 = styled.button`
`


class PromoCode extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
        }
    }

    handleChange = e => {
        this.props.handleChange(e)
    }

    render(){
        return(
            <div>
                <Button
                onClick={() => this.setState({open : !this.state.open})}
                >
                    {this.state.open === false ? `Apply ` : `Hide `} 
                    promo code
                    {this.state.open === false ? `+ ` : `- `}
                </Button>
                <Div>
                    {this.state.open && <Collapse>
                        <Row>
                            <Col>
                                <Form>
                                    <Formgroup>
                                        <Controllabel>Promo Code</Controllabel>
                                        <Formcontrol 
                                        type='text'
                                        placeholder='Enter promo code'
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                        />
                                    </Formgroup>
                                    <Button1
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                    >Apply</Button1>
                                </Form>
                            </Col>
                        </Row>
                    </Collapse>}
                </Div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(PromoCode)