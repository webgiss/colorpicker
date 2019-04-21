export default class ColorUrlService {
    constructor(reactReduxInit) {
        reactReduxInit.addProvider(this);
    }

    changeManager() {
        return [
            {
                name: 'Change url on new color selected',
                getValue: (state) => state.colors.colorInfo.url,
                onNewValue: (currentValue, previousValue, currentState, { history }) => {
                    if (history.location !== currentValue) {
                        history.push(currentValue);
                    }
                }
            },
            {
                name: 'Change url on non canonic new url',
                getValue: (state) => state.router.location.pathname,
                onNewValue: (currentValue, previousValue, currentState, { history }) => {
                    let url = currentState.colors.colorInfo.url;
                    if (url !== currentValue) {
                        history.push(url);
                    }
                }
            },
        ];

    }
}