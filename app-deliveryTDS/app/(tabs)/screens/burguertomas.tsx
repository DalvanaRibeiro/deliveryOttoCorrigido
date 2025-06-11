import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';


// editei aqui Otto — nome do componente corrigido para exportar corretamente (estava em minuscúla... lembra que sempre os componentes em maiuscula) - estava : burguerTomas
const BurguerTomas = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Burguer do Tomás</Text>

      <Image
        source={{ uri: 'https://claudia.abril.com.br/wp-content/uploads/2025/04/ojardineiro-1.webp?crop=1&resize=1212,909' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Os melhores lanches da minha casa!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://docemalu.vtexassets.com/arquivos/ids/5355372/11126-2.jpg?v=638557121514800000' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hamburguer Fini</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/187405232/pt/foto/queimado-hamb%C3%BArguer-conceito-de-fast-food.jpg?s=1024x1024&w=is&k=20&c=IzSBLvOgm6Vq6FAWx1MQDlpHdHX1fUMbZiEE33oRXOo=' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hamburguer ao ponto</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://uploads.metroimg.com/wp-content/uploads/2021/02/25192527/Hamburguer-no-copo.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Hamburguer no copo</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/I24ADTZXM5KT7MZ4DFNFZVFWMQ.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Tênis Burguer</Text>
        </View>
      </View>
    </ScrollView>
  );
};


// editei aqui Otto — nome do componente corrigido para exportar corretamente (estava em minuscúla... lembra que sempre os componentes em maiuscula) - estava : burguertomas
export default BurguerTomas;

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
