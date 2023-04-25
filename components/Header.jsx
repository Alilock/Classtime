import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Friday , 15 dec</Text>
            <Feather name='search' size={32} color={'gray'} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 16,
        marginBottom: 32,

    },
    headerTitle: {
        color: "gray",
        fontSize: 18
    },
})