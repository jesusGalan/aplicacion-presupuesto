import React, {useState, useEffect} from "react";
import {UserInput} from './components/UserInput'
import {Formulario} from './components/Formulario'
import {Listado} from './components/Listado'
import {ControlPresupuesto} from "./components/ControlPresupuesto"

function App() {

    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarUserInput, actualizarUserInput] = useState(true); // Inicia a true para que se muestre al cargar la página
    const [gastos, guardarGastos] = useState([]);
    const [gasto, guardarGasto] = useState({})
    const [crearGasto, guardarCrearGasto] = useState(false)

    // UseEffect que actualiza el restante

    useEffect(() => {
        guardarGastos([
            ...gastos,
            gasto
        ])

        const _restante = restante - gasto.cantidad;
        guardarRestante(_restante)

        guardarCrearGasto(false)
    }, [gasto, gastos, restante])

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>

                <div className="contenido-principal contenido">

                    {mostrarUserInput ?
                        (
                            <UserInput
                                guardarPresupuesto={guardarPresupuesto}
                                guardarRestante={guardarRestante}
                                actualizarUserInput={actualizarUserInput}
                            />
                        ) : (
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario
                                        guardarGasto={guardarGasto}
                                        guardarCrearGasto={guardarCrearGasto}
                                    />
                                </div>
                                <div className="one-half column">

                                    <Listado
                                        gastos={gastos}
                                    />

                                    <ControlPresupuesto
                                        presupuesto={presupuesto}
                                        restante={restante}
                                    />

                                </div>
                            </div>
                        )
                    }


                </div>
            </header>
        </div>
    );
}

export default App;
