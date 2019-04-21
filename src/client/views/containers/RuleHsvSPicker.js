import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hsvToRgb } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hsv = state.colors.colorInfo.hsv;
    return {
        width: 300,
        height: 15,
        margin: 2,
        name: 'hsv:s',
        data: hsv,
        lambda: hsv[1],
        lambdaToRgb: (lambda) => hsvToRgb([hsv[0], lambda, hsv[2]]),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHsv([data[0], lambda, data[2]])),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
