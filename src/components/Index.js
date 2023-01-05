import React from "react";
import { increaseValue, decreaseValue } from "../redux/action-creator";
import { useSelector, useDispatch } from "react-redux";
export default function Index() {
	const myState = useSelector((state) => state.ourState.count);
	const dispatch = useDispatch();
	console.log("myState  ", myState);
	return (
		<div>
			<h1>Hello world</h1>
			<button onClick={() => dispatch(increaseValue())}>Increment</button>
			<p>{myState}</p>
			<button onClick={() => dispatch(decreaseValue())}>Decrement</button>
		</div>
	);
}
