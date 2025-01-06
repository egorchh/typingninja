import { useCallback, useMemo, useRef } from 'react';
import { EventBus, EventBusListener } from '../contexts/event-bus/types';

export const useInitEventBus = (): EventBus => {
	const listeners = useRef<EventBusListener[]>([]);

	const subscribe: EventBus['subscribe'] = useCallback((listener) => {
		listeners.current.push(listener);

		return () => {
			listeners.current = listeners.current.filter(
				(eachListener) => eachListener !== listener
			);
		};
	}, []);

	const publish: EventBus['publish'] = useCallback((event) => {
		listeners.current.forEach((listener) => {
			listener(event);
		});
	}, []);

	return useMemo(
		() => ({
			subscribe,
			publish
		}),
		[subscribe, publish]
	);
};
