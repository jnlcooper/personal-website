import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import Arrow from '../assets/homePage/designCharrettes/icons/arrow_right_green_icon.png';

const Styles = styled.div`
    .arrow-button {
        cursor: pointer;
    }
`

class ArrowButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            direction: this.props.direction
        }
    }

    onComponentDidUpdate() {
        if(this.state.direction === "left") {
            console.log("left");
        } else {
            console.log("right");
        }
    }

    renderButton() {
        if(this.state.direction === "left") {
            return(
                <Row className="d-flex ml-0 mt-4 mr-2">
                    <img
                        src={Arrow}
                        width="auto"
                        height="20px"
                        alt="Left Arrow"
                        style={{transform: `rotate(180deg)`}}
                        className="mr-3 arrow-button"
                    />
                    <h4 className="mb-0 arrow-button">{this.props.buttonText}</h4>
                </Row>
            );
        } else {
            return (
                <Row className="d-flex justify-content-end mt-4 mr-2">
                    <h4 className="mr-3 mb-0 arrow-button">{this.props.buttonText}</h4>
                    <img
                        src={Arrow}
                        width="auto"
                        height="20px"
                        alt="Right Arrow"
                        className="arrow-button"
                    />
                </Row>
            );
        }
    }
    
    render() {
        return(
            <Styles>
                {this.renderButton()}
            </Styles>
        );
    }
}

export default ArrowButton;