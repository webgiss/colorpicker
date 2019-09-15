import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hcwbToRgb, hcwbForceH } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hcwb = state.colors.colorInfo.hcwb;
    return {
        width: 300,
        height: 12,
        margin: 2,
        name: 'h',
        data: hcwb,
        lambda: hcwb[0],
        lambdaToRgb: (lambda) => hcwbToRgb(hcwbForceH(hcwb, lambda)),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHcwb(hcwbForceH(data, lambda))),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
