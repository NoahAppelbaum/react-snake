import { useReducer, useRef } from "react";
import { stateReducer, createInitialState } from "./stateReducer";

function Game({gameHeight = 101, gameWidth = 101}) {
    const [state, dispatch] = useReducer(
        stateReducer,
        [gameHeight, gameWidth],
        createInitialState
    );

    //TODO: Make some listeners for keystrokes
    //  -On window? In a component? huh?
    //  - Then, call dispatch with the appropriate `direction` property on `action`
    return (
        //TODO: OK, gotta map out this board -- fill with spaces, passing board contents to space
    )
}

export default Game;
