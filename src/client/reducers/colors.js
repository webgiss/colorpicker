import { SET_RGB, SET_HCWB, SET_CWB, SET_HUE, SET_HSL, SET_HSV } from "../constants/colors";
import { colorToRgb, rgbToColor } from "../utils/colors";
import { normalizeRgb, normalizeHcwb, normalizeHxx } from "../utils/colors";
import { getRoundedRgb, getRoundedHxx } from "../utils/colors";
import { rgbToHcwb, rgbToHsl, rgbToHsv } from "../utils/colors";
import { hcwbToRgb, hcwbToHsl, hcwbToHsv } from "../utils/colors";
import { hslToRgb, hslToHcwb, hslToHsv } from "../utils/colors";
import { hsvToRgb, hsvToHcwb, hsvToHsl } from "../utils/colors";
import { LOCATION_CHANGE } from "../constants/router";

const initialState = {
    source: null,
    colorInfo: {
        rgb: [0, 0, 0],
        hcwb: [0, 0, 0, 1],
        color: '#000000',
        url: '/',
        hsl: [0, 0, 0],
        hsv: [0, 0, 0],
        userRgb: [0, 0, 0],
        userHcwb: [0, 0, 0, 100],
        userHsl: [0, 0, 0],
        userHsv: [0, 0, 0],
    },
};

const getUrlFromSource = (source, color, rgb, hcwb, hsl, hsv) => {
    if (!source) {
        return '/';
    }

    if (source.color) {
        return '/color/' + color.slice(1);
    }

    if (source.rgb) {
        return '/rgb/' + getRoundedRgb(rgb).join('/');
    }

    if (source.hcwb) {
        return '/hcwb/' + getRoundedHxx(hcwb).join('/');
    }

    if (source.hsl) {
        return '/hsl/' + getRoundedHxx(hsl).join('/');
    }

    if (source.hsv) {
        return '/hsv/' + getRoundedHxx(hsv).join('/');
    }
}

const getColorInfo = ({ source, rgb, hcwb, hsl, hsv }) => {
    let color = rgbToColor(rgb);
    let userRgb = getRoundedRgb(rgb);
    let userHcwb = getRoundedHxx(hcwb);
    let userHsl = getRoundedHxx(hsl);
    let userHsv = getRoundedHxx(hsv);

    // console.log({ source, rgb, hcwb, hsl, userRgb, userHcwb, userHsl })
    let url = getUrlFromSource(source, color, rgb, hcwb, hsl, hsv);
    return { rgb, hcwb, hsl, hsv, userRgb, userHcwb, userHsl, userHsv, color, url };
}

const updateFromSource = (source) => {
    let rgb = null;
    let hcwb = null;
    let hsl = null;
    let hsv = null;

    if (!source) {
        return { source: initialState.source, colorInfo: initialState.colorInfo };
    }

    if (source.color) {
        rgb = colorToRgb(source.color);
        hcwb = rgbToHcwb(rgb);
        hsl = rgbToHsl(rgb);
        hsv = rgbToHsv(rgb);

        let colorInfo = getColorInfo({ source, rgb, hcwb, hsl, hsv });
        return { source, colorInfo };
    }

    if (source.rgb) {
        rgb = normalizeRgb(source.rgb);
        hcwb = rgbToHcwb(rgb);
        hsl = rgbToHsl(rgb);
        hsv = rgbToHsv(rgb);

        let colorInfo = getColorInfo({ source, rgb, hcwb, hsl, hsv });
        return { source, colorInfo };
    }

    if (source.hcwb) {
        hcwb = normalizeHcwb(source.hcwb);
        rgb = hcwbToRgb(hcwb);
        hsl = hcwbToHsl(hcwb);
        hsv = hcwbToHsv(hcwb);

        let colorInfo = getColorInfo({ source, rgb, hcwb, hsl, hsv });
        return { source, colorInfo };
    }

    if (source.hsl) {
        hsl = normalizeHxx(source.hsl);
        rgb = hslToRgb(hsl);
        hcwb = hslToHcwb(hsl);
        hsv = hslToHsv(hsl);

        let colorInfo = getColorInfo({ source, rgb, hcwb, hsl, hsv });
        return { source, colorInfo };
    }

    if (source.hsv) {
        hsv = normalizeHxx(source.hsv);
        rgb = hsvToRgb(hsv);
        hcwb = hsvToHcwb(hsv);
        hsl = hsvToHsl(hsv);

        let colorInfo = getColorInfo({ source, rgb, hcwb, hsl, hsv });
        return { source, colorInfo };
    }

    return { source: initialState.source, colorInfo: initialState.colorInfo };
}

export default (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case LOCATION_CHANGE:
            {
                let url = action.payload.location.pathname;
                if (url !== state.colorInfo.url) {
                    let urlParts = url.split('/');
                    if (urlParts.length >= 2) {
                        switch (urlParts[1]) {
                            case 'rgb':
                                {
                                    let newRgb = urlParts.slice(2).map((x) => Number.parseInt(x) / 255);
                                    let { source, colorInfo } = updateFromSource({ rgb: newRgb });
                                    state = { ...state, source, colorInfo };
                                    break;
                                }
                            case 'hcwb':
                                {
                                    let newHcwb = [Number.parseInt(urlParts[2]) / 360, ...(urlParts.slice(3).map((x) => Number.parseInt(x) / 100))];
                                    let { source, colorInfo } = updateFromSource({ hcwb: newHcwb });
                                    state = { ...state, source, colorInfo };
                                    break;
                                }
                            case 'hsl':
                                {
                                    let newHsl = [Number.parseInt(urlParts[2]) / 360, ...(urlParts.slice(3).map((x) => Number.parseInt(x) / 100))];
                                    let { source, colorInfo } = updateFromSource({ hsl: newHsl });
                                    state = { ...state, source, colorInfo };
                                    break;
                                }
                            case 'hsv':
                                {
                                    let newHsv = [Number.parseInt(urlParts[2]) / 360, ...(urlParts.slice(3).map((x) => Number.parseInt(x) / 100))];
                                    let { source, colorInfo } = updateFromSource({ hsv: newHsv });
                                    state = { ...state, source, colorInfo };
                                    break;
                                }
                            case 'color':
                                {
                                    let color = urlParts[2];
                                    let protoSource = { color };
                                    let { source, colorInfo } = updateFromSource(protoSource);
                                    state = { ...state, source, colorInfo };
                                    break;
                                }
                            default:
                                {
                                    let color = urlParts[1];
                                    let rgb = colorToRgb(color);
                                    if (rgb) {
                                        let protoSource = { color };
                                        let { source, colorInfo } = updateFromSource(protoSource);
                                        state = { ...state, source, colorInfo };
                                        break;
                                    }
                                }
                        }
                    }
                }
                break;
            }
        case SET_RGB:
            {
                let protoSource = { rgb: action.rgb };
                let { source, colorInfo } = updateFromSource(protoSource);
                state = { ...state, source, colorInfo };
                break;
            }
        case SET_HCWB:
            {
                let protoSource = { hcwb: action.hcwb };
                let { source, colorInfo } = updateFromSource(protoSource);
                state = { ...state, source, colorInfo };
                break;
            }
        case SET_CWB:
            {
                let protoSource = { hcwb: [state.hcwb[0], ...action.cwb] };
                let { source, colorInfo } = updateFromSource(protoSource);
                state = { ...state, source, colorInfo };
                break;
            }
        case SET_HUE:
            {
                let { hue } = action;
                let [h, c, w, b] = state.colorInfo.hcwb;
                let { source, colorInfo } = updateFromSource({ hcwb: [hue, c, w, b] })
                state = { ...state, source, colorInfo };
                break;
            }
        case SET_HSL:
            {
                let protoSource = { hsl: action.hsl };
                let { source, colorInfo } = updateFromSource(protoSource);
                state = { ...state, source, colorInfo };
                break;
            }
        case SET_HSV:
            {
                let protoSource = { hsv: action.hsv };
                let { source, colorInfo } = updateFromSource(protoSource);
                state = { ...state, source, colorInfo };
                break;
            }
    }

    window.state = state;

    return state;
};

