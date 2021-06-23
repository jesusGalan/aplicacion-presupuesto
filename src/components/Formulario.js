import React, {useState} from 'react';
import Error from "./Error";
import shortid from "shortid"

export const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState('')
    const [error, guardarError] = useState(false)


    const agregarGasto = e => {
        e.preventDefault()

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false)

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        guardarNombre('')
        guardarCantidad(0)
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? (
                <Error mensaje="Ambos campos son obligatorios o el presupuesto introducido no es correcto."/>
            ) : null
            }

            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />

                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad ? cantidad : ''}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                />

            </div>
        </form>
    );
};