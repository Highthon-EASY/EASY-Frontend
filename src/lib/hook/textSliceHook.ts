export function TestSlice(txt: string) {
  let len = 16;
  if (txt.length > len) {
    txt = txt.substr(0, len) + " ...";
  }
  return txt;
}
