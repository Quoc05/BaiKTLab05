import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
interface Props {
    onGetStarted?: () => void;
}
const Screen1 = ({ onGetStarted }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                A premium online store for{'\n'}sporter and their stylish choice
            </Text>
            <View style={styles.imageBox}>
                <Image
                    source={require('../hinh/xanhduong.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>    
            <Text style={styles.brandName}> POWER BIKE
                {'\n'} SHOP
            </Text>
            <TouchableOpacity
                style={styles.btnPrimary} 
                onPress={onGetStarted}
            >
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Screen1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginTop: 20,
        lineHeight: 36, 
    },
    imageBox: {
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: 300,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    brandName: { 
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 24,
        alignItems: 'center',
        marginBottom: 16,
        textAlign: 'center',
    },
    btnPrimary: { 
        backgroundColor: '#0066cc',
        width: '100%',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    }
});
