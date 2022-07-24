import React from 'react';
import {Image, Dimensions} from 'react-native';
const { width: dw } = Dimensions.get('window');

type Props = {
  name: ImageName,
  iconSize?: number,
  height?: number,
  fullsize?: boolean
  color?: string
}

const images = {
  'manzanilla.jpg': require('../../assets/img/manzanilla.jpg'),
  'lluviadeoro.jpg': require('../../assets/img/lluviadeoro.jpg'),
  'hierbabuena.jpg': require('../../assets/img/hierbabuena.jpg'),
  'dienteleon.jpg': require('../../assets/img/dienteleon.jpg'),
  'jengibre.jpeg': require('../../assets/img/jengibre.jpeg'),
  'lavanda.jpg': require('../../assets/img/lavanda.jpg'),
  'mandarina.jpg': require('../../assets/img/mandarina.jpg'),
  'ortiga.jpg': require('../../assets/img/ortiga.jpg'),
  'palta.jpg': require('../../assets/img/palta.jpg'),

  'antiinflamatorio.jpg': require('../../assets/img/antiinflamatorio.jpg'),
  'antioxidante.jpg': require('../../assets/img/antioxidante.jpg'),
  'Ateroesclerosis.jpg': require('../../assets/img/Ateroesclerosis.jpg'),
  'artritis.jpg': require('../../assets/img/artritis.jpg'),
  'cirrosis.jpg': require('../../assets/img/cirrosis.jpg'),
  'cistitis.jpg': require('../../assets/img/cistitis.jpg'),
  'colesterol.jpg': require('../../assets/img/colesterol.jpg'),
  'diabetes.jpg': require('../../assets/img/diabetes.jpg'),
  'gastritis.jpg': require('../../assets/img/gastritis.jpg'),
  'fiebre.jpg': require('../../assets/img/fiebre.jpg'),
  'hipertension.jpg': require('../../assets/img/hipertension.jpg'),
  'menopausia.jpg': require('../../assets/img/menopausia.jpeg'),
  'obesidad.jpg': require('../../assets/img/obesidad.jpg'),
  'postata.jpg': require('../../assets/img/postata.jpg'),
  'reumatismo.jpg': require('../../assets/img/reumatismo.jpg'),

  'munaandina.jpg': require('../../assets/img/munaandina.jpg'),
  'toronjil.jpg': require('../../assets/img/toronjil.jpg'),
  'wirawira.jpg': require('../../assets/img/wirawira.jpg'),
  'mate.jpg': require('../../assets/img/mate.jpg'),
  'chevron': require('../../assets/img/chevron.png'),
  'camara': require('../../assets/img/camera-green.png'),
  'plant': require('../../assets/img/plant.png'),
  'tea': require('../../assets/img/tea.png'),
};

export type ImageName = keyof typeof images;

export default function TQImage({name, height = 140, fullsize = false, iconSize = 0, color}: Props) {
  const source = images[name];
  let width = fullsize ? dw : dw - 16;
  if (iconSize) {
    height = iconSize;
    width = iconSize;
  }
  return (<Image source={source} style={{height, width, tintColor: color}} />);
}
