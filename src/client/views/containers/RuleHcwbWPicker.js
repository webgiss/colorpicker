import actions from "../../actions";
import RulePickerLabel from "../components/RulePickerLabel";
import hot from './utils/hot';
import { hcwbForceW, hcwbToRgb } from "../../utils/colors";

const MapStateToProps = (state) => {
    let hcwb = state.colors.colorInfo.hcwb;
    return {
        width: 300,
        height: 15,
        margin: 2,
        name: 'w',
        data: hcwb,
        lambda: hcwb[2],
        lambdaToRgb: (lambda) => hcwbToRgb(hcwbForceW(hcwb, lambda)),
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        onClick: ({ data, lambda }) => dispatch(actions.colors.setHcwb(hcwbForceW(data, lambda))),
    };
};

export default hot(module, MapStateToProps, MapDispatchToProps, RulePickerLabel);
