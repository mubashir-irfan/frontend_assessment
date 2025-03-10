import dayjs from 'dayjs';

const INPUT_DATE_FORMAT = 'YYYY-MM-DD';
const OUTPUT_DATE_FORMAT = 'DD MMMM YYYY';

export const formatDate = (dateString: string): string => {
  return dayjs(dateString, INPUT_DATE_FORMAT).format(OUTPUT_DATE_FORMAT);
};

