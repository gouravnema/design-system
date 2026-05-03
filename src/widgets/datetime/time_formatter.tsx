import React from 'react';
import Humanize from 'humanize-duration';
export interface TimeFormatterProps {
    timeInSeconds: number;
    color?: string;
    humanize?: boolean;
}

export const TimeFormatter: React.FC<TimeFormatterProps> = ({timeInSeconds, color, humanize}) => {
    const singleDigitToDoubleDigit = (d: number): string => {
        return d < 10 ? "0" + d : String(d);
    };
    let totalSec = Math.floor(timeInSeconds);
    let displayColor = color;

    if (totalSec < 0) {
        displayColor = "red";
        totalSec = totalSec * -1;
    }

    let hrs = Math.floor(totalSec / 3600);
    let min = Math.floor((totalSec % 3600) / 60);
    let sec = Math.floor((totalSec % 3600) % 60);

    if (humanize) {
        return (
            <span style={{display: "inline-block", color: displayColor}}>
                {Humanize(totalSec * 1000)}
            </span>
        );
    }

    return (
        <span style={{display: "inline-block", color: displayColor}}>
            <span className="time-hrs">{singleDigitToDoubleDigit(hrs)}</span>
            <span className="time-sep">:</span>
            <span className="time-min">{singleDigitToDoubleDigit(min)}</span>
            <span className="time-sep">:</span>
            <span className="time-sec">{singleDigitToDoubleDigit(sec)}</span>
        </span>
    );
}
