import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-web';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function MeusCartoes(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons style={{paddingInline: 20}} name="close" size={28} color="#656565" onPress={() => navigation.navigate('/')}/>
            <View style={{paddingInline: 20}}>
                <Text style={styles.title}>Meus cartões</Text>
            </View>
            <View style={{padding: 20}}>
                <Text style={styles.subTitle}>Cartão Físico</Text>
            </View>
            <View style={styles.miniCard}>
                <MaterialCommunityIcons name='credit-card-chip' size={24} color={"#fff"}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, alignItems: 'center'}}>
                    <View>
                        <Text style={{color:'#fff'}}>Fabiana S Silva</Text>
                        <Text style={{color:'#8b8989'}}>.... 0000</Text>
                    </View>
                    <FontAwesome name='angle-right' size={24} color="#8b8989"/>
                </View>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Cartões adicionais</Text>
            </View>
            <View style={styles.miniCard}>
                <MaterialCommunityIcons name='plus' size={24} color={"#a55cd9"}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, alignItems: 'center'}}>
                    <Text style={{color:'#a55cd9', fontSize:16}}>Pedir cartão adicional</Text>
                    <Text style={{color:'#fff', backgroundColor:'#490C74', paddingBlock: 2, paddingInline: 5, borderRadius: 4}}>Novo</Text>
                </View>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Cartão virtual temporário</Text>
            </View>
            <View style={styles.miniCard}>
                <MaterialCommunityIcons name='plus' size={24} color={"#a55cd9"}/>
                <Text style={{color:'#a55cd9', fontSize:16}}>Criar cartão virtual temporário</Text>
            </View>
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Cartão virtual</Text>
                <View style={[styles.miniCard, styles.miniCardCartaoVirtual]}>
                    <MaterialCommunityIcons name='credit-card-chip' size={24} color={"#fff"}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, alignItems: 'center'}}>
                        <View>
                            <Text style={{color:'#fff'}}>Fabiana S Silva</Text>
                            <Text style={{color:'#8b8989'}}>.... 1111</Text>
                        </View>
                        <FontAwesome name='angle-right' size={24} color="#8b8989"/>
                    </View>
                </View>
            </View>
            <View style={styles.miniCard}>
                <MaterialCommunityIcons name='plus' size={24} color={"#a55cd9"}/>
                <Text style={{color:'#a55cd9', fontSize:16}}>Criar cartão virtual</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0a0a0a',
        height: '100%',
        paddingBlock: 20,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 600,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 600,
        color: '#8b8989',
    },
    miniCard: {
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    miniCardCartaoVirtual: {
        marginBottom: 5,
    },
    subTitleContainer: {
        padding: 20,  
        borderBottomWidth: 1, 
        borderBottomColor: '#212020'
    }
});