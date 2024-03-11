import { Controller, Get, Route } from "@tsoa/runtime";
import { BaseModel, InheritingModel, InheritingPickModel } from "./models";

@Route("/example")
export class BenefitController extends Controller {
  @Get("omit")
  public getOmit(): InheritingModel {
    return {
      key: "A key",
      value: "A value",
    };
  }

  @Get("base")
  public getBase(): BaseModel {
    return {
      key: "A key",
      value: "A value",
      index: 0,
    };
  }

  @Get("pick")
  public getPick(): InheritingPickModel {
    return {
      key: "A key",
      value: "A value",
    };
  }
}
