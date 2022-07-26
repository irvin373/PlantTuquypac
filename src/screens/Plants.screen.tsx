import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import DataBase from '../utils/DataBase';
import styles from '../utils/styles';
import {DisplayIntroType, PlantType} from '../types';
import Card from '../components/MbCard.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TQImage from '../components/TQImage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const query = `SELECT P.id, P.name, P.imageName, P.description, M.name as MedicalName
from Plant as P INNER JOIN MedicalGroup as M on M.id = P.MedicalGroupId`;

function PlantCard({data, openDetail}: {data: PlantType, openDetail: (id: string) => void}) {
  return (<Card style={{flex: 1}}>
    <TouchableOpacity onPress={() => { openDetail(data.id.toString()); }}>
      <TQImage name={data.imageName} />
      <View style={{padding: 8, marginTop: 8}}>
        <Text style={styles.textHeader}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  </Card>)
}

const getMessageConfirmation = async (): Promise<DisplayIntroType> => {
  try {
    const value = await AsyncStorage.getItem('DisplayIntro');
    console.log('--> value', value)
    return JSON.parse(value || '');
  } catch(e) {
    return null;
  }
}

export default function PlantList({ navigation }: {navigation: any}) {
  const [plants, setPlants] = useState<PlantType[]>([]);
  useEffect(() => {
    getMessageConfirmation().then((display) => {
      console.log('--> value', display)
      if (display === null) {
        navigation.navigate('Introduccion');
      }
    });
    DataBase.getQuery<PlantType>(query).then(data => {
      setPlants(data);
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={plants}
        renderItem={({item}) => <PlantCard data={item}
        openDetail={(id) => {
          navigation.push('PlantDetail', {
            plantId: id
          });
        }} />}
      />
    </View>
  );
}