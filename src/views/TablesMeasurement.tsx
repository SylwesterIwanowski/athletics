import React from 'react'
import { connect } from 'react-redux'
import { addPlayerAction } from '../state/scoreTableReducer';

export interface PlayerResult {
    name: string;
    surname: string;
    score: number;
}

interface Props {
    _scoreTable: Array<PlayerResult>;
    xd: any;
}

export const TablesMeasurement: React.FC<Props> = (props) => {

    console.log('props._scoreTable');
    console.log(props._scoreTable);


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {props._scoreTable.map((player, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{player.name}</td>
                        <td>{player.surname}</td>
                        <td>{player.score}</td>
                    </tr>
                ))}
            </tbody>
            <button onClick={() => props.xd()}>sdse</button>
        </table>

    )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        _scoreTable: state.scoreTableReducer.players
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        xd: (() => {
            dispatch(addPlayerAction())
        })
    }
}

export const TablesMeasurementConnected = connect(mapStateToProps, mapDispatchToProps)(TablesMeasurement);



