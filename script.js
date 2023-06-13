const boardElement = document.getElementById('board');
const game = new Chess();
const board = ChessBoard('board', {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
    onSnapEnd: onSnapEnd
});

function onDragStart(source, piece, position, orientation) {
    if (game.in_checkmate() === true || game.in_draw() === true || piece.search(/^b/) !== -1) {
        return false;
    }
}

function onDrop(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q'
    });

    if (move === null) {
        return 'snapback';
    }
}

function onMouseoverSquare(square, piece) {
    const moves = game.ugly_moves();
    if (moves.length === 0) return;

    const squaresToHighlight = [];
    for (const move of moves) {
        if (move.from === square) {
            squaresToHighlight.push(move.to);
        }
    }

    board.highlight(square);
    board.highlight(squaresToHighlight);
}

function onMouseoutSquare(square, piece) {
    board.removeHighlights();
}

function onSnapEnd() {
    board.position(game.fen());
}
