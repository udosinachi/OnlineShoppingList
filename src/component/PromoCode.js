import React from 'react'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {handleChange} from '../actions/promoCodeAction'


const Button = styled.button`
`
const Div = styled.div`
`
const Collapse = styled.div`
height: 10%;
width: 100;
position: relative;
overflow-x: hidden;
background: whitesmoke;
margin: 1em 0 1em 0;
border-style: ridge;
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
margin-left: 2em;
`
const Formcontrol = styled.input`
margin-left: 2em;
width: 82%;
padding-top: 1em;
padding-bottom: 1em;
border: 0.1em solid grey;
border-radius: 0.5em;

`
const Button1 = styled.button`
width: 82%;
color: white;
margin-left: 2em;
padding-top: 1em;
padding-bottom: 1em;
border: none;
border-radius: 0.5em;
background: green;
text-align: center;
text-decoration: none;
display: inline-block;
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
                                        <Controllabel><strong>Promo Code</strong></Controllabel>
                                        <Formcontrol 
                                        type='text'
                                        placeholder='Enter promo code'
                                        value={this.props.promoCode}
                                        onChange={this.handleChange}
                                        />
                                    </Formgroup><br/><br/>
                                    <Button1
                                    disabled={this.props.isDisabled}
                                    onClick={this.props.giveDiscount}
                                    >Apply</Button1><br/><br/>
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