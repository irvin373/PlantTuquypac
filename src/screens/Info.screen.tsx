import React from 'react';
import {View, ScrollView} from 'react-native';
import styles, {markdonwStyles} from '../utils/styles';
import color from '../utils/color';
import Markdown from 'react-native-markdown-display';

type Props = {
  navigation: any,
  route: any
};

const information = `**EL SISTEMA TUKUYPAQ**

escogemos 12 plantas medicinales cuyas propiedades medicinales satisfacen las demandas del organismo vivo ya que son: 

- Anti-inflamatorio
- Antioxidante
- Ateroesclerosis
- Artritis
- Cirrosis
- Cistitis
- Colesterol
- Diabetes
- Gastritis
- Fiebre
- Hipertensión
- Menopausia
- Obesidad
- Inflamación de Próstata
- Reumatismo

Se dice TUKUYPAQ por cuanto el objetivo es resolver múltiples problemas de salud y también curar a todas las personas de cualquier edad.

Las recetas que proponemos, son combinaciones adecuadas, que equilibran el aparato digestivo, el sistema nervioso, limpian la sangre y elevan las defensas. Además, estos preparados se potencian con el agregado de plantas enteogenas y plantas "dinosaurio", con el propósito de lograr mejores resultados tanto en la prevención y el tratamiento de las enfermedades mencionados en el presente manual.

Sabemos que, solo tomar plantas medicinales no resolverán de ninguna manera todos los problemas de salud, consideramos que la alimentación sana es otro de los pilares fundamentales para una buena salud, de modo que, se deberá procurar la implementación de biohuertos familiares y comunitarios para una producción orgánica que nos provea alimentos sanos.

> M. T. Carlos Prado.
> capramen@hotmail.com
> Telefono: 4291278 CBBA`;

export default function PlantDetails({ navigation, route }: Props) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: color.white }}>
      <View style={{padding: 16, borderBottomColor: color.cardBorder, borderBottomWidth: 1}}>
        <Markdown style={markdonwStyles}>
          {information}
        </Markdown>
      </View>
    </ScrollView>
  );
}
