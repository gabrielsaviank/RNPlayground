import React, {useReducer} from 'react';
import {
    View, 
    Text, 
    StyleSheet
} from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 15;

//REDUCER
const reducer = (state, action) => {
    //  state === {red: number, gren: number, blue: number}
    // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 } 
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0  
                ? state
                : { ...state, red: state.red + action.payload }; 
            
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0 ) {
                return state;
            }
            return { ...state, blue: state.blue + action.payload }; 
        case 'change_green': 
            if(state.green + action.payload > 255 || state.green + action.payload < 0 ) {
                return state;
            }
            return { ...state, green: state.green + action.payload }; 
        default:
            return state;
    }
};

const SquareScreen = () => {
    
    const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});
    const  {red, green, blue} = state;
    return(
        <View>
            <ColourCounter 
                onIncrease={() => dispatch({type: 'change_red', payload: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOUR_INCREMENT})} 
                colour="Red" 
            />

            <ColourCounter 
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOUR_INCREMENT})} 
                colour="Blue" 
            />
            <ColourCounter 
                onIncrease={() => dispatch({type: 'change_green', payload: COLOUR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOUR_INCREMENT})} 
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
