import { MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from '../constants';

export const getHoursMinutesSecondsFromMilliseconds = ({ millisecondsQuantity }) => ({
  hours: Math.floor((millisecondsQuantity / MILLISECONDS_IN_SECOND / SECONDS_IN_MINUTE / MINUTES_IN_HOUR)),
  minutes: Math.floor((millisecondsQuantity / MILLISECONDS_IN_SECOND / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR),
  seconds: Math.floor((millisecondsQuantity / MILLISECONDS_IN_SECOND) % SECONDS_IN_MINUTE),
});
