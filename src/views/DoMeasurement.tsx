import React from 'react';
import { Formik, Field, Form, } from 'formik';
import { addPlayerAction } from '../state/scoreTableReducer';
import { connect } from 'react-redux';



interface Props {
    addPlayer: (name: string, surname: string, score: number) => void;
}




export const DoMeasurement: React.FC<Props> = (props) => {

    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    score: '',
                }}
                onSubmit={(values) => {
                    console.log("valius");
                    console.log(values);
                    props.addPlayer(values.firstName, values.lastName, Number(values.score));
                }}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field className="form-control" id="firstName" name="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field className="form-control" id="lastName" name="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Wynik</label>
                        <Field
                            className="form-control"
                            id="score"
                            type="number"
                            name="score"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Wpisz</button>
                </Form>
            </Formik>
        </div>

    );
}


const mapStateToProps = (state: any) => {
    console.log(state)
    return {

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPlayer: ((name: string, surname: string, score: number) => {
            dispatch(addPlayerAction(name, surname, score))
        })

    }
}

export const DoMeasurementConnected = connect(mapStateToProps, mapDispatchToProps)(DoMeasurement);
