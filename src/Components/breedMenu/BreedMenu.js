import React from 'react';
import {InputGroup, FormControl, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import './BreedMenu.css'

export default function BreedMenu({filterText, handlerFilter, handleChangeImages}){
    return(
        <div className="a-breeds-menu">
            <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups">
                <InputGroup >
                    <InputGroup.Prepend>
                        <InputGroup.Text>Search:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Search actor" aria-label="Filter"value={filterText} onChange={handleFilter}  />
                </InputGroup>

                <ButtonGroup aria-label="First group">
                    <Button variant="secondary" onClick={handleChangeImages}>Change images</Button>{' '}
                </ButtonGroup>

            </ButtonToolbar>
        </div>
    )
}