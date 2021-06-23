import React, {Fragment} from 'react';
import {revisarPresupuesto} from './helper'

export const ControlPresupuesto = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: € {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: € {isNaN(restante) ? 0 : restante}
            </div>
        </Fragment>
    );
};