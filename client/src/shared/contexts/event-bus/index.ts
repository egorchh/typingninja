import { createContext } from 'react';
import { EventBus } from './types';

export const EventBusContext = createContext<EventBus | null>(null);
