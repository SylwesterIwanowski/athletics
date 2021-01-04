import {SexModel} from "./SexModel";
import {ScoreModel} from "./ScoreModel";

export interface PlayerModel {
    id: number;
    name: string;
    surname: string;
    sex: SexModel;
    scores: Array<ScoreModel>;
    year: number;
}