import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hsvToRgb } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hsv = state.colors.colorInfo.hsv;
    return {
        width: 300,
        height: 12,
        margin: 2,
        name: 'hsv:v',
        data: hsv,
        lambda: hsv[2],
        lambdaToRgb: (lambda) => hsvToRgb([hsv[0], hsv[1], lambda]),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHsv([data[0], data[1], lambda])),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
