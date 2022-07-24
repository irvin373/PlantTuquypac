import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import DataBase from '../utils/DataBase';
import styles, {markdonwStyles} from '../utils/styles';
import {PlantType, RecipeType} from '../types';
import ArrowContainer from '../components/ArrowContainer.component';
import TQImage, {ImageName} from '../components/TQImage';
import color from '../utils/color';
import Markdown from 'react-native-markdown-display';

type RecipeModType = RecipeType & {
  recipeId: string
};

type Props = {
  navigation: any,
  route: any
};

const recipePlant = `SELECT *
FROM  Recipe as R, Plant_to_Recipe as PR
WHERE R.id = PR.recipeId AND PR.plantId = {{plantId}}`;
const plantDetail = `SELECT P.id, P.name, P.imageName, P.description, M.name as MedicalName
FROM Plant as P INNER JOIN MedicalGroup as M on M.id = P.MedicalGroupId
WHERE P.id = {{plantId}} LIMIT 1`;

function RecipeCard({data, medicalGroup, openDetail}: {data: RecipeModType, medicalGroup: string, openDetail: (id: string) => void}) {
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
  const {plantId} = route.params;
  const recipeQuery = recipePlant.replace('{{plantId}}', plantId)
  const plantQuery = plantDetail.replace('{{plantId}}', plantId)
  const [plant, setPlant] = useState<PlantType>();
  const [recipes, setRecipes] = useState<RecipeModType[]>([]);
  useEffect(() => {
    navigation.setOptions({title: ''});
    DataBase.getQuery<RecipeModType>(recipeQuery).then(data => {
      setRecipes(data);
    });
    DataBase.getQuery<PlantType>(plantQuery).then(data => {
      setPlant(data[0]);
    });
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.white }}>
      <Text style={styles.headerName}>{plant?.name}</Text>
      <TQImage name={plant?.imageName as ImageName} fullsize height={210} />
      <View style={{padding: 16, borderBottomColor: color.cardBorder, borderBottomWidth: 1}}>
        <Markdown style={markdonwStyles}>
          {plant?.description || ''}
        </Markdown>
        <Text style={styles.detailedText}></Text>
      </View>
      {recipes.map(item => <View key={item.id.toString()}>
        <RecipeCard data={item} medicalGroup={plant?.MedicalName as string}
          openDetail={() => {
            navigation.popToTop();
            navigation.navigate('Recetas');
            navigation.push('RecipeDetails', {
              recipeId: item.recipeId
            });
          }}
        />
      </View>)}
    </ScrollView>
  );
}
