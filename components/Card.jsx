import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ title, diases, color = 'orange' }) => {

    return (
        <View style={[styles.card, { backgroundColor: color }]}>
            <Text style={styles.card.title}>{title}</Text>
            <Text style={styles.card.desc}>{diases} diases</Text>
        </View>

    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 36,
        title: {
            fontSize: 20,
            color: "white",
            fontWeight: "500"
        },
        desc: {
            color: "white"
        }
    }
})