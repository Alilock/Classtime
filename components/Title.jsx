import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.title.titleText}>Learn</Text>
            <Text style={styles.title.desc}>Choose the part of the body</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        marginBottom: 30,
        marginHorizontal: 16,
        rowGap: 10,
        titleText: {
            fontSize: 32,
            fontWeight: "700",
        },
        desc: {
            fontSize: 20,
            fontWeight: "500"
        }
    },
})