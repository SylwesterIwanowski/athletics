import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, } from 'formik';




export const DoMeasurement: React.FC = () => {

    return (
        <div>
            <h1>WYKONAJ TEST</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Wybierz test
  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" >60m</a>
                    <a className="dropdown-item" href="#">600m</a>
                    <a className="dropdown-item" href="#">1000m</a>
                    <a className="dropdown-item" href="#">p. palantowa</a>
                    <a className="dropdown-item" href="#">skok w dal</a>
                </div>
            </div>
            <p></p>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    score: '',
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
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

