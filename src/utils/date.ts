import { format, isToday, isYesterday } from 'date-fns';

export function formattedDate(date: string): string {
  const messageDate = new Date(date);
  if (isToday(messageDate)) {
    return format(messageDate, 'HH:mm');
  } else if (isYesterday(messageDate)) {
    return `Ontem, ${format(messageDate, 'HH:mm')}`;
  } else {
    return format(messageDate, 'dd/MM/yyyy HH:mm');
  }
}
