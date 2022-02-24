export default function (count: number, unit_per_page: number) {
  const fullPageNumber = Math.ceil(count / unit_per_page);
  const result = [...Array(fullPageNumber)].map((_, index) => index + 1);
  return result;
}
