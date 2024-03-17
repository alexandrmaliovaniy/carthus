import React, { FC } from 'react';
import "./Counter.styles.scss";
import {useCounter} from "../Service/Counter";

interface ICounterViewProps {

}

const CounterView: FC<ICounterViewProps> = ({...props}) => {
    const counter = useCounter();
    return (
        <div>
            <div>{counter.count}</div>
            <button onClick={counter.Incr}>+</button>
            <button onClick={counter.Decr}>-</button>
        </div>
    );
};

export default CounterView;
export type { ICounterViewProps }