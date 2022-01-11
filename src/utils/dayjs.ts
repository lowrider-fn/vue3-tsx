import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isYesterday from 'dayjs/plugin/isYesterday';
import isToday from 'dayjs/plugin/isToday';
import pluralGetSet from 'dayjs/plugin/pluralGetSet';

dayjs.extend(pluralGetSet);
dayjs.locale('ru');
dayjs.extend(customParseFormat);
dayjs.extend(isYesterday);
dayjs.extend(isToday);

const DDMMYYYY = 'DD.MM.YYYY';
const YYYYMMDDHHmmss = 'YYYY-MM-DD HH:mm:ss';
const DDMMMMYYYYhhmm = 'DD MMMM YYYY  HH:mm';
const YYYYMMDD = 'YYYY-MM-DD';

export { dayjs, DDMMYYYY, YYYYMMDDHHmmss, YYYYMMDD, DDMMMMYYYYhhmm };
