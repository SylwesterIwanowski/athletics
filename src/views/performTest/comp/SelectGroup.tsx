import React from 'react';
import {GroupModel} from "../model/GroupModel";
import {SelectWrapper} from "./SelectWrapper";
import {axiosInstance} from "./axiosInstance";
import {useSetFormikField} from "./useSetFormikField";

interface Props {
    groups: Array<GroupModel>;
}

export const SelectGroup: React.FC<Props> = (props) => {
    const {
        groups,
    } = props;

    const formatLabel = (option: GroupModel): string => {
        return option.name;
    }

    const setPlayers = useSetFormikField('players');

    const handleUpdatePlayers = () => {
        const headers = {
        };
        const axiosInstance1 = axiosInstance();
        const instance = axiosInstance1.create({ headers })
        instance.get('http://localhost:3001/players').then((response) => {
            console.log('response');
            console.log(response);
            setPlayers(response.data.players)
        })
    };

    return (
        <SelectWrapper<GroupModel>
            name="group"
            options={groups}
            getLabel={formatLabel}
            onChange={handleUpdatePlayers}
        />
    );
};
