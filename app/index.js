import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';

export default function App() {
  return ( 
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.circle}>
            <FontAwesome5 name="user" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <FontAwesome5 name="eye" size={24} color="#fff" />
            <FontAwesome5 name="question-circle" size={24} color="#fff" />
            <MaterialCommunityIcons name="shield-check-outline" size={24} color="#fff" />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.accountContainer}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.accountTitle}>Saldo em conta</Text>
              <FontAwesome style={{paddingRight:20}} name='angle-right' size={26} color="#8b8989"/>
            </View>
            <Text style={[styles.accountTitle, styles.accountBalance]}>R$ 1.356,00</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.actionButtons}
            >
              <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('pix')}>
                <View style={styles.iconCircle}>
                  <MaterialIcons name="pix" size={26} color="#fff" />
                </View>
                <Text style={styles.actionText}>Área Pix e<br/>Transferir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('pagar')}>
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name="barcode" size={24} color="#fff" />
                </View>
                <Text style={styles.actionText}>Pagar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconCircle}>
                  <MaterialCommunityIcons name="hand-coin-outline" size={24} color="#fff" />
                </View>
                <Text style={styles.actionText}>Pegar <br/>emprestado</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconCircle}>
                  <FontAwesome name="mobile-phone" size={34} color="#fff" />
                </View>
                <Text style={styles.actionText}>Recarga de <br/>celular</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <View style={styles.iconCircle}>
                  <FontAwesome5 name="boxes" size={24} color="#fff" />
                </View>
                <Text style={styles.actionText}>Caixinhas e <br/>Investir</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View>
            <TouchableOpacity style={styles.miniCard} onPress={() => navigation.navigate('meus-cartoes')}>
              <MaterialCommunityIcons name='credit-card-chip' size={24} color={"#fff"}/>
              <Text style={styles.miniCardText}>Meus cartões</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.miniCard}>
              <Text style={styles.miniCardText}>Pague boletos no crédito em até 12x sem juros</Text>
            </TouchableOpacity>
          </View>
    
          <View style={styles.cardContainer}>
            <Text style={styles.cardCreditTitle}>Cartão de crédito</Text>
            <Text style={styles.cardCreditSubTitle}>Fatura atual</Text>
            <Text style={styles.cardCreditBalance}>R$ 1.094,80</Text>
            <Text style={styles.cardCreditLimit}>Limite disponível: R$ 730,00</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardCreditTitle}>Empréstimo</Text>
            <Text style={styles.cardCreditSubTitle}>Valor disponível</Text>
            <Text style={styles.cardCreditBalance}>R$ 7.500,00</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardCreditTitle}>Planeje suas contas</Text>
            <Text style={styles.cardCreditLimit}>Acompanhe, pague e programe com a ajuda do Assistente de pagamento</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#490C74',
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    backgroundColor: '#0a0a0a',
    height: '100%',
  },

  // btns em círculos
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#591e8c',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  accountContainer: {
    paddingBlock: 20,
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: '#fff',
    paddingInline: 20,
  },
  accountBalance: {
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 30,
    paddingInline: 20,
  },
  actionButton: {
    alignItems: 'center',
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

  // Mini Card - Meus cartões
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

  // Cards
  cardContainer: {
    padding: 20,
    border: '1px solid #212020',
  },
  cardCreditTitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#fff',
  },
  cardCreditSubTitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  cardCreditBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#fff',
  },
  cardCreditLimit: {
    fontSize: 14,
    fontWeight: 500,
    color: '#656565',
    marginTop: 10,
  },
});
