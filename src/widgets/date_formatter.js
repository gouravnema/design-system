import React from 'react';
import moment from 'moment'
export const DateFormatter = function ({milliseconds}) {
    let dt = new Date(milliseconds);
    dt = moment(dt);
    return (<span>
            {dt.format('DD/MM/YY hh:mmA')}
        </span>);
}