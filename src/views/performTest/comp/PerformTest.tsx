import React, { useState } from 'react';
import { Formik } from "formik";
import { GroupModel } from "../model/GroupModel";
import { SelectGroup } from "./SelectGroup";
import { emptyPerformTestModel, PerformTestModel } from "../model/PerformTest.model";

export const PerformTest: React.FC = () => {
    const handleSubmit = (values: any) => {
        console.log(values);
    }

    const [groups, setGroups] = useState<Array<GroupModel>>([
        {
            name: 'Gr1',
            id: 1,
        },
        {
            name: 'Gr2',
            id: 2,
        },
        {
            name: 'Gr3',
            id: 3,
        },
    ]);

    return (
        <Formik<PerformTestModel>
            initialValues={emptyPerformTestModel()}
            onSubmit={handleSubmit}
        >
            <SelectGroup
                groups={groups}
            />
        </Formik>
    );
};
