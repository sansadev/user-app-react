
import React from 'react';

function Hello(props) {
    return <h1>Hello at {props.now}</h1>
}


describe("When setting directly", () => {
    let result;
    beforeAll(() => {
        result = Hello({now: moment.toISOString})
    })
    
    
    it("return a value", () => {
        expect(result).not.toBeNull();
    });
});