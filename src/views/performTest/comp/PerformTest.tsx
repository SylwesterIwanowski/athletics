import React, { useState } from 'react';
import {Form, Formik} from "formik";
import { GroupModel } from "../model/GroupModel";
import { SelectGroup } from "./SelectGroup";
import { emptyPerformTestModel, PerformTestModel } from "../model/PerformTest.model";
import { SelectWrapper } from './SelectWrapper';
import {SelectPlayer} from "./SelectPlayer";
import {SelectedPlayer} from "./SelectedPlayer";

export const PerformTest: React.FC = () => {
    const handleSubmit = (values: PerformTestModel) => {
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
            <Form>
                Wybierz grupę:
                <SelectGroup
                    groups={groups}
                />
                Wybierz zawodnika:
                <SelectPlayer />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2>Selected player:</h2>
                <SelectedPlayer />
                <br />
                <button type="submit">kliknij</button>
            </Form>
        </Formik>
    );
};
