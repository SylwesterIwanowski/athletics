import {GroupModel} from "./GroupModel";
import {PlayerModel} from "./PlayerModel";
import {TestModel} from "./TestModel";
import {SexModel} from "./SexModel";
import {ScoreTypeModel} from "./ScoreTypeModel";

export interface PerformTestModel {
    group: GroupModel | null;
    players: Array<PlayerModel>;
    test: TestModel
    selectedPlayer: PlayerModel | null;
    groups: Array<GroupModel>;
}

export const emptyPerformTestModel = (): PerformTestModel => {
    return {
        groups: [],
        group: null,
        players: [{
            id: 4,
            name: 'A',
            surname: 'A',
            sex: SexModel.MALE,
            year: 1900,
            scores: [],
        }],
        test: {
            id: 2,
            name: 'Bieg 60m',
            scoreType: ScoreTypeModel.NUMBER ,
        },
        selectedPlayer: null,
    }
}