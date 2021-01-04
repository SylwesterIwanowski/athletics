import {ScoreTypeModel} from "./ScoreTypeModel";
import {TestModel} from "./TestModel";

export interface ScoreModel {
    test: TestModel;
    scoreNumber: number;
    scoreTimeMs: number;
    scoreType: ScoreTypeModel
    creationDate: Date;
}