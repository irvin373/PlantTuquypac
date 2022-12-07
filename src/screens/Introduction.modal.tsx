import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import color from '../utils/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CheckBoxProps = {
  toggleValue: boolean
  setToggleCheckBox: (state: boolean) => void
};

const storeDisplayIntro = () => {
  try {
    AsyncStorage.setItem('DisplayIntro', '{"display": true}');
  } catch (e) {
    console.log(e);
  }
}

function CheckBoxDisplay({setToggleCheckBox, toggleValue}: CheckBoxProps) {
  return (<View style={styles.checkBoxContainer}>
    <View>
      <CheckBox
        tintColor={color.cardBorder}
        onCheckColor={color.greenHeader}
        onTintColor={color.greenHeader}
        disabled={false}
        value={toggleValue}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
    </View>
    <View>
      <Text style={styles.checkBoxText}>No volver a mostrar pantalla de Inicio</Text>
    </View>
  </View>)
}

export default function IntroductionModal({ navigation }: {navigation: any}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const conitnueAction = () => {
    if (toggleCheckBox) {
      storeDisplayIntro();
    }
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>SISTEMA TUKUYPAQ APP</Text>
        <Text style={styles.text}>TUKUYPAQ pretende ser una ayuda tanto para el aprendizaje de las plantas medicinales en Cochabamba, facilitando el reconocimiento y las posibles infusiones que ayudaran con el tema de salud.</Text>
        <Text style={styles.text}>Solo tomar plantas medicinales no resolverán de ninguna manera todos los problemas de salud, consideramos que la alimentación sana y consulta medica.</Text>
      </View>
      <CheckBoxDisplay toggleValue={toggleCheckBox} setToggleCheckBox={setToggleCheckBox} />
      <TouchableOpacity onPress={conitnueAction} style={styles.button}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: color.textPrimary,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: color.textPrimary,
  },
  checkBoxContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  checkBoxText: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    marginBottom: 24,
    backgroundColor: color.greenHeader,
    marginHorizontal: 24,
    padding: 12,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: color.white,
  },
});
