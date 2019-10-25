import { Action } from 'redux';

export type ReducerAsyncData<PhaseNames extends string, State> = {
  [phaseName in PhaseNames]?: ReducerPureFunction<State>;
};

export type ReducerData<
  State,
  ActionTypes extends string,
  PhaseNames extends string
> = {
  [actionName in ActionTypes]: ReducerAction<PhaseNames, State>;
};

type ReducerAction<PhaseNames extends string, State> =
  | ReducerPureFunction<State>
  | ReducerAsyncData<PhaseNames, State>;

type ReducerPureFunction<State> = (state: State, payload: any) => State;

const getReducerAction = <State>(
  reducerData: any,
  type: string,
  phaseSeparator: string
) => {
  const [actionType, actionPhase] = type.split(phaseSeparator);

  if (actionPhase) {
    return reducerData[actionType]
      ? (reducerData[actionType][actionPhase] as ReducerPureFunction<State>)
      : null;
  } else {
    return (reducerData[actionType] as ReducerPureFunction<State>) || null;
  }
};

export const configureReducerCreator = <PhaseNames extends string>(
  phaseSeparator: string
) => <State, ActionTypes extends string>(
  reducerData: ReducerData<State, ActionTypes, PhaseNames>,
  initialState: State
) => (
  state = initialState,
  { type, ...payload }: Action<ActionTypes>
): State => {
  const reducerAction = getReducerAction<State>(
    reducerData,
    type,
    phaseSeparator
  );

  return reducerAction ? reducerAction(state, payload) : state;
};
