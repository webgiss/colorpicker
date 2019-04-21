import React from 'react';
import hot from './utils/hot';
import { getRoundedRgb, getRoundedHxx, getRoundedHue, normalizeHcwb, TriangleWeightToXY } from '../../utils/colors';
import { xyToRingHue, xyToTriangleWeight } from '../../utils/colors';
import { rgbToColor, hcwbToRgb } from '../../utils/colors';

const getColorTriangle = ({ x, y }, { hue, width })  => {
    let cwb = xyToTriangleWeight(x, y, width);
    if (cwb) {
        let [c, w, b] = cwb;
        let hcwb = [hue, c, w, b];
        let rgb = hcwbToRgb(hcwb);
        c = rgbToColor(rgb);
        return { c, rgb, hcwb };
    }
    return null;
}

const getColorCircle = ({ x, y},{ hue, width })  => {
    let hrgb = xyToRingHue([x, y, width, 0.8, 0.9, hue]);
    if (hrgb) {
        let [h, rgb] = hrgb;
        let c = rgbToColor(rgb);
        return { c, h, rgb };
    }
    return null;
}

const getColorCursor = ({ x, y }, { cursorRgbColor, x0, y0 })  => {
    let d2 = (x - x0) * (x - x0) + (y - y0) * (y - y0);
    if (d2 <= 7 && d2 >= 3) {
        let rgb = cursorRgbColor;
        return { rgb };
    }
}

const onClickCircle = (data, onHueClick) => {
    onHueClick({ ...data, rgb: getRoundedRgb(data.rgb), _rgb: data.rgb, h: getRoundedHue(data.h), _h: data.h });
}

const onClickTriangle = (data, onColorClick) => {
    onColorClick({ ...data, rgb: getRoundedRgb(data.rgb), _rgb: data.rgb, hcwb: getRoundedHxx(data.hcwb), _hcwb: data.hcwb });
}

const putPixel = (context, x, y, data) => {
    let { c, rgb } = data;
    if (c === undefined && rgb !== undefined) {
        c = rgbToColor(rgb);
    }
    if (c !== undefined) {
        context.fillStyle = c;
        context.fillRect(x, y, 1, 1);
    }
}



class TrianglePickerX extends React.Component {
    componentDidMount() {
        this.updateCanvasX();
    }

    componentDidUpdate() {
        this.updateCanvasX();
    }

    get globalData() {
        let { hue, c, w, b, width } = this.props;
        let hcwb = normalizeHcwb([hue, c, w, b]);
        let cursorRgbColor = [1, 1, 1];
        let rgb = hcwbToRgb(hcwb);
        if (rgb[0] + rgb[1] + rgb[2] > 1.5) {
            cursorRgbColor = [0, 0, 0];
        }
        let [x0, y0] = TriangleWeightToXY(hcwb[1], hcwb[2], hcwb[3], width);

        return { cursorRgbColor, x0, y0 };
    }

    onClick(e) {
        const canvas = this.refs.canvas;
        const rect = canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left);
        const y = (event.clientY - rect.top);
        this.onClickPixels(x, y);
    }

    onClickPixels(x, y) {
        let handled = false;
        let data = null;
        let inputData = { x, y };
        let globalData = { ...this.props, ...this.globalData };
        data = getColorTriangle(inputData, globalData);
        if (data) {
            onClickTriangle(data, this.props.onColorClick);
        } else {
            data = getColorCircle(inputData, globalData);
            onClickCircle(data, this.props.onHueClick);
        }
    }

    updateCanvasX() {
        let { width, background } = this.props;
        let height = width;

        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');

        if (canvas.width !== width) {
            canvas.width = width;
        }

        if (canvas.height !== height) {
            canvas.height = height;
        }

        if (background === undefined) {
            background = '#000000';
        }

        context.fillStyle = background;
        context.fillRect(0, 0, width, height);

        let globalData = { ...this.props, ...this.globalData };

        let y=0;

        while (y < height) {
            let x=0;
            while (x < width) {
                let data = null;
                let inputData = { x, y };

                data = getColorCursor(inputData, globalData);
                if (data) {
                    putPixel(context, x, y, data);
                } else {
                    data = getColorTriangle(inputData, globalData);
                    if (data) {
                        putPixel(context, x, y, data);
                    } else {
                        data = getColorCircle(inputData, globalData);
                        if (data) {
                            putPixel(context, x, y, data);
                        }
                    }
                }
                x++;
            }
            y++;
        }
        // [...Array(height).keys()].forEach(y => {
        //     [...Array(width).keys()].forEach(x => {
        //     });
        // });
    }

    render() {
        return <canvas ref='canvas' onClick={(e) => this.onClick(e)}></canvas>;
    }
}

export default hot(module, TrianglePickerX);
