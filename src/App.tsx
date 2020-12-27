import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar } from './util/Navbar';
import { DoMeasurement } from './views/DoMeasurement';
import { TablesMeasurement, TablesMeasurementConnected } from './views/TablesMeasurement';




function App() {



  return (
    <Provider store={store} >
      <div>
        <Navbar />
        <DoMeasurement />
        <TablesMeasurementConnected />







      </div>
    </Provider>
  );
}

export default App;
