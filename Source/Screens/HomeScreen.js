import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'

//components
import Header from './Components/Header'
import CardsFlatList from './Components/CardsFlatList'

const HomeScreen = () => {

    const data = [
        { id: 1, color: 'red' },
        { id: 2, color: 'blue' },
        { id: 3, color: 'green' },
    ]

    return (
        <View style={{ height: '100%', backgroundColor: "white" }}>

            <View style={{ margin: 10 }} >

                {/* header */}
                <Header />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} >
                    <Text style={{ fontWeight: '500', color: 'black', fontSize: 23, letterSpacing: 0.5 }}>Manage</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 23, letterSpacing: 0.5, fontStyle: 'italic', marginStart: 5, color: 'grey' }}>Your</Text>
                </View>
                <Text style={{ fontWeight: '500', color: 'black', fontSize: 23, letterSpacing: 0.5, textAlign: 'center' }}>Cards</Text>
                <Text style={{ fontSize: 15, letterSpacing: 0.5, textAlign: 'center', marginTop: 10, color: 'grey' }}>Choose a card on which you see all activity.</Text>

                {/* cards flatList */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <CardsFlatList />
                </ScrollView>

            </View>

        </View>
    )
}

export default HomeScreen