export default function fixPhones(number) {
  let str = number;
  if (/^[8][\s-(]/.test(str)) {
    str = str.replace(/^[8]/, '+7');
  }
  str = str.replace(/[-()\s]/g, '');
  return str;
}
