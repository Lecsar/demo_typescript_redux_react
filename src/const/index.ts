export * from './keyboard';
export * from './requestStatus';
export * from './colors';
export * from './reducer';
export * from './date';
export * from './requestStatus';
export * from './agreement';
export * from './requestError';
export * from './localStorage';

export const ROUTING = 'ROUTING';

// export const ADRESS = 'https://10.1.172.93'; // для билда
export const ADRESS = 'https://178.159.249.24'; //dev url
//export const ADRESS = 'https://localhost';
//export const PORT = ':3000';
//export const PORT = ':3001';
export const PORT = ':80'; //prod port

export const ADRESS_WITH_PORT = ADRESS + PORT;

export const API_ADRESS = `${ADRESS_WITH_PORT}/api`;
export const WS_ADRESS = `${ADRESS}:8000`;
