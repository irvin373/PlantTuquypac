import React, { Component } from 'react';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { FloatingAction } from 'react-native-floating-action';
import color from '../utils/color';

type FileReturnType = any;
const filePicker: FilePicker[] = [];

type MediaType = 'photo' | 'video' | 'any'
type SingleFileRequestType = {multiple?: false, showRemovePhoto?: boolean, mediaType?: MediaType};
type MultipleFileRequestType = {multiple: true, showRemovePhoto?: boolean, mediaType?: MediaType};

interface Props {
  onTakePicture: (uri: string) => void
}

interface State {
  resolve?: boolean | any;
  reject?: boolean | any;
  showRemovePhoto?: boolean;
  multiple?: boolean;
  mediaType?: MediaType
}
export default class FilePicker extends Component<Props, State> {
  actionSheet: any;
  constructor (props: Props) {
    super(props);
    FilePicker.showPicker.bind(this);
    this.state = {};
    filePicker.push(this);
  }

  static showPicker<T extends SingleFileRequestType | MultipleFileRequestType>
    ({multiple = false, showRemovePhoto = false, mediaType = 'any'}: T = {} as any)
      : T extends SingleFileRequestType ? Promise<FileReturnType> : Promise<FileReturnType[]> {
    if (filePicker.length === 0) { throw new Error('FILE_PICKER_NOT_INITIALIZED'); }
    const fp: FilePicker = filePicker[filePicker.length - 1];
    const rr: any = new Promise((resolve, reject) => {
      if (fp.state.resolve) { reject(new Error('PICKER_ALREADY_RUNNING')); }
      fp.setState({multiple, showRemovePhoto, mediaType, resolve, reject}, () => fp.actionSheet.show());
    });
    return rr;
  }

  componentWillUnmount () {
    const idx = filePicker.indexOf(this);
    if (idx >= 0) {
      filePicker.splice(idx, 1);
    }
  }

  async openImagePicker ({type}): Promise<any> {
    try {
      let result: any;
      const baseConfiguration = {
        compressVideoPreset: 'HighestQuality',
        ...Platform.select({
          ios: {
            compressImageQuality: 0.9
          }
        }),
        mediaType: this.state.mediaType,
        width: 224,
        height: 224
      };
      if (type === 'camera') {
        result = await ImagePicker.openCamera(baseConfiguration);
      } else {
        result = await ImagePicker.openPicker({
          ...baseConfiguration,
          multiple: this.state.multiple
        });
        console.log(result)
      }
      const resolve = this.state.resolve;
      if (Array.isArray(result)) {
        result.forEach(d => this.mapToOld(d));
        result = this.filterMaxFile(result);
      } else {
        this.mapToOld(result);
      }
      this.setState({
        resolve: false,
        reject: false
      }, () => resolve && resolve(result));
      return result;
    } catch (e) {
      let message = 'USER_CANCELED';
      if (e.message) {
        message = e.message.split(/[. ]/g).join('_').toUpperCase();
      }
      const reject = this.state.reject;
      this.setState({
        resolve: false,
        reject: false
      }, () => { console.log(reject) });
    }
  }

  cancel = () => {
    const {multiple, resolve} = this.state;
    const result = multiple ? [] : null;
    this.setState({
      resolve: false,
      reject: false
    }, () => resolve && resolve(result));
  }

  removeAvatar () {
    const resolve = this.state.resolve;
    this.setState({
      resolve: false,
      reject: false
    }, () => resolve && resolve({removeAvatar: true}));
  }

  mapToOld (data) {
    data.fileSize = data.size;
    data.uri = data.path;
  }

  render () {
    return (
      <FloatingAction
        color={color.greenHeader}
        actions={[{
          text: "Camera",
          icon: require("../../assets/img/camera.png"),
          name: "camera",
          color: color.greenHeader
        },
        {
          text: "Gallery",
          icon: require("../../assets/img/attachment.png"),
          name: "photo",
          color: color.greenHeader
        }]}
        onPressItem={async name => {
          const result = await this.openImagePicker({type: name});
          let data = await ImagePicker.openCropper({
            path: result.uri,
            width: 224,
            height: 224,
            // includeBase64: true
          } as any)
          this.props.onTakePicture(data?.path as string);
        }}
      />
    );
  }
}
