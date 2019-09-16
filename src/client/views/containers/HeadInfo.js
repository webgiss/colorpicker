import HeadInfo from "../components/HeadInfo";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    let { source, colorInfo }  = state.colors;
    let { userRgb, userHcwb, userHsl, userHsv, color } = colorInfo;
    let title = 'Colors';
    if (source) {
        if (source.color) {
            title = color;
        }
    
        if (source.rgb) {
            title = `rgb(${userRgb[0]},${userRgb[1]},${userRgb[2]})`;
        }
    
        if (source.hcwb) {
            title = `hcwb(${userHcwb[0]},${userHcwb[1]}%,${userHcwb[2]}%,${userHcwb[3]}%)`;
        }
    
        if (source.hsl) {
            title = `hsl(${userHsl[0]},${userHsl[1]}%,${userHsl[2]}%)`;
        }
    
        if (source.hsv) {
            title = `hsv(${userHsv[0]},${userHsv[1]}%,${userHsv[2]}%)`;
        }
    }
    return {
        title,
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, HeadInfo);
