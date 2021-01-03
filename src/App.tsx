import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbars } from './util/Navbars';
import { DoMeasurement, DoMeasurementConnected } from './views/DoMeasurement';
import { TablesMeasurement, TablesMeasurementConnected } from './views/TablesMeasurement';




function App() {



  return (
    <Provider store={store} >
      <div>
        <Navbars />
        <DoMeasurementConnected />
        <TablesMeasurementConnected />


      </div>
    </Provider>
  );
}

export default App;
