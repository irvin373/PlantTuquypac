import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import DataBase from '../utils/DataBase';
import styles from '../utils/styles';
import {RecipeType} from '../types';
import Card from '../components/MbCard.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TQImage from '../components/TQImage';

const query = 'SELECT * from Recipe';

function RecipeCard({data, openDetail}: {data: RecipeType, openDetail: (id: string) => void}) {
  return (<Card style={{flex: 1}}>
    <TouchableOpacity onPress={() => { openDetail(data.id.toString()); }}>
      <TQImage name={data.imageName} />
      <View style={{padding: 8, marginTop: 8}}>
        <Text style={styles.textHeader}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  </Card>)
}

export default function RecipeList({ navigation }: {navigation: any}) {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  useEffect(() => {
    DataBase.getQuery<RecipeType>(query).then(data => {
      setRecipes(data);
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={recipes}
        renderItem={({item}) => <RecipeCard data={item}
        openDetail={(id) => {
          navigation.push('RecipeDetails', {
            recipeId: id
          });
        }} />}
      />
    </View>
  );
}
