import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome6, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";

export default function Pix(){
    const router = useRouter();
    return(
        <View style={styles.container}>
            <View style={styles.iconsTop}>
                <MaterialCommunityIcons name="close" size={28} color="#656565" onPress={() => router.push('/')}/>
                <FontAwesome5 name="question-circle" size={24} color="#656565" />
            </View>
            <View style={{paddingInline: 20}}>
                <Text style={styles.title}>Área Pix</Text>
                <Text style={styles.description}>Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite tudo: chave e valor"
                    keyboardType="text"
                    />
                <MaterialCommunityIcons style={styles.iconPhone} name="microphone-outline" size={28} color="#fff"/>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <FontAwesome6 name="money-bill-transfer" size={20} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Transferir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <MaterialCommunityIcons name="calendar" size={28} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Programar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <FontAwesome5 name="qrcode" size={26} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Ler QR code</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <Octicons name="copy" size={26} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Pix Copia e Cola</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <MaterialIcons name="attach-money" size={26} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Cobrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItemButton}>
                        <View style={styles.iconCircle}>
                            <MaterialCommunityIcons name="cash-multiple" size={26} color="#fff" />
                        </View>
                        <Text style={styles.actionText}>Depositar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.textPreferences}>Preferências</Text>
                <View style={styles.rowPreferences}>
                    <MaterialCommunityIcons name='shield-outline' size={24} color="#fff"/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1}}>
                        <Text style={styles.rowTextPreferences}>Registrar ou trazer chaves</Text>
                        <FontAwesome name='angle-right' size={20} color="#8b8989"/>
                    </View>
                </View>
                <View style={styles.rowPreferences}>
                    <MaterialCommunityIcons name='arrow-horizontal-lock' size={24} color="#fff"/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1}}>
                        <Text style={styles.rowTextPreferences}>Meus limites Pix</Text>
                        <FontAwesome name='angle-right' size={20} color="#8b8989"/>
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
        paddingBottom: 20,
        paddingTop: 40,
    },
    iconsTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingInline: 20,
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 600,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#656565',
        textAlign: 'justify',
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        padding: 15,
        borderRadius: 50,
        backgroundColor: '#8a00a5',
        color: '#fff',
        position: 'relative',
        color: '#e773fd',
        fontWeight: 500,
        fontSize: 16,
    },
    iconPhone: {
        position: 'absolute',
        right: 30,
        bottom: 10,
    },
    // bloco de círculos
    cardContainer: {
        marginBlock: 20,
        padding: 20,
        border: '1px solid #212020',
    },
    actionButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBlock: 10,
        gap: 5,
        // paddingInline: 35,
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
    // preferências
    rowPreferences: {
        borderBottomWidth: 1,
        borderBottomColor: '#212020',
        flexDirection: 'row',
        paddingInline: 20,
        paddingBlock: 12,
        gap: 15,
    },
    rowTextPreferences: {
        color: '#fff',
    },
    textPreferences: {
        fontSize: 18,
        color: '#656565',
        textAlign: 'justify',
        marginBottom: 10,
        paddingInline: 20,
    },
});