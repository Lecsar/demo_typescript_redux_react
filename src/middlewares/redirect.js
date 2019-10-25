import {ROUTING} from 'const';
import {history} from 'store';

export const redirect = () => next => action => {
    if (action.type === ROUTING) {
        history[action.payload.method](action.payload.nextUrl);
    }

    return next(action);
};
