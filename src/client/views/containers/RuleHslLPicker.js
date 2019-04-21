import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hslToRgb } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hsl = state.colors.colorInfo.hsl;
    return {
        width: 300,
        height: 15,
        margin: 2,
        name: 'hsl:l',
        data: hsl,
        lambda: hsl[2],
        lambdaToRgb: (lambda) => hslToRgb([hsl[0], hsl[1], lambda]),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHsl([data[0], data[1], lambda])),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
