import React, {useState} from 'react';

interface ICounterServiceProps {}

const CounterService = (props?: ICounterServiceProps) => {
    const [count, setCount] = useState(0);
    const Incr = () => setCount(count + 1);
    const Decr = () => setCount(count - 1);
    return { count, Incr, Decr };
};

export default CounterService;
export type { ICounterServiceProps };