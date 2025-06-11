import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// editei aqui otto — nome do componente corrigido com a letra maiúscula
const Pizzaria232N = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pizzaria 232N</Text>

      <Image
        source={{ uri: 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>As melhores pizzas da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://fr-chatelaine.mblycdn.com/frch/resized/2018/08/1600x900/Pizza-Tomates-Fraiches-615.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza 3 tomates</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/521403691/pt/foto/quente-feito-em-casa-pizza-de-pepperoni.jpg?s=612x612&w=0&k=20&c=KWGroPbutn4ruhgedMeQ6vvPhFULRrnCMtV5coxr1AI=' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza Pepperoni</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.redd.it/mxwedbxlh5gd1.jpeg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Pizza de Feijão</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/8z5fbfq00lvw.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>
            Pizza de Açaí {/* editei aqui otto — corrigido "Açai" para "Açaí" */}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

// editei aqui Otto — nome do componente corrigido para exportar corretamente (estava em minuscúla... lembra que sempre os componentes em maiuscula)
export default Pizzaria232N;
