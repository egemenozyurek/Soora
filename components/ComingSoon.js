import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const ComingSoon = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text className="font-inter font-bold" style={styles.comingSoon}> Coming Soon</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    comingSoon: {
        fontStyle: 'bold',
        fontWeight: "700",
        fontSize: Dimensions.get('window').width > 600 ? 18 : 12,
        lineHeight: 15,
        color: "#0B0B0B"
    },
})

export default ComingSoon