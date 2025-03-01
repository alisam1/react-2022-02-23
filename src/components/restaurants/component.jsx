import { useState, useMemo } from 'react';

import {Restaurant} from '../restaurant/component';
import {Tabs} from '../tabs/component';

export function Restaurants({ restaurants }) {
    const [activeId, setActiveId] = useState(restaurants[0].id);
    const tabs = useMemo(
        () => restaurants.map(({ id, name }) => ({ id, label: name })),
        [restaurants]
    );
    const activeRestaurant = useMemo(
        () => restaurants.find((restaurant) => restaurant.id === activeId),
        [activeId, restaurants]
    );

    return (
        <div>
            <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
            <Restaurant restaurant={activeRestaurant} />
        </div>
    );
}