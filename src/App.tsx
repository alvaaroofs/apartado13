import React from 'react';
import './App.css';
import { Person, Country } from './Person';

//Si ponemos un tipo de dato que no es acorde con el declarado, o nos falta algun prop de los que hemos declarado, 
//nos indicara un error en rojo; Si queremos que un dato aparezca o no, al declararlo en la interface, lo declaramos 
//de la siguiente manera con el signo de interrogacion:   {country?: Country;}

function App() {
  return (
    <div className="App">
        <Person 
          name="Pedro"
          email="a@example.com"
          age={21}
          isMarried={true}
          friends={["jake", "jessica", "jerry"]}
          country={Country.France}
        />
    </div>
  );
}

export default App;
