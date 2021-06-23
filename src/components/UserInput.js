import React, {Fragment, useState} from "react";
import Error from './Error'


export const UserInput = ({guardarPresupuesto, guardarRestante, actualizarUserInput}) => {

    const [cantidad, guardarCantidad] = useState(0);
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value))
    }

    const [error, guardarError] = useState(false)

    const rellenarPresupuesto = e => {
        e.preventDefault() // Evita incluir el estado predeterminado

        if (cantidad < 1) {
            guardarError(true);
            return;
        }

        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarUserInput(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form onSubmit={rellenarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Escribe tu presupuesto"
                    onChange={definirPresupuesto}
                />
            </form>
        </Fragment>
    )
}