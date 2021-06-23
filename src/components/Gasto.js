import React from 'react';

export const Gasto = ({gasto}) => (

    <li className="gastos">
        <p>
            {gasto.nombre.charAt(0).toUpperCase() + gasto.nombre.slice(1)}
            <span className="gasto">€ {gasto.cantidad}</span>
        </p>
    </li>

)