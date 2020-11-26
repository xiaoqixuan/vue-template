import Cookie from 'js-cookie';

const padLeftZero = (str) => {
  return `00${str}`.substr(str.length);
};

export function formatNumber(value: number, len: number): string {
  return (value).toFixed(len);
}

export function formatDate(value, fmt = 'yyyy-MM-dd hh:mm'): string {
  const date = new Date(parseFloat(value));
  let fmtDate = fmt;
  if (/(y+)/.test(fmtDate)) {
    fmtDate = fmtDate.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmtDate)) {
      const str = `${o[k]}`;
      fmtDate = fmtDate.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmtDate;
}

// 本地化时间
export function localDate(value): any {
  const timeList = formatDate(value).split(' ');
  const dateList = timeList[0].split('-');
  return {
    year: dateList[0],
    month: dateList[1],
    day: dateList[2],
    time: timeList[1],
  };
}

// 转化千分位
export function setThousandth(val: any): string {
  const lang = Cookie.get('lang');
  if (!val) {
    return '0';
  }
  if (lang !== 'pt-BR') {
    return val && val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const tVal = val && val.toString().replace(/\./g, ',');
  return tVal && tVal.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
