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
           return { ...state, red: state.red + action.amount }; 
        case 'blue':
            return { ...state, blue: state.blue + action.amount }; 
        case 'green': 
            return { ...state, green: state.green + action.amount }; 
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0});
    return(
        <View>
            <ColourCounter 
                onIncrease={() => }
                onDecrease={() => } 
                colour="Red" 
            />

            <ColourCounter 
                onIncrease={() => } 
                onDecrease={() => } 
                colour="Blue" 
            />
            <ColourCounter 
                onIncrease={() => } 
                onDecrease={() => } 
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
