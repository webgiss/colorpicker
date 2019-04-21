import { SET_RGB, SET_HCWB, SET_CWB, SET_HUE, SET_HSL, SET_HSV } from '../constants/colors';

export const setRgb = (rgb) => ({ type: SET_RGB, rgb });
export const setHcwb = (hcwb) => ({ type: SET_HCWB, hcwb });
export const setCwb = (cwb) => ({ type: SET_CWB, cwb });
export const setHue = (hue) => ({type: SET_HUE, hue});
export const setHsl = (hsl) => ({type: SET_HSL, hsl});
export const setHsv = (hsv) => ({type: SET_HSV, hsv});
