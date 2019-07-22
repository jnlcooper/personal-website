import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Styles = styled.div`
    .primary-button {
        border-color: #99B6AE;
        border-width: 2px;
        
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        color: #99B6AE;
        font-weight: 400;
        letter-spacing: 2px;

        &:hover {
            background-color: #99B6AE;
            color: #F2F2F2;
            box-shadow: 0px 0px 5px #99B6AE;
        }

        &:active{
            box-shadow: 0px 0px 5px #99B6AE;
        }

        &:focus{
            box-shadow: 0px 0px 5px #99B6AE;
        }
    }
`;

class PrimaryButton extends React.Component {
    render() {
        return (
            <Styles>
                <Button variant="mt-4 rounded-pill primary-button">
                    <div className="mb-0">{this.props.buttonText}</div>
                </Button>
            </Styles>
        );
    }
}

export default PrimaryButton;