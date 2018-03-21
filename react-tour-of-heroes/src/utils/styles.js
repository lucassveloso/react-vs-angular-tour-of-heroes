import { css } from 'styled-components';

export const theme = {
  colors: {
    azure: '#369',
    tundora: '#444',
    gray: '#888',
    gallery: '#eee',
    lynch: '#607D8B',
    cerulean: '#039be5',
    geyser: '#CFD8DC',
    red: '#FF0000'
  },
  font: {
    default: 'Arial, Helvetica, sans-serif',

    tiny: '12px',
    small: '14px',
    base: '16px',
    medium: '18px',
    large: '24px',
    extraLarge: '40px',

    light: '300',
    normal: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
  border: {
    width: '1px',
    radius: '4px',
  },
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  },
};

export const mixins = {
  center(orientation) {
    let top = '50%';
    let left = '50%';
    let translate = '-50%, -50%';

    if (orientation === 'vertical') {
      left = 'auto';
      translate = '0, -50%';
    } else if (orientation === 'horizontal') {
      top = 'auto';
      translate = '-50%, 0';
    }

    return `
      top: ${top};
      left: ${left};
      transform: translate(${translate});
    `;
  },
  breakpoint(name, breakpoints = theme.breakpoints) {
    const px = breakpoints[name];
    const ems = px / 16;

    if (px === 0) return (...args) => css(...args);

    return (...args) => css`@media (max-width: ${ems}em) {
      ${css(...args)}
    }`;
  },
};
