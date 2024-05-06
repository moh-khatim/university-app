import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { University } from '../data/models/university';


const DetailsScreen = ({ route, navigation }) => {
    const university = route.params as University;

    return (
        <View style={{ padding: 16, }} >
            <Text style={{ fontSize: 24 }}>{university.name}</Text>
            <Text style={{ fontSize: 17, paddingHorizontal: 12 }}>{university['state-province'] ?? "No state/province"}</Text>
            <View style={styles.container}>
                <Text style={{ fontSize: 17 }}>{university.country}</Text>
                <Text style={{ fontSize: 17 }}>{university.alpha_two_code}</Text>
            </View>
            {university.web_pages.map((e) => {
                return <Text key={e} style={{ fontSize: 17, paddingHorizontal: 12 }}>{e}</Text>
            })}
            <Button
                title="Back"
                onPress={() => {
                    navigation.goBack();

                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,

    },
});

export default DetailsScreen;
