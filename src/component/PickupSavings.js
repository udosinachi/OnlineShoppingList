import React, {useRef, useState, useEffect} from 'react'
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

function useHover(){
    const ref = useRef()
    const [hovered, setHovered] = useState(false)

    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    useEffect(() => {
        ref.current.addEventListener('mouseenter',enter)
        ref.current.addEventListener('mouseleave',leave)
        return() => {
            ref.current.removeEventListener('mouseenter',enter)
            ref.current.removeEventListener('mouseleave',leave)
        }
    }, [ref])

    return [ref, hovered]
}

function PickupSavings(props){

    const [ref, hovered] = useHover()

        return(
            <div ref={ref}>
                <Row>
                    <Col1>
                        <Div>Pickup Savings</Div>
                        {hovered &&<p>You can save money if you go to stores</p>}
                    </Col1>
                    <Col2> {`$${props.price}`} </Col2>
                </Row>
            </div>
        )
    }


export default PickupSavings