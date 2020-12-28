import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Button
} from 'react-native';

const MainScreen = ({navigation}) => {
    return(
        <View>
            <Button 
                title="Go To Colours Screen"
                onPress={() => navigation.navigate('ColoursScreen')}
            />
            <Button 
                title="Go To Square Demo"
                onPress={() => navigation.navigate('SquareScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1
    }
})

export default MainScreen;