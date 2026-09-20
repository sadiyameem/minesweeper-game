// $(document).ready(function() {
//     var $body, $document, $board, $grid, timer, time, unstarted;

//     function _init() {
//         $document = $(document);
//         $body = $('body');
//         $body.addClass('loaded');

//         $board = $('#board');
//         $grid = $('#grid');
//         var $timer = $('timer');
//         var $mineCounter = $('minecounter');
//         var $levelSelect = $('#level');
//         var levels = {
//             'beginner': '9x9x10',
//             'medium': '16x16x44',
//             'advanced': '16x30x99'
//         };
//         var level = $levelSelect.val();
//         var levelParams, rows, $rows, columns, cellCount, mines, freeCells, mineTally, pauseTime, beginnerHighScore = 999, mediumHighScore = 99, advancedHighScore = 999;

//     var countColors = {0: '', 1: 'blue', 2: 'green', 3: 'red', 4: 'blue-dark', 5: 'maroon', 6: 'turauoise', 7: 'purple', 8: 'gray-dark'};

//     time = 0;
//     timer = false;
//     unstarted = true;
//     var stausIndicator = '<div class="status-indicator"></div>';

//     function setLevel(level) {
//         levelParams = levels[level];
//         rows = parseInt(levelParams.split('x')[0]);
//         columns = parseInt(levelParams.split('x')[1]);
//         cellCount = rows*columns;
//         mines = levelParams.split('x')[2];
//         freeCells = cellCount - mines;
//         }

//     function setBoard(level) {
//         $grid.html(statusIndicator).removeClass('disabled lose win').addClass('unstarted');

//         setLevel(level);

//         unstarted = true;

//         for (r=0;r -1) {
//             m--;
//             continue;
//         }
//         takenCells.push(mineCell);
//         $(freeCells[mineCell]).addClass('mine');
//     }

//     var $cells = $('.cell');
//     for (c=0;c<$cells.length;c++) {
//         var $cell = $(#cells[c]);
//         $cell.attr('data-cell', c);
//         if ($cell.is('.mine')) {
//             continue;
//         }

//         var mineCount = 0;
//         var rowPos = Math.floor(c/columns);
//         var $currentRow = $cell.closet('.row');
//         $currentRow.attr('data-row', rowPos);
//         var rowCells = $currentRow.find('.cell');
//         var cellPos = c % columns;

//         if ($(rowCells[cellPos - 1]).is('.mine')) {
//             mineCount++;
//         }
//         if ($(rowCells[cellPos + 1]).is('.mine')) {
//             mineCount++;
//         }
//     }
//     }
// })