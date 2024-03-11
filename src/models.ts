export interface BaseModel {
  key: string;
  value: string;
  index: number;
}

export interface InheritingModel extends Omit<BaseModel, "index"> {}
