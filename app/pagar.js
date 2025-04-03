import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-web';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Pagar(){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons style={{paddingInline: 20}} name="close" size={28} color="#656565" onPress={() => navigation.navigate('/')}/>
            <View style={{paddingInline: 20}}>
                <Text style={styles.title}>Opções de pagamento</Text>
            </View>
            <View style={{padding: 20}}>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <MaterialCommunityIcons name='credit-card-chip' size={24} color={"#fff"}/>
                        </View>
                        <Text style={styles.actionText}>Fatura do cartão nubank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <MaterialCommunityIcons name="barcode" size={24} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Boleto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <MaterialIcons name="pix" size={26} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Pix</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.miniCard}>
                    <MaterialIcons name='currency-exchange' size={22} color={"#fff"}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, alignItems: 'center'}}>
                        <Text style={styles.miniCardText}>Assistente de Pagamentos</Text>
                        <FontAwesome name='angle-right' size={24} color="#8b8989"/>
                    </View>
                </View>
                <View style={styles.miniCard}>
                    <MaterialIcons name='manage-search' size={26} color={"#fff"}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, alignItems: 'center'}}>
                        <Text style={styles.miniCardText}>Buscador de Boletos</Text>
                        <FontAwesome name='angle-right' size={24} color="#8b8989"/>
                    </View>
                </View>
                <View style={styles.miniCard}>
                    <MaterialCommunityIcons name='autorenew' size={22} color={"#fff"}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1, alignItems: 'center'}}>
                        <Text style={styles.miniCardText}>Débito Automático</Text>
                        <FontAwesome name='angle-right' size={24} color="#8b8989"/>
                    </View>
                </View>
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
    // bloco de círculos
    actionButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBlock: 10,
        gap: 5,
    },
    actionItemButton: {
        alignItems: 'center', 
        width: "30%", 
        aspectRatio: 1,
    },
    iconCircle: {
        width: 70,
        height: 70,
        backgroundColor: '#212020',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
    },

    // Mini Cards
    miniCard: {
        marginBottom: 20,
        marginInline: 20,
        padding: 20, 
        backgroundColor: '#212020',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    miniCardText: {
        color: '#fff',
    },
});