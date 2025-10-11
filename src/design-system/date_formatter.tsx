import React from 'react';
import moment from 'moment'
interface DateFormatterProps {
    milliseconds: number;
}

export const DateFormatter: React.FC<DateFormatterProps> = ({milliseconds}) => {
    let dt: moment.Moment = moment(milliseconds);
    return (<span>
            {dt.format('DD/MM/YY hh:mmA')}
        </span>);
}
