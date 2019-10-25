export const PHASE_SEPARATOR = '::';
export const PHASE_REQUEST = 'REQUEST';
export const PHASE_SUCCESS = 'SUCCESS';
export const PHASE_ERROR = 'ERROR';

export type AsyncPhaseNames =
  | typeof PHASE_REQUEST
  | typeof PHASE_SUCCESS
  | typeof PHASE_ERROR;

export interface SuccessActionData<Data> {
  response: Data;
}

export interface RequestErrorData<T = string | boolean> {
  error: T;
}
