export default function getColor() {
  const names = {
    aqua: '#0ff',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    black: '#000',
    blue: '#00f',
    brown: '#a52a2a',
    cyan: '#0ff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgrey: '#a9a9a9',
    darkgreen: '#006400',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkviolet: '#9400d3',
    fuchsia: '#f0f',
    gold: '#ffd700',
    green: '#008000',
    indigo: '#4b0082',
    khaki: '#f0e68c',
    lightblue: '#add8e6',
    lightcyan: '#e0ffff',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightyellow: '#ffffe0',
    lime: '#0f0',
    magenta: '#f0f',
    maroon: '#800000',
    navy: '#000080',
    olive: '#808000',
    orange: '#ffa500',
    pink: '#ffc0cb',
    purple: '#800080',
    violet: '#800080',
    red: '#f00',
    silver: '#c0c0c0',
    white: '#fff',
    yellow: '#ff0',
  };

  let result;
  let count = 0;
  Object.values(names).forEach(color => {
    // eslint-disable-next-line no-cond-assign
    if (Math.random() < 1 / (count += 1)) {
      result = color;
    }
  });
  return result;
}
