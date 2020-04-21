import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

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
const Div = styled.div`
`
const Media = styled.div`
display: flex;
justify-content: space-between;
`
const Img = styled.img`
display: block;
margin: 1em 1em 1em 1em;
padding-top: 1em;
`
const MediaLeft = styled.div`
`
const MediaBody = styled.div`
display: block;
margin: 1em 1em 1em 1em;
`
const P = styled.p`
`
const Row = styled.div`
display: flex;
justify-content: space-between;
`
const Col1 = styled.div`
`
const Col2 = styled.div`
`
const Strong = styled.strong`
text-decoration-line: line-through;
color: grey;
`

class ItemDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    render(){
        return(
            <Div>
                <Button 
                    onClick={() => this.setState({open : !this.state.open})}
                >{this.state.open === false ? `See` : `Hide `} item details
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <div>
                {this.state.open && <Collapse>
                    <div>
                            <Media>
                                <MediaLeft>
                                    <Img 
                                    width={100}
                                    height={100}
                                    alt='thumbnail'
                                    src='/Asset/Img/images.jpeg'
                                    />
                                </MediaLeft>
                                <MediaBody>
                                    <P>Samsung Note 10 lite<br/>6/8GB RAM<br/>4500MAH</P>
                                    <Row>
                                        <Col1>
                                            <strong> {`$${this.props.price}`} </strong>
                                            <br/>
                                            <Strong> {`$${this.props.price}`} </Strong>
                                        </Col1>
                                        <Col2> <strong>Qty: 1</strong> </Col2>
                                    </Row>
                                </MediaBody>
                            </Media>
                    </div>
                </Collapse>}
                </div>
            </Div>
        )
    }
}

export default ItemDetails