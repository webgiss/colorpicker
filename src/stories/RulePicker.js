import React from 'react';
import { storiesOf } from '@storybook/react';
import RulePicker from '../client/views/components/RulePicker';
import RulePickers from '../client/views/components/RulePickers';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, object } from '@storybook/addon-knobs/react';
import { hcwbToRgb, rgbToHcwb, hcwbForceB, hcwbForceC, hcwbForceH, hcwbForceW } from '../client/utils/colors';
// import '../client/views/main.css';

const def = {
    rgb: [0.62, 0.88, 0.5],
    width: 300,
    height: 15,
    margin: 2,
    onClick: ({ rgb, lambda, c }) => action('onClick')(lambda, JSON.stringify(rgb), c),
};


def.r = def.rgb[0];
def.g = def.rgb[1];
def.b = def.rgb[2];

def.hcwb = rgbToHcwb(def.rgb);

def.h = def.hcwb[0];
def.c = def.hcwb[1];
def.w = def.hcwb[2];
def.b = def.hcwb[3];

storiesOf('RulePicker', module)
    .addDecorator(withKnobs)
    .add('rgb : r', () => {
        return <RulePicker
            lambda={0.233}
            lambdaToRgb={(lambda) => [lambda, 0.76, 0]}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('rgb : g', () => {
        return <RulePicker
            lambda={0.233}
            lambdaToRgb={(lambda) => [0.76, lambda, 0.1]}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('rgb : b', () => {
        return <RulePicker
            lambda={0.333}
            lambdaToRgb={(lambda) => [0.85, 0.3, lambda]}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('rgb', () => {
        return <RulePickers>
            <RulePicker
                lambda={def.r}
                lambdaToRgb={(lambda) => [lambda, def.g, def.b]}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
            <RulePicker
                lambda={def.g}
                lambdaToRgb={(lambda) => [def.r, lambda, def.b]}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
            <RulePicker
                lambda={def.b}
                lambdaToRgb={(lambda) => [def.r, def.g, lambda]}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
        </RulePickers>;
    })
    .add('hcwb : h', () => {
        return <RulePicker
            lambda={def.h}
            lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceH(def.hcwb, lambda))}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('hcwb : c', () => {
        return <RulePicker
            lambda={def.c}
            lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceC(def.hcwb, lambda))}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('hcwb : w', () => {
        return <RulePicker
            lambda={def.w}
            lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceW(def.hcwb, lambda))}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('hcwb : b', () => {
        return <RulePicker
            lambda={def.b}
            lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceB(def.hcwb, lambda))}
            width={def.width}
            height={def.height}
            margin={def.margin}
            onClick={def.onClick}
        />;
    })
    .add('hcwb', () => {
        return <RulePickers>
            <RulePicker
                lambda={def.h}
                lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceH(def.hcwb, lambda))}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
            <RulePicker
                lambda={def.c}
                lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceC(def.hcwb, lambda))}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
            <RulePicker
                lambda={def.w}
                lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceW(def.hcwb, lambda))}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
            <RulePicker
                lambda={def.b}
                lambdaToRgb={(lambda) => hcwbToRgb(hcwbForceB(def.hcwb, lambda))}
                width={def.width}
                height={def.height}
                margin={def.margin}
                onClick={def.onClick}
            />
        </RulePickers>;
    })
