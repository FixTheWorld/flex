/**
 * Created by changjin.zhang on 5/18/2017.
 */
import moment from 'moment';
export function formatDate(date, format = 'YYYY-MM-DD') {
    return moment(date).format(format);
}