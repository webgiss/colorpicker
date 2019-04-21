import RgbInfo from "../components/RgbInfo";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    let { userRgb, userHcwb, userHsl, userHsv, color } = state.colors.colorInfo;
    color = color || '';
    return {
        rgb: userRgb,
        hcwb: userHcwb,
        hsl: userHsl,
        hsv: userHsv,
        color,
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RgbInfo);
