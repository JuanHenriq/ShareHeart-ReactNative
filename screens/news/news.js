import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import noticias from '../../data/noticias.json';

const NewsScreen = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(noticias);
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.image} />
            <Text style={styles.description}>{item.descricao}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default NewsScreen;