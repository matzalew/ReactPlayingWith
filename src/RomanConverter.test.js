import { cleanup, render, fireEvent } from "@testing-library/react";
import React from "react";
import RomanConverter from "./RomanConverter";

describe ('<RomanConverter />', () => {
    afterEach(cleanup)

    it ('has an input field', () => {
        const {getByLabelText} = render(<RomanConverter />)
        expect(() => {
            getByLabelText(/arabic/i)
        }).not.toThrow();
    });

    it('shows no roman number by default', () => {
        const {getByText} = render(<RomanConverter/>)
        expect(()=>{
            getByText("Roman: none")
        }).not.toThrow();
    });

    it('converts 1 to I', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "1"}});
        expect(()=>{
            getByText("Roman: I")
        }).not.toThrow();
    });

    it('converts 5 to V', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "5"}});
        expect(()=>{
            getByText("Roman: V")
        }).not.toThrow();
    });

    it('converts 2019 to MMXIX', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "2019"}});
        expect(()=>{
            getByText("Roman: MMXIX")
        }).not.toThrow();
    });

    it('does not convert 0 to anything', () => {
        const {getByLabelText, getByText} = render(<RomanConverter/>)
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "0"}});
        expect(()=>{
            getByText("Roman: none")
        }).not.toThrow();
    });
});