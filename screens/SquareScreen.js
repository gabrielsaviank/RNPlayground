import React, {useReducer} from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15;

const reducer = (state, action) => {
    //  state === {red: number, gren: number, blue: number}
    // action === { colourToChange: 'red' || 'green' || 'blue', amount: 15 || -15 } 
    switch (action.colourToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0  
                ? state
                : { ...state, red: state.red + action.amount }; 
            
        case 'blue':
            if(state.blue + action.amount > 255 || state.blue + action.amount < 0 ) {
                return state;
            }
            return { ...state, blue: state.blue + action.amount }; 
        case 'green': 
            if(state.green + action.amount > 255 || state.green + action.amount < 0 ) {
                return state;
            }
            return { ...state, green: state.green + action.amount }; 
        default:
            return state;
    }
};

const SquareScreen = () => {
    // reducer
    const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});
    const  {red, green, blue} = state;
    return(
        <View>
            <ColourCounter 
                onIncrease={() => dispatch({colourToChange: 'red', amount: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({colourToChange: 'red', amount: -1 * COLOUR_INCREMENT})} 
                colour="Red" 
            />

            <ColourCounter 
                onIncrease={() => dispatch({colourToChange: 'blue', amount: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT})} 
                colour="Blue" 
            />
            <ColourCounter 
                onIncrease={() => dispatch({colourToChange: 'green', amount: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({colourToChange: 'green', amount: -1 * COLOUR_INCREMENT})} 
                colour="Green" 
            />
            <View
                style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${blue}, ${green})`}}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
