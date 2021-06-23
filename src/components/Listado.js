import React from 'react';
import {Gasto} from './Gasto'
import shortid from 'shortid'

export const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
            gasto.nombre && gasto.cantidad ? <Gasto
                key={shortid.generate()}
                gasto={gasto}
            /> : null
        ))}
    </div>
)