import hot from './utils/hot';
import CanvasByPixel from './CanvasByPixel';
import { getRoundedRgb, getRoundedHxx, getRoundedHue, normalizeHcwb, TriangleWeightToXY } from '../../utils/colors';
import { xyToRingHue, xyToTriangleWeight } from '../../utils/colors';
import { rgbToColor, hcwbToRgb } from '../../utils/colors';

class TrianglePicker extends CanvasByPixel {
    constructor() {
        super();
        this.functions = [
            {
                getColor: (x, y, { hue, width }) => {
                    let hrgb = xyToRingHue([x, y, width, 0.8, 0.9, hue]);
                    if (hrgb) {
                        let [h, rgb] = hrgb;
                        let c = rgbToColor(rgb);
                        return { c, h, rgb };
                    }
                    return null;
                },
                onClick: (data) => this.props.onHueClick({ ...data, rgb: getRoundedRgb(data.rgb), _rgb: data.rgb, h: getRoundedHue(data.h), _h: data.h }),
            },
            {
                getColor: ( x, y, { hue, width }) => {
                    let cwb = xyToTriangleWeight(x, y, width);
                    if (cwb) {
                        let [c, w, b] = cwb;
                        let hcwb = [hue, c, w, b];
                        let rgb = hcwbToRgb(hcwb);
                        c = rgbToColor(rgb);
                        return { c, rgb, hcwb };
                    }
                    return null;
                },
                onClick: (data) => {
                    this.props.onColorClick({ ...data, rgb: getRoundedRgb(data.rgb), _rgb: data.rgb, hcwb: getRoundedHxx(data.hcwb), _hcwb: data.hcwb });
                }
            },
            {
                getColor: ( x, y, { width, cursorRgbColor, x0, y0 }) => {
                    let d2 = (x-x0)*(x-x0)+(y-y0)*(y-y0);
                    if (d2 <= 7 && d2 >= 3)
                    {
                        let rgb = cursorRgbColor;
                        return {rgb};
                    }
                },
                onClick: () => { },
                noClick: true,
            }
        ];
    }
    get globalData() {
        let { hue, c, w, b, width } = this.props;
        let hcwb = normalizeHcwb([hue, c, w, b]);
        let cursorRgbColor = [1, 1, 1];
        let rgb = hcwbToRgb(hcwb);
        if (rgb[0] + rgb[1] + rgb[2] > 1.5) {
            cursorRgbColor = [0, 0, 0];
        }
        let [x0,y0] = TriangleWeightToXY(hcwb[1],hcwb[2],hcwb[3],width);

        return { cursorRgbColor, x0, y0 };

    }
    get height() {
        return this.props.width;
    }
}

export default hot(module, TrianglePicker);
