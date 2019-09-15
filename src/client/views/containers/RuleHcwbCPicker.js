import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hcwbToRgb, hcwbForceC } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hcwb = state.colors.colorInfo.hcwb;
    return {
        width: 300,
        height: 12,
        margin: 2,
        name: 'c',
        data: hcwb,
        lambda: hcwb[1],
        lambdaToRgb: (lambda) => hcwbToRgb(hcwbForceC(hcwb, lambda)),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHcwb(hcwbForceC(data, lambda))),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
