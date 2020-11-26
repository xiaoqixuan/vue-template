import 'datejs';

export {};

declare global {
  interface Date {
    format: (pattern: string) => string;
    getTimeZone: () => string;
    add: (part: string, v: number) => void;
    addYears: (v: string) => void;
    addMonths: (v: string) => void;
    addDays: (v: string) => void;
    addHours: (v: string) => void;
    dateDiff: (interval, date) => number;
  }
}

Date.prototype.format = function (pattern: string): string {
  let format: string | any = pattern;

  if (isNaN(this.getMonth())) return '';

  const o: { [key: string]: number } = {
    'm+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'M+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };

  if (/(Y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      `${this.getFullYear()}`.substr(4 - RegExp.$1.length),
    );
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
      );
    }
  }

  return format;
};

Date.prototype.getTimeZone = function (): string {
  const offset: number = this.getTimezoneOffset();
  const o: number = Math.abs(offset);

  return `${offset < 0 ? '+' : '-'}${`00${Math.floor(o / 60)}`.slice(
    -2,
  )}:${`00${o % 60}`.slice(-2)}`;
};

Date.prototype.add = function (part: string, v: number) {
  let value = v;
  value *= 1;

  if (isNaN(value)) {
    value = 0;
  }

  switch (part) {
    case 'y':
      this.setFullYear(this.getFullYear() + value);
      break;
    case 'm':
      this.setMonth(this.getMonth() + value);
      break;
    case 'd':
      this.setDate(this.getDate() + value);
      break;
    case 'h':
      this.setHours(this.getHours() + value);
      break;
    case 'n':
      this.setMinutes(this.getMinutes() + value);
      break;
    case 's':
      this.setSeconds(this.getSeconds() + value);
      break;
    default:
  }
};

export const moveDate = function (datetime, y, m, d, h) {
  let time = datetime;

  if (typeof datetime === 'string') {
    time = datetime.replace(/-/g, '/');
  }

  const date = new Date(time);
  date.addYears(y);
  date.addMonths(m);
  date.addDays(d);
  date.addHours(h);
  return date;
};

Date.prototype.dateDiff = function (interval, date): number {
  const long = this.getTime() - date.getTime();

  switch (interval.toLowerCase()) {
    case 'y':
      return Math.floor(this.getFullYear() - date.getFullYear());
    case 'm':
      return Math.floor(
        (this.getFullYear() - date.getFullYear()) * 12 +
          (this.getMonth() - date.getMonth()),
      );
    case 'd':
      return Math.floor(long / 1000 / 60 / 60 / 24);
    case 'w':
      return Math.floor(long / 1000 / 60 / 60 / 24 / 7);
    case 'h':
      return Math.floor(long / 1000 / 60 / 60);
    case 'n':
      return Math.floor(long / 1000 / 60);
    case 's':
      return Math.floor(long / 1000);
    case 'l':
      return Math.floor(long);
    default:
      return undefined;
  }
};
