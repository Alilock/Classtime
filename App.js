import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Title from './components/Title'
import Card from './components/Card'
const App = () => {

  const datas = [
    {
      title: "Head&Face",
      diases: 11,
      color: "red"
    },
    {
      title: "Back&Neck",
      diases: 9,
      color: "black"
    },
    {
      title: "Elbow&Shoulders",
      diases: 12,
      color: "green"
    },
    {
      title: "hand&Arm",
      diases: 2,
      color: "pink"
    }
  ]


  return (
    <SafeAreaView>
      <Header />
      <Title />
      <View style={styles.cards}>
        {
          datas.map(item => (
            <Card title={item.title} color={item.color} diases={item.diases} />
          ))
        }
      </View>

    </SafeAreaView >
  )
}

export default App

const styles = StyleSheet.create({


  cards: {
    marginHorizontal: 16,
    rowGap: 16
  },


}
)