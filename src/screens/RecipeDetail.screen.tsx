import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import DataBase from '../utils/DataBase';
import styles, {markdonwStyles} from '../utils/styles';
import {PlantType, RecipeType} from '../types';
import ArrowContainer from '../components/ArrowContainer.component';
import TQImage, {ImageName} from '../components/TQImage';
import color from '../utils/color';
import Markdown from 'react-native-markdown-display';

type Props = {
  navigation: any,
  route: any
};

const plantsQuery = `SELECT P.id, P.name, P.imageName, M.name as MedicalName
FROM MedicalGroup as M, Plant as P, Plant_to_Recipe as PR
WHERE P.id = PR.plantId AND PR.recipeId = {{recipeId}} AND M.id = P.MedicalGroupId`;
const recipeDetail = 'SELECT * from Recipe as R WHERE R.id = {{recipeId}} LIMIT 1';

function PlantCard({data, medicalGroup, openDetail}: {data: PlantType, medicalGroup: string, openDetail: (id: string) => void}) {
  return (
    <ArrowContainer>
      <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => { openDetail(data.id.toString()); }}>
        <TQImage iconSize={60} name={data.imageName} />
        <View style={{padding: 8}}>
          <Text style={styles.textHeader}>{data.name}</Text>
          <Text style={{...styles.detailedText, marginTop: 4}}>{medicalGroup}</Text>
        </View>
      </TouchableOpacity>
    </ArrowContainer>
  )
}

export default function PlantDetails({ navigation, route }: Props) {
  const {recipeId} = route.params;
  const recipeQuery = recipeDetail.replace('{{recipeId}}', recipeId)
  const plantQuery = plantsQuery.replace('{{recipeId}}', recipeId)
  const [plants, setPlant] = useState<PlantType[]>([]);
  const [recipe, setRecipes] = useState<RecipeType>();
  useEffect(() => {
    navigation.setOptions({title: ''});
    DataBase.getQuery<RecipeType>(recipeQuery).then(data => {
      setRecipes(data[0]);
    });
    DataBase.getQuery<PlantType>(plantQuery).then(data => {
      setPlant(data);
    });
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.white }}>
      <TQImage name={recipe?.imageName as ImageName} fullsize height={210} />
      <View style={{padding: 16, borderBottomColor: color.cardBorder, borderBottomWidth: 1}}>
        <Markdown style={markdonwStyles}>
          {recipe?.preparation || ''}
        </Markdown>
      </View>
      {plants.map(item => <View key={item.id.toString()}>
        <PlantCard data={item} medicalGroup={item.MedicalName as string}
          openDetail={() => {
            navigation.popToTop();
            navigation.navigate('Plantas');
            navigation.push('PlantDetail', {
              plantId: item.id
            });
          }} />
      </View>)}
    </ScrollView>
  );
}
