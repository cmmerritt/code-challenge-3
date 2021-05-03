export function capitalizeObjectKeys(object) {
  let arr = [];
  for (let key of Object.keys(object)) {
    let upperKey = key.toUpperCase();
    arr.push(upperKey);
  }
  return arr;
}

export function sortedKeys(object) {
  let keys = Object.keys(object);
  keys.sort(function(a, b) {
    return a.length - b.length;
  });
  return keys;
}

export function getFilteredKey(object) {
  let keys = Object.keys(object);
  let filteredKeys = keys.filter(key => key === 'age');
  return filteredKeys;
}

export function getArrayOfKeysAndValues(object) {
  return Object.entries(object);
}

export function sortedArraysByValuesLength(object) {
  let entries = Object.entries(object);
  let sorted = entries.sort((a, b) => b[1].length - a[1].length);
  return sorted;
}