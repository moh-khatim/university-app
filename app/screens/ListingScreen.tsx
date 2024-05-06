import React from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useUniversityViewModel } from '../viewmodels/UniversityViewModel';
import { University } from '../data/models/university';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListingScreen = ({ navigation }: { navigation: any }) => {
    const { universities, loading, error, refresh } = useUniversityViewModel();


    const renderUniversity = ({ item }: { item: University }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}
        >
            <View style={styles.container}>
                <View style={{ padding: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text>{item.country}</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Icon name="arrow-right" />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View >
            <View style={{ padding: 12 }}>
                <Button title="Refresh" onPress={refresh} />
            </View >
            {loading ? (
                <ActivityIndicator size="large" />
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <FlatList
                    data={universities}
                    keyExtractor={(item) => item.name}
                    renderItem={renderUniversity}
                />
            )}
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

export default ListingScreen;

