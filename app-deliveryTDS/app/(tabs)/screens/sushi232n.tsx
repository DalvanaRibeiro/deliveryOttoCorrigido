import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// editei aqui Otto — nome do componente corrigido para exportar corretamente (estava em minuscúla... lembra que sempre os componentes em maiuscula) 
const Sushi232n = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sushi do Mufas</Text>

      <Image
        source={{ uri: 'https://img.freepik.com/vetores-premium/leao-fofo-abracando-ilustracao-dos-desenhos-animados-de-sushi_295036-672.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>os melhores Sushis da cidade</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/12/20095333/Temaki-de-salmao-1.webp' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Temaki do Leão</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://bakeandcakegourmet.com.br/uploads/site/receitas/yakisoba-misto-2-liepg2y5.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Yakisoba da Garra</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://bonissimamangabeiras.com.br/web/image/product.template/2221/image_1024?unique=d297be3' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Combo Selvagem</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Onigiri do Mumu</Text>
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
export default Sushi232n;
