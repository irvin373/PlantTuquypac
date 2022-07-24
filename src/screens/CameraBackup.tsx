// import * as React from 'react';
// import {Text, View} from 'react-native';
// import FilePicker from '../components/ActionCamera.component';
// import { decodeJpeg, bundleResourceIO, fetch } from '@tensorflow/tfjs-react-native';
// import * as tf from '@tensorflow/tfjs'
// import * as FileSystem from 'expo-file-system';
// import ImagePicker from 'react-native-image-crop-picker';

// const modelJson = require('../../assets/model.json');
// const modelWeights = require('../../assets/group1-shard1of1.bin');
// const flowers = ['daisy', 'dandelion', 'roses', 'sunflowers' ,'tulips']
// const labels = ['dienteleon', 'hierbabuena', 'lluviaoro', 'mandarina', 'manzanilla', 'munaandina', 'ortiga', 'palta', 'toronjil', 'wirawira'];
// export default class Home extends React.Component {
//   model: tf.GraphModel | null = null; // mobilenet.MobileNet | null = null; // tf.LayersModel | null = null;
//   state = {
//     ready: false,
//     label: ''
//   }

//   async imageToTensor(fileUri: string) {
//     const imgB64 = await FileSystem.readAsStringAsync(fileUri, {
//       encoding: FileSystem.EncodingType.Base64,
//     });
//     const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
//     const raw = new Uint8Array(imgBuffer)  
//     const imageTensor = decodeJpeg(raw).resizeBilinear([224,224]).expandDims(0);
//     return imageTensor;
//   }

//   async imgToTensor(imgB64: string) {
//     const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
//     const raw = new Uint8Array(imgBuffer)
//     const imageTensor = decodeJpeg(raw).resizeBilinear([224,224]).expandDims(0);
//     return imageTensor;
//   }

//   async componentDidMount() {
//     console.clear();
//     await tf.ready();
//     this.model = await tf.loadGraphModel(bundleResourceIO(modelJson, modelWeights));
//     await this.model?.load();
//     this.setState({ready: true});
//   }

//   async prediction(dataBase64: string) {
//     console.log('base 64')
//     const imageTensor = await this.imageToTensor(dataBase64);
//     // const imageTensor = await this.imgToTensor(dataBase64)
//     console.log('start prediction')
//     // const output = await tf.tidy(() => this.model?.predict(imageTensor) as tf.Tensor).data()
//     // console.log('--> data', output)
//     const prediction = await this.model?.predict(imageTensor) as tf.Tensor
//     const predictionValues = prediction.dataSync();
//     let maxIndex = 0;
//     let maxValue = predictionValues[maxIndex];
//     for(let item in predictionValues) {
//       if(predictionValues[item] > maxValue) {
//         maxValue = predictionValues[item];
//         maxIndex = +item;
//       }
//     }
//     this.setState({label: `${flowers[maxIndex]}-${maxValue}`})
//     console.log('-->', predictionValues)
//     console.log('-->', flowers[maxIndex], maxValue)
//     await ImagePicker.clean();
//   }

//   test = async () => {
//     // Load an image from the web
//     const uri = 'https://www.gardeningknowhow.com/wp-content/uploads/2019/11/red-rose-1024x678.jpg';
//     const response = await fetch(uri, {}, { isBinary: true });
//     const imageData = await response.arrayBuffer();
//     const imageTensor = decodeJpeg(imageData);
      
//     const prediction = (await this.model?.predict(imageTensor));
//     console.log('-->', prediction)
//   }

//   render() {
//     // this.takePicture();
//     return (
//       // <Camera style={{flex: 1}} type={Camera.Constants.Type.back} ref={ref => { this.camera = ref;}}>
//         <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
//           <Text onPress={() => this.test()} style={{ fontSize: 18, marginBottom: 10 }}> {this.state.ready ? 'Done' : 'Loading...'} </Text>
//           <Text style={{ fontSize: 18, marginBottom: 10 }}> {this.state.label} </Text>
//           <FilePicker onTakePicture={async (dataBase64) => {
//             this.prediction(dataBase64);
//           }} />
//         </View>
//       // </Camera>
//     );
//   }
// }
