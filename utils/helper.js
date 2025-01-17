
import moment from 'moment';

export const formatDate = (date) => {
    return date ? moment(date).format('YYYY-MM-DD') : ''; // Returns formatted date or empty string if date is falsy
  };