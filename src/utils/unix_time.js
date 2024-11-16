
/** 
* Function for converting nanoseconds UNIX into nanoseconds
*/
export const convertUnixNanosecondsToISO = (nanoseconds) => {
  // Convert nanoseconds to milliseconds
  const milliseconds = nanoseconds / 1000000;

  // Create a new Date object using the milliseconds
  const date = new Date(milliseconds);

  // Convert the date to ISO 8601 format and return it
  return date.toISOString();
};
