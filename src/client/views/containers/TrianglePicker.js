import actions from "../../actions";
import TrianglePicker from "../components/TrianglePicker";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    let hcwb = state.colors.colorInfo.hcwb;
    return {
        width: 300,
        hue: hcwb[0],
        c: hcwb[1],
        w: hcwb[2],
        b: hcwb[3],
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onHueClick: ({ _h, _rgb }) => dispatch(actions.colors.setHue(_h)),
        onColorClick: ({ c, _rgb }) => dispatch(actions.colors.setRgb(_rgb)),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, TrianglePicker);
