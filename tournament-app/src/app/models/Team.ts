export class Team {
    private _class!: String  
    private _imagePath!: String  
    private _name!: String
    
    constructor(valueClass: String, valueImagePath: String, valueName: String) {
      this.class = valueClass
      this.imagePath = valueImagePath
      this.name = valueName
    }
  
    public get class(): String {
      return this._class
    }
  
    public set class(value: String) {
      this._class = value
    }
  
    public get imagePath(): String {
      return this._imagePath
    }
  
    public set imagePath(value: String) {
      this._imagePath = value
    }
  
    public get name(): String {
      return this._name
    }
  
    public set name(value: String) {
      this._name = value
    }
  }