import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    let rgb = state.colors.colorInfo.rgb;
    return {
        width: 300,
        height: 12,
        margin: 2,
        name: 'R',
        lambda: rgb[0],
        lambdaToRgb: (lambda) => [lambda, rgb[1], rgb[2]],
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ rgb }) => dispatch(actions.colors.setRgb(rgb)),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
