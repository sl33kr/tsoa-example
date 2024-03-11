import { Controller, Get, Route } from "@tsoa/runtime";
import { InheritingModel } from "./models";

@Route("/example")
export class BenefitController extends Controller {
  @Get()
  public get(): InheritingModel {
    return {
      key: "A key",
      value: "A value",
    };
  }
}
