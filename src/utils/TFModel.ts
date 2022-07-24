type Model = any

class TFModel {
  model: Model
  constructor() {
    this.model = null;
  }

  setModel(model: Model) {
    this.model = model;
  }
  
}

export default new TFModel();