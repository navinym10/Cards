import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//images
import { profile, search } from '../../Assets/Images/Images'

const Header = () => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>

            <View style={{ width: 35, height: 35, alignItems: 'center', justifyContent: "center", borderRadius: 50 }} >
                <Image source={profile} />
            </View>

            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 23, letterSpacing: 2 }}>Clearly</Text>

            <TouchableOpacity
                activeOpacity={0.5}
                style={{ width: 35, height: 35, alignItems: 'center', justifyContent: "center", borderRadius: 50 }} >
                <Image style={{ height: 25, width: 25 }} source={search} />
            </TouchableOpacity>

        </View>
    )

}

export default Header