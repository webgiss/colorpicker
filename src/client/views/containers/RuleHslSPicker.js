import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hslToRgb } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hsl = state.colors.colorInfo.hsl;
    return {
        width: 300,
        height: 12,
        margin: 2,
        name: 'hsl:s',
        data: hsl,
        lambda: hsl[1],
        lambdaToRgb: (lambda) => hslToRgb([hsl[0], lambda, hsl[2]]),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHsl([data[0], lambda, data[2]])),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
