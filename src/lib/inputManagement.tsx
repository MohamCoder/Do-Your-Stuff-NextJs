export function sanitizeInput(min: number, max: number, target: HTMLInputElement) {
  const value = target.value;
  if (
    Number(value) > max ||
    Number(value) < min ||
    Number.isNaN(Number(value))
  ) {
    target.value = min.toString();
    return min;
  }
  //to remove zeros from the start
  target.value = Number(value).toString();
  return Number(value);
}

export function convertDeadlineToDate(deadline: number[]) {
  const hour = deadline[0];
  const minute = deadline[1];
  const amPm = deadline[2];

  const isPM = amPm === 1;
  const date = new Date();
  const todoHours = isPM ? hour + 12 : hour;
  const tododMinutes = minute;

  if (
    date.getHours() > todoHours ||
    (date.getHours() === todoHours && date.getMinutes() > tododMinutes)
  ) {
    date.setDate(date.getDate() + 1);
  }

  date.setHours(todoHours);
  date.setMinutes(tododMinutes);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
}

export function convertDateToDeadline(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 1 : 0;
  if (hours === 12) {
    return [12, minutes, amPm];
  }
  if (hours > 12) {
    return [hours - 12, minutes, amPm];
  }
  return [hours, minutes, amPm];
}
