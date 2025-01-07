type AbstractEvent<T extends string, Params = undefined> = {
    event: T;
} & ([Params] extends [undefined] ? { payload?: undefined } : { payload: Params });

export type BlurTextContainer = AbstractEvent<'blurTextContainer', { blur: boolean }>;

export type Event =
    | BlurTextContainer;
