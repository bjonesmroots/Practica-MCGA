import {createStore} from 'redux'

const initialStore = {
    counters: []
}

export const addCounter = () => {
    return {
        type: 'ADD_COUNTER',
    }
}

export const deleteCounter = (counter_id) => {
    return {
        type: 'DELETE_COUNTER',
        counter_id: counter_id
    }
}

export const decreaseCounter = (counter_id) => {
    return {
        type: 'DECREASE_COUNTER',
        counter_id: counter_id
    }
}

export const increaseCounter = (counter_id) => {
    return {
        type: 'INCREASE_COUNTER',
        counter_id: counter_id
    }
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'ADD_COUNTER': {
            const newCounters = [...store.counters]
            newCounters.push({
                id: Date.now(),
                valor: 0,
                created_at: Date.now(),
                updated_at: Date.now()
            })
            return {
                counters: newCounters
            };
        }
        case 'DELETE_COUNTER': {
            const newCounters = store.counters.filter((counter) => {
                return counter.id !== action.counter_id;
            })
            return {
                counters: newCounters
            };
        }
        case 'INCREASE_COUNTER': {
            const newCounters = store.counters.map((counter, index) => {
                if (action.counter_id === counter.id) {
                    return {
                        id: counter.id,
                        created_at: counter.created_at,
                        updated_at: Date.now(),
                        valor: counter.valor + 1
                    }
                }
                return counter;
            })
            return {
                counters: newCounters
            };
        }
        case 'DECREASE_COUNTER': {
            const newCounters = store.counters.map((counter, index) => {
                if (action.counter_id === counter.id) {
                    return {
                        id: counter.id,
                        created_at: counter.created_at,
                        updated_at: Date.now(),
                        valor: counter.valor - 1
                    }
                }
                return counter;
            })
            return {
                counters: newCounters
            };
        }
        default:
            return store;
    }
}
export const store = createStore(reducer)
