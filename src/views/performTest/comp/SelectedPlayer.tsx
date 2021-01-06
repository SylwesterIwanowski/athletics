import React from 'react';
import {useSetFormikField} from "./useSetFormikField";
import {useFormikContext} from "formik";
import {PerformTestModel} from "../model/PerformTest.model";

export const SelectedPlayer: React.FC = () => {
    const { values } = useFormikContext<PerformTestModel>();

    return (
        <>
            {JSON.stringify(values.selectedPlayer)}
        </>
    );
};
