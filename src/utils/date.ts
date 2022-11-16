// Internal dependencies
import { DAY, HOUR, MINUTE, SECOND } from "../constants/date";

// calculate days from time(ms)
export const getDays = (timeInMsec: number) => {
    return Math.floor(timeInMsec / DAY);
};

// calculate hours from time(ms)
export const getHours = (timeInMsec: number) => {
    return Math.floor((timeInMsec % DAY) / HOUR);
};

// calculate minutes from time(ms)
export const getMinutes = (timeInMsec: number) => {
    return Math.floor((timeInMsec % HOUR) / MINUTE);
};

// calculate seconds from time(ms)
export const getSeconds = (timeInMsec: number) => {
    return Math.floor((timeInMsec % MINUTE) / SECOND);
};

// convert datetime to local format
export const getLocalString = (timeInMsec: number) => {
    const date = new Date(timeInMsec);
    return `${date.getUTCDate()}/${
        date.getUTCMonth() + 1
    }/${date.getUTCFullYear()} at ${date.getUTCHours()}:${date.getUTCMinutes()} UTC`;
};
