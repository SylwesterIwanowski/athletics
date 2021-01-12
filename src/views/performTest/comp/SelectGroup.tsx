import React, {useEffect} from 'react';
import {GroupModel} from "../model/GroupModel";
import {SelectWrapper} from "./SelectWrapper";
import {useSetFormikField} from "./useSetFormikField";
import axios from "axios";
import {useFormikContext} from "formik";
import {PerformTestModel} from "../model/PerformTest.model";

export const SelectGroup: React.FC = () => {

    const formatLabel = (option: GroupModel): string => {
        return option.name;
    }

    const { values } = useFormikContext<PerformTestModel>();
    const setPlayers = useSetFormikField('players');
    const setGroups = useSetFormikField('groups');

    useEffect(() => {
        axios.get('http://localhost:3001/groups').then((response) => {
            console.log('response');
            console.log(response);
            setGroups(response.data.groups);
        })

    }, [  ])

    const handleUpdatePlayers = () => {
        axios.get('http://localhost:3001/players').then((response) => {
            console.log('response');
            console.log(response);
            setPlayers(response.data.players)
        })
    };

    return (
        <SelectWrapper<GroupModel>
            name="group"
            options={values.groups}
            getLabel={formatLabel}
            onChange={handleUpdatePlayers}
        />
    );
};
