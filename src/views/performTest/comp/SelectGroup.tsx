import React, {useState} from 'react';
import {GroupModel} from "../model/GroupModel";
import Select from "react-select";

interface Props {
    groups: Array<GroupModel>;
}

export const SelectGroup: React.FC<Props> = (props) => {
    const {
        groups,
    } = props;
    const [ value, setValue ] = useState<GroupModel>()

    const handleChange = (val: any) => {
        setValue(val);
    }

    const mappedOptions = groups.map((group) => {
        return {
            ...group,
        }
    })

    const formatLabel = (option: GroupModel) => {
        return option.name;
    }

    const getOptionValue = (option: any) => {
        return option.id;
    }

    return (
        <>
            <Select
                onChange={handleChange}
                value={value}
                options={mappedOptions}
                formatOptionLabel={formatLabel}
                getOptionValue={getOptionValue}
            />
        </>
    );
};
