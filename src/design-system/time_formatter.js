import React from 'react';
import Humanize from 'humanize-duration';
export const TimeFormatter = function ({timeInSeconds, color, humanize}) {
    const singleDigitToDoubleDigit = (d) => {
        return d < 10 ? "0" + d : d;
    };
    let totalSec = parseInt(timeInSeconds);
    if (totalSec < 0) {
        color = "red";
        totalSec = totalSec * -1;
    }

    let hrs = parseInt(totalSec / 3600);
    let min = parseInt((totalSec % 3600) / 60);
    let sec = parseInt((totalSec % 3600) % 60);

    if (humanize) {
        return <span style={{display: "inline-block", color: color}}>
                {Humanize(totalSec * 1000)}
            </span>
    }

    return <span style={{display: "inline-block", color: color}}>
        <span className="time-hrs">{singleDigitToDoubleDigit(hrs)}</span>
        <span className="time-sep">:</span>
        <span className="time-min">{singleDigitToDoubleDigit(min)}</span>
        <span className="time-sep">:</span>
        <span className="time-sec">{singleDigitToDoubleDigit(sec)}</span>
    </span>
}
