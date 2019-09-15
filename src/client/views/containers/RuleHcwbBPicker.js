import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hcwbForceB, hcwbToRgb } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hcwb = state.colors.colorInfo.hcwb;
    return {
        width: 300,
        height: 12,
        margin: 2,
        name: 'b',
        data: hcwb,
        lambda: hcwb[3],
        lambdaToRgb: (lambda) => hcwbToRgb(hcwbForceB(hcwb, lambda)),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHcwb(hcwbForceB(data, lambda))),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
