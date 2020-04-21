import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

`
const Collapse = styled.div`
height: 100%;
width: 100;
position: relative;
overflow-x:
`
const Div = styled.div`

`
const Well = styled.div`

`
const Media = styled.div`

`
const MediaLeft = styled.div`

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
            <div>
                <Button 
                    onClick={() => this.setState({open : !this.state.open})}
                >{this.state.open === false ? `See` : `Hide `} item details
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse>
                    <Div>
                        <Well>
                            <Media>
                                <MediaLeft>
                                    <img 
                                    width={100}
                                    height={100}
                                    alt='thumbnail'
                                    src='/Asset/Img/images.jpeg'
                                    />
                                </MediaLeft>
                            </Media>
                        </Well>
                    </Div>
                </Collapse>
            </div>
        )
    }
}

export default ItemDetails