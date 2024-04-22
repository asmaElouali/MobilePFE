/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Login from '../authentication/Login';
import List from '../orders/ListOrders';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(){

  return(
      <View style={styles.container}>
           <List/>
      </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
 
});

export default App;

/*import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const items = [
  {
    plan: 'Salle',
    table: 1,
    couvert: 5,
    duration: 19,
    facture: 19.5,
  },
  {
    plan: 'Terrase',
    table: 2,
    couvert: 4,
    duration: 16,
    facture: 18.5,
  },
  {
    plan: 'Salle',
    table: 3,
    couvert: 2,
    duration: 10,
    facture: 13.5,
  },
  {
    plan: 'Terrase',
    table: 3,
    couvert: 2,
    duration: 10,
    facture: 13.5,
  },
  {
    plan: 'Salle',
    table: 3,
    couvert: 2,
    duration: 10,
    facture: 13.5,
  },
];

export default function Example() {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Liste de commande</Text> 
        <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Add order</Text>
              <Icon color="#fff" name="edit" size={16} />
            </View>
          </TouchableOpacity>
        {items.map(({ plan, table, couvert, duration, facture }, index) => {
          const isActive = value === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setValue(index);
              }}>
              <View style={[styles.radio, isActive && styles.radioActive]}>
                <Text style={styles.radioLabel}>{plan}</Text>

                <Text style={styles.radioPrice}>
                  Table {table}
                </Text>

                <View style={styles.radioBadge}>
                  <Icon color="#636a73" name="clock" />
                  <Text style={styles.radioBadgeText}>{duration} min</Text>
                </View>

                <View style={styles.cardStats}>
                  <View style={styles.cardStatsItem}>
                    <Text style={styles.radioDescription}>{couvert}</Text>
                  </View>
                  <View style={styles.cardStatsItem}>
                    <Icon color="#636a73" name="file-text" />
                    <Text style={styles.radioDescription}>{facture}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.radioInput,
                    isActive && styles.radioInputActive,
                  ]} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Radio 
  radio: {
    position: 'relative',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  radioActive: {
    borderColor: '#0069fe',
  },
  radioLabel: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: '#b3b3b3',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  radioPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2f2f2f',
    marginBottom: 12,
  },
  radioBadge: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#dce9fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  radioCouvert: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#dce9fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 12,
    alignItems: 'center',
  },
  radioBadgeText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0069fe',
    marginLeft: 6,
  },
  radioDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#848a96',
  },
  radioInput: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 24,
    height: 24,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: '#b0b0b0',
  },
  radioInputActive: {
    borderWidth: 7,
    borderColor: '#0069fe',
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardStatsItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
    marginBottom:12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },

});*/

