import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    let rgb = state.colors.colorInfo.rgb;
    return {
        width: 300,
        height: 15,
        margin: 2,
        name: 'G',
        lambda: rgb[1],
        lambdaToRgb: (lambda) => [rgb[0], lambda, rgb[2]],
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ rgb }) => dispatch(actions.colors.setRgb(rgb)),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
