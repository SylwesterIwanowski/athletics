import React, {useState} from 'react';
import Select from "react-select";
import {useFormikContext} from "formik";
import {PerformTestModel} from "../model/PerformTest.model";
import _ from 'lodash';
import {useSetFormikField} from "./useSetFormikField";

interface Props<T> {
    name: string;
    getLabel: (option: T) => string;
    options: Array<T>;
    onChange?: (option: T | null | undefined) => void;
}

export const SelectWrapper = <T extends object>(props: Props<T>): React.ReactElement<Props<T>> => {
    const {
        name,
        getLabel,
        options,
        onChange,
    } = props;

    const { values } = useFormikContext<PerformTestModel>();
    const setValue = useSetFormikField<T>(name);

    const value = _.get(values, name) as T;

    const handleChange = (val: T | null | undefined) => {
        setValue(val);
        if (onChange) {
            onChange(val);
        }
    }


    return (
        <Select
            options={options}
            getOptionValue={getLabel}
            formatOptionLabel={getLabel}
            value={value}
            onChange={handleChange}
            backspaceRemovesValue
        />
    );
};
