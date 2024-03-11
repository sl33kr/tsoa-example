export interface BaseModel {
  key: string;
  value: string;
  index: number;
}

export interface InheritingModel extends Omit<BaseModel, "index"> {}

export interface InheritingPickModel extends Pick<BaseModel, "key" | "value"> {}
