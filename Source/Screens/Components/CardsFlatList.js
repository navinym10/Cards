import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

//linearGradient
import LinearGradient from 'react-native-linear-gradient'

//mockData
import { MockData } from '../../Assets/MockData'

//images
import { barChart, cardChip, pay, payWave, profile1, profile2, profile3, request, send } from '../../Assets/Images/Images'


const CardsFlatList = () => {

    const [data, setData] = useState(MockData)

    const toggleItem = (itemId) => {
        setData((prevData) =>
            prevData.map((item) => {
                if (item.id === itemId) {
                    return { ...item, expanded: !item.expanded };
                }
                return item;
            })
        );
    };

    const RenderItem = ({ item }) => {

        return (
            <View style={{}} >

                <TouchableOpacity
                    onPress={() => toggleItem(item.id)}
                    activeOpacity={0.5}
                    style={{ height: 220, width: "100%", marginBottom: 15, }} >
                    <LinearGradient
                        colors={item.colors}
                        style={{ height: '100%', width: '100%', borderRadius: 10 }}
                        start={{ x: 0.7, y: 0 }}>

                        <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center', marginStart: 15, marginEnd: 15 }}>
                            <Text style={{ letterSpacing: 2, fontWeight: 'normal', fontSize: 18, color: 'black' }} >{item.bankName}</Text>
                            <Text style={{ letterSpacing: 2, fontWeight: 'normal', fontSize: 18, color: 'black' }} >{item.cardType}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', margin: 10, marginStart: 20, marginEnd: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Image style={{ height: 38, width: 38 }} source={cardChip} />
                            <Image style={{ height: 30, width: 30 }} source={payWave} />
                        </View>

                        <Text style={{ letterSpacing: 8, fontWeight: 'bold', fontSize: 18, color: 'black', margin: 10, textAlign: 'center' }} >{`**** **** **** ${item.cartLastNumbers}`}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: '10%' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 8.5, color: 'black', bottom: -3 }}>VALID</Text>
                                <Text style={{ fontSize: 8.5, color: 'black', top: -1, left: 1 }}>THRU</Text>
                            </View>
                            <Text style={{ letterSpacing: 0.5, fontSize: 18, color: 'black', marginStart: 3 }}>{item.expiryDate}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10, marginStart: 15, marginEnd: 15 }}>
                            <Text style={{ letterSpacing: 2, fontSize: 18, color: 'black', textAlign: 'center', textTransform: 'uppercase' }}>{item.cardHolderName}</Text>
                            <Image style={{ height: 30, width: 50 }} source={item.cardSymbol} />
                        </View>

                    </LinearGradient>

                </TouchableOpacity>

                {/* expandables */}
                {item.expanded ?
                    (
                        <View style={{ marginTop: -100, marginBottom: 15, backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 10, borderRadius: 10, justifyContent: 'center' }} >

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={{ height: 100, width: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} >
                                    <Image style={{ height: 33, width: 33 }} source={send} />
                                    <Text style={{ marginTop: 3, color: 'black' }} >Send</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={{ height: 100, width: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} >
                                    <Image style={{ height: 33, width: 33 }} source={request} />
                                    <Text style={{ marginTop: 3, color: 'black' }} >Request</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={{ height: 100, width: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }} >
                                    <Image style={{ height: 33, width: 33 }} source={pay} />
                                    <Text style={{ marginTop: 3, color: 'black' }} >Pay</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', }} >
                                <View style={{ height: '100%', width: '47%', backgroundColor: 'white', borderRadius: 5, padding: 10, marginTop: 0 }} >
                                    <Text style={{ margin: 5, color: 'black' }} >Weekly Activity</Text>
                                    <View style={{ alignItems: "center", justifyContent: 'center' }} >
                                        <Image style={{ height: 100, width: 100, }} source={barChart} />
                                    </View>
                                    <Text style={{ color: 'black', marginTop: 5 }}>This Week</Text>
                                    <Text style={{ color: 'black', marginTop: 5 }}>$ 1,043</Text>
                                </View>

                                <View style={{ flexDirection: 'column', width: '47%' }} >
                                    <View style={{ width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
                                        <Text style={{ margin: 5, marginTop: 0, color: 'black' }}  >Friends</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }} >
                                            <TouchableOpacity
                                                style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ height: 30, width: 30, borderRadius: 50 }} source={profile1} />
                                                <Text style={{ color: 'black', marginTop: 5 }}>Hello</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ height: 30, width: 30, borderRadius: 50 }} source={profile2} />
                                                <Text style={{ color: 'black', marginTop: 5 }}>Hello</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ height: 30, width: 30, borderRadius: 50 }} source={profile3} />
                                                <Text style={{ color: 'black', marginTop: 5 }}>Hello</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 10, padding: 10, width: '100%', backgroundColor: 'white', borderRadius: 5, }}>
                                        <Text style={{ margin: 5, marginTop: 0, color: 'black' }}  >Total Income</Text>
                                        <Text style={{ margin: 5, marginTop: 0, fontWeight: 'bold', fontSize: 20, color: 'black' }}>$ 1,20,000</Text>
                                        <Text style={{ margin: 5, marginBottom: 0, marginTop: -2.5, color: 'black' }}  >This Month</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    )
                    : null
                }
            </View>
        )
    }

    return (
        <View style={{ marginTop: 20, margin: 15, }}>
            <FlatList style={{ marginBottom: 200 }}
                data={data}
                renderItem={RenderItem}
            />
        </View>
    )
}

export default CardsFlatList