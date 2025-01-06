import { Event } from './events';

export type EventBusListener = (event: Event) => void;

export type EventBus = {
    subscribe: (listener: EventBusListener) => VoidFunction;
    publish: (event: Event) => void;
};
