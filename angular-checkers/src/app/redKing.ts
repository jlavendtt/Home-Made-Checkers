import { PieceType, PieceColor, Coord } from './BoardEnums';
import { Move } from './move';
import { Piece } from './piece';
import { Square } from './square';

export class RedKing implements Piece {
    typeOfPiece: PieceType;
    colorOfPiece: PieceColor;

    constructor() {
        this.typeOfPiece = PieceType.King;
        this.colorOfPiece = PieceColor.Red;
    }

    potentialMoves(pos: Square): Move[] {

        

        const toReturn: Move[] = [];
        return toReturn;

    }

    }