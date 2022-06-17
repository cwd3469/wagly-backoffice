export function isEmptyArr(arr: string[]) {
  if (Array.isArray(arr) && arr.length === 0) {
    return false;
  }
  return true;
}
