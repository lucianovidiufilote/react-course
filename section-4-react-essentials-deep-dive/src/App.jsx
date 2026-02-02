import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
    x: 'Player 1',
    o: 'Player 2',
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveActivePlayer(gameTurns) {
    let activePlayer = 'x';
    if (gameTurns.length > 0 && gameTurns[0].player === 'x') {
        activePlayer = 'o';
    }
    return activePlayer;
}

function deriveWinner(gameBoard, playerName) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = PLAYERS[firstSquareSymbol];
        }
    }

    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]
    gameTurns.forEach(({square, player}) => {
        gameBoard[square.row][square.col] = player
    })

    return gameBoard
}

function App() {
    const [players, setPlayers]= useState(PLAYERS);
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            let currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [{
                square: {
                    row: rowIndex,
                    col: colIndex,
                },
                player: currentPlayer,
            }, ...prevTurns];
            return updatedTurns
        });
    }

    function handleRestart(){
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName){
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [symbol]: newName
            }
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={PLAYERS.x}
                        symbol="x"
                        isActive={activePlayer === 'x'}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialName={PLAYERS.o}
                        symbol="o"
                        isActive={activePlayer === 'o'}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver
                    onRestart={handleRestart}
                    winner={winner}/>}
                <GameBoard
                    activePlayerSymbol={activePlayer}
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}/>
            </div>
            <Log
                turns={gameTurns}/>
        </main>
    )
}

export default App
