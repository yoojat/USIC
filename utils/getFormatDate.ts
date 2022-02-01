export function getFormatDate(date: Date) {
  let year = date.getFullYear(); //yyyy
  let month: string | number = 1 + date.getMonth(); //M
  month = month >= 10 ? month : '0' + month; //month 두자리로 저장
  let day: string | number = date.getDate(); //d
  day = day >= 10 ? day : '0' + day; //day 두자리로 저장
  return year + ' / ' + month + ' / ' + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}
