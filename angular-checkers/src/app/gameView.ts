export interface GameView {
    id: number;
    rep: String[][];
    redTurn: boolean;
    moveNum: number;
    didCapture: boolean;
    capSpot: number;
}