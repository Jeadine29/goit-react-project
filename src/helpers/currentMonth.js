import { endOfMonth, format, startOfMonth } from 'date-fns';

export function currentMonth() {
  const currentDate = new Date();
  const firstDayOfMonth = format(startOfMonth(currentDate), 'yyyy-MM-dd');
  const lastDayOfMonth = format(endOfMonth(currentDate), 'yyyy-MM-dd');

  return { firstDayOfMonth, lastDayOfMonth };
}