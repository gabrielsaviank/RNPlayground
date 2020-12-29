import React, {useState} from 'react';
import {
    View,
    Text, 
    StyleSheet,
    Button,
    FlatList
} from 'react-native';

const ColoursScreen = () => {
    const [colours, setColours] = useState([]);
    console.log(colours);

    return(
        <View>
            <Button title="Add a colour" onPress={() => {
                setColours([...colours, randomRGB()])
            }}/>
                
            <FlatList
                keyExtractor={(item) => item}
                data={colours}
                renderItem={({item}) => {
                    return (
                        <View style={{height: 100, width: 100, backgroundColor: item}}></View>
                    );
                }}
            />
        </View>
    );
};


const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return(
        `rgb(${red}, ${green}, ${blue})`
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default ColoursScreen;
