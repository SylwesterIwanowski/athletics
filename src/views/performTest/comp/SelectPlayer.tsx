import React from 'react';
import {SelectWrapper} from "./SelectWrapper";
import {PlayerModel} from "../model/PlayerModel";
import {useFormikContext} from "formik";
import {PerformTestModel} from "../model/PerformTest.model";

export const SelectPlayer: React.FC = () => {

    const { values } = useFormikContext<PerformTestModel>();

    const getLabel = (val: PlayerModel) => {
        return `${val.name} ${val.surname}`;
    };

    return (
        <>
            <SelectWrapper<PlayerModel>
                name="selectedPlayer"
                getLabel={getLabel}
                options={values.players}
            />
        </>
    );
};
