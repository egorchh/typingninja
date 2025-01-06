import { useContext } from 'react';
import { EventBusContext } from '../contexts/event-bus';

export const useEventBus = () => {
	const eventBus = useContext(EventBusContext);

	if (eventBus === null) {
		const message = `Couldn't find eventBus in the context.
        Make sure that component with DeliveryMap is inside withYMaps wrapper`;

		throw new Error(message);
	}

	return eventBus;
};
