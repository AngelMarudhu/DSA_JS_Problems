// 1) BFS, GFG
// 2) DFS, GFG
// 3) NUMBER OF PROVINANCE IN MATRIX TO ADJASANCY LIST, LEETCODE
// 4) NUMBER OF ISLANDS MATRIX, LEETCODE
// 5) FLOOD FILL ALGORITHM MATRIX, LEETCODE
// 6) ROTTEN ORANGES BFS , LEETCODE
// 7) DETECT A CYCLE IN UNDIRECTED GRAPH BFS , GEEKS FOR GEEKS
// 8) Distance of nearest cell having 1, geeks for geeks
// 9) Surrounded Regions replace o with x DFS technique leetcode question solved on leetcode
// 10) Number of distince islands.... solved in gfg
// 11) Topological sorting solved on GFG technique DFS datastructure STACK
// 12) Topological sorting solved using khan's algorithm modified bfs technique solved gfg
// 13) DETECT A CYCLE DIRECTED GRAPH WITH kahn's algorithm bfs IN DIRECTED GRAPH solved gfg
// 14) DETECT A CYCLE DIRECTED GRAPH WITH DFS TECHNIQUE IN DIRECTED GRAPH not solved anywhere
// 15) Course Schedule One and Two
// 16) Find Eventual Safe States in kahn's algorithm modified BFS technique solved on LEETCODE reversed graph

// class bfs {
//   bfsGraph(v, adj) {
//     // initially there is no visited node
//     let visitedNode = new Array(v).fill(false);
//     //0 means not visited 1 means visited
//     // this is your screen so you can find what is the output here
//     let bfsScreen = [];

//     // lets's create a queue data structure FIFO method first in first out
//     let queueLine = [];
//     // I'm gonna use enqueue dequeue function here it's easy with me you can use any of them
//     let enqueue = (arr, node) => {
//       arr.push(node);
//     };

//     let dequeue = (arr) => {
//       // dequeue means grap the value on the queue you can use simply shift inbuilt method here
//       return arr.shift();
//     };
//     // the starting node always visted initially so we gonna make visited node of 0 because this one 0 based graph
//     visitedNode[1] = true;
//     enqueue(queueLine, 1);
//     // we want loop untill queue became 0 you can assume empty
//     while (queueLine.length !== 0) {
//       // now queueLine has root node of graph i've already told you root always visited so we've already push into queue line so definetly queueline is not empty so we want push that value in bfsScreen

//       let vertex = dequeue(queueLine);
//       bfsScreen.push(vertex);

//       // we've pushed the root node into screen and find the neighbor check with adjlist you can find what's the neighbor

//       //   let vertex = dequeue(queueLine);
//       //   bfsScreen.push(vertex);

//       // Iterate through the  neighbors of the current vertex.
//       for (let i = 0; i < adj[vertex].length; i++) {
//         let neighbor = adj[vertex][i];
//         if (!visitedNode[neighbor]) {
//           visitedNode[neighbor] = true;
//           enqueue(queueLine, neighbor);
//         }
//       }
//     }
//     return bfsScreen;
//   }
// }

// const vertices = 10;
// const adjList = [
//   [],
//   [2, 6],
//   [3, 4, 1],
//   [2],
//   [2, 5],
//   [4, 8],
//   [1, 7, 9],
//   [6, 8],
//   [5, 9],
//   [6],
// ];
// let solution = new bfs();
// let bfsOutput = solution.bfsGraph(vertices, adjList);
// console.log(bfsOutput, "output");

// --------------------------------------------------------------------------------------
// dfs technique with queue data structure

// class dfsSolution {
//   dfsUtil(node, adj, visited, list) {
//     // console.log(node, adj, visited, list);
//     // from line 64 to 77 optional or u can directly push into list and don't need to use while loop, so that (for of loop) enough, one more rip you don't need to follw queue data structure here
//     let queue = [];
//     let enqueue = (arr, currentNode) => {
//       arr.push(currentNode);
//     };
//     let dequeue = (arr) => {
//       // dequeue means grap the value on the queue you can use simply shift inbuilt method here
//       return arr.shift();
//     };
//     visited[node] = true;
//     enqueue(queue, node);

//     while (queue.length !== 0) {
//       let vertex = dequeue(queue);
//       list.push(vertex);

//       for (let depthNeighbor of adj[node]) {
//         if (!visited[depthNeighbor]) {
//           visited[depthNeighbor] = true;
//           this.dfsUtil(depthNeighbor, adj, visited, list);
//         }
//       }
//     }

//     return list;
//   }
//   dfs(v, adj) {
//     const vistedNode = new Array(v).fill(false);
//     let start = 1;
//     let dfsScreen = [];
//     this.dfsUtil(start, adj, vistedNode, dfsScreen);
//     return dfsScreen;
//   }
// }

// let vertices = 9;
// let adj = [[], [2, 3], [1, 5, 6], [1, 4, 7], [3, 8], [2], [2], [3, 8], [4, 7]];
// let solution = new dfsSolution();
// let outputOfDfs = solution.dfs(vertices, adj);
// console.log(outputOfDfs);

// --------------------------------------------------------------------------------------

// dfs technique without queue data structure

// class dfsSolution {
//   dfsUtil(node, adj, visited, list) {
//     // console.log(node, adj, visited, list);
//     // from line 64 to 77 optional or u can directly push into list and don't need to use while loop, so that (for of loop) enough, one more rip you don't need to follw queue data structure here

//     visited[node] = true;
//     list.push(node);

//     for (let depthNeighbor of adj[node]) {
//       if (!visited[depthNeighbor]) {
//         visited[depthNeighbor] = true;
//         this.dfsUtil(depthNeighbor, adj, visited, list);
//       }
//     }

//     return list;
//   }
//   dfs(v, adj) {
//     const vistedNode = new Array(v).fill(false);
//     let start = 1;
//     let dfsScreen = [];
//     this.dfsUtil(start, adj, vistedNode, dfsScreen);
//     return dfsScreen;
//   }
// }
// // [[], [2, 3], [1, 5, 6], [1, 4, 7], [3, 8], [2], [2], [3, 8], [4, 7]];
// let vertices = 9;
// let adj = [
//   [],
//   [2, 6], // 1
//   [3, 4, 1], // 2
//   [2], // 3
//   [2, 5], // 4
//   [4, 8], // 5
//   [1, 7, 9], // 6
//   [6, 8], // 7
//   [5, 9], // 8
//   [6], // 9
// ];
// let solution = new dfsSolution();
// let outputOfDfs = solution.dfs(vertices, adj);
// console.log(outputOfDfs);

// --------------------------------------------------------------------------------------
// // generic code for adjasancy matrix to adjasancy list ....

// function adjMatrixToList(matrix) {
//   let adjListScreen = new Array(matrix.length).fill(-1);
//   console.log(adjListScreen);

//   for (let i = 0; i < matrix.length; i++) {
//     adjListScreen[i] = [];
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === 1 && i != j) {
//         adjListScreen[i].push(j);
//       }
//     }
//   }
//   return adjListScreen;
// }

// let adjMatrix = [
//   [1, 0, 1],
//   [0, 1, 0],
//   [1, 0, 1],
// ];

// let adj = adjMatrixToList(adjMatrix);
// console.log(adj);

// --------------------------------------------------------------------------------------
// number of provinance problem find how many provinance there in dfs technique

// class solution {
//   dfs(node, visited, adjList) {
//     visited[node] = true;
//     for (let neighbor of adjList[node]) {
//       if (!visited[neighbor]) {
//         visited[neighbor] = true;
//         this.dfs(neighbor, visited, adjList);
//       }
//     }
//   }

//   adjMatrixToList(matrix) {
//     let adjListScreen = new Array(matrix.length).fill().map(() => []);

//     for (let i = 0; i < matrix.length; i++) {
//       adjListScreen[i] = [];
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === 1 && i != j) {
//           adjListScreen[i].push(j);
//         }
//       }
//     }
//     let visited = new Array(adjListScreen.length).fill(false);
//     let count = 0;
//     for (let i = 0; i < adjListScreen.length; i++) {
//       if (!visited[i]) {
//         count++;
//         this.dfs(i, visited, adjListScreen);
//       }
//     }
//     return count;
//   }
// }

// let adjMatrix = [
//   [1, 0, 1],
//   [0, 1, 0],
//   [1, 0, 1],
// ];

// let data = new solution();
// let output = data.adjMatrixToList(adjMatrix);
// console.log(output); // if you get any runtime error hey marudhu go and checkout the leetcode platform

// --------------------------------------------------------------------------------------

// number of islands in bfs technique solved in leetcode platform

// class problem {
//   findNeighborIsland(row, col, visited, grids) {
//     let queueDataStructure = [];
//     visited[row][col] = true;
//     queueDataStructure.push([row, col]);

//     while (queueDataStructure.length > 0) {
//       let [currentRow, currentCol] = queueDataStructure.shift();
//       // this check 4 direction vertical and horizontal way generic method
//       let directions = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1],
//       ];
//       for (let i = 0; i < directions.length; i++) {
//         let newNeighborRow = currentRow + directions[i][0];
//         let newNeighborColumn = currentCol + directions[i][1];

//         if (
//           newNeighborRow >= 0 &&
//           newNeighborRow < grids.length &&
//           newNeighborColumn >= 0 &&
//           newNeighborColumn < grids[0].length &&
//           grids[newNeighborRow][newNeighborColumn] === "1" &&
//           !visited[newNeighborRow][newNeighborColumn]
//         ) {
//           visited[newNeighborRow][newNeighborColumn] = true;
//           queueDataStructure.push([newNeighborRow, newNeighborColumn]);
//         }
//       }
//     }
//   }

//   findIsLand(grid) {
//     let rowLength = grid.length;
//     let colLength = grid[0].length;
//     let isLand = 0;
//     // const visited = Array.from({ length: rows }, () =>
//     //   Array.from({ length: cols }, () => false)
//     // ); // you can use this instead of the traditional way to create 2D array
//     let visited = new Array(rowLength)
//       .fill()
//       .map(() => new Array(colLength).fill(false));
//     // console.log(visited);
//     for (let row = 0; row < rowLength; row++) {
//       for (let col = 0; col < colLength; col++) {
//         if (!visited[row][col] && grid[row][col] === "1") {
//           isLand++;
//           this.findNeighborIsland(row, col, visited, grid);
//         }
//       }
//     }
//     return isLand;
//   }
// }

// let input = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];

// let data = new problem();
// let output = data.findIsLand(input);
// console.log(`totally ${output} islands there `);

//    0)   1)
// 0) 0    1  // total 4 row 2 column output = 1... 0s means water 1s means land check with 8 direction
// 1) 1    0
// 2) 1    1
// 3) 1    0

// --------------------------------------------------------------------------------------

// flood fill dfs technique question solved in leetcode

// class problem {
//   dfs(row, col, checking, newColor, image, initialColor) {
//     // first initially we filled with new color sr and sc
//     checking[row][col] = newColor;
//     // now we check with 4 direction
//     let directions = [
//       [-1, 0],
//       [0, 1],
//       [1, 0],
//       [0, -1],
//     ];

//     for (let i = 0; i < 4; i++) {
//       let nRow = row + directions[i][0];
//       let nCol = col + directions[i][1];
//       if (
//         nRow >= 0 &&
//         nRow < image.length &&
//         nCol >= 0 &&
//         nCol < image[0].length &&
//         image[nRow][nCol] === initialColor &&
//         checking[nRow][nCol] != newColor
//       ) {
//         this.dfs(nRow, nCol, checking, newColor, image, initialColor);
//       }
//     }
//   }

//   filling(image, sr, sc, newColor) {
//     let initialColor = image[sr][sc];
//     // we need exact same copy of image
//     let checking = image.map((deep) => [...deep]);
//     this.dfs(sr, sc, checking, newColor, image, initialColor);
//     return checking;
//   }
// }

// let image = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1],
// ];
// let sr = 1;
// let sc = 1;
// let newColor = 2;

// let data = new problem();
// let output = data.filling(image, sr, sc, newColor);
// console.log(output, "output");

// --------------------------------------------------------------------------------------

// ROTTEN ORANGES BFS MEDIUM LEVEL QUESTION ON LEETCODE SOLVED LEETCODE GFG RETURN TIME LIMIT EXCEEDED

// class solution {
//   rottenOrange(grid) {
//     let queue = [];
//     let visitedArray = new Array(grid.length)
//       .fill()
//       .map(() => new Array(grid[0].length).fill(false));
//     let countFresh = 0;
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] === 2) {
//           queue.push([i, j, 0]);
//           visitedArray[i][j] = true;
//         }
//         if (grid[i][j] === 1) {
//           countFresh++;
//         }
//       }
//     }
//     let time = 0;
//     let count = 0;
//     while (queue.length !== 0) {
//       let [rows, cols, timers] = queue.shift();
//       time = Math.max(time, timers);

//       let directions = [
//         [-1, 0],
//         [0, 1],
//         [1, 0],
//         [0, -1],
//       ];

//       // top, right, bottom, left

//       for (let i = 0; i < 4; i++) {
//         let newRow = rows + directions[i][0];
//         let newCol = cols + directions[i][1];

//         if (
//           newRow >= 0 &&
//           newRow < grid.length &&
//           newCol >= 0 &&
//           newCol < grid[0].length &&
//           !visitedArray[newRow][newCol] &&
//           grid[newRow][newCol] === 1
//         ) {
//           queue.push([newRow, newCol, timers + 1]);
//           visitedArray[newRow][newCol] = true;
//           count++;
//         }
//       }
//     }

//     if (count !== countFresh) {
//       return -1;
//     }
//     return time;
//   }
// }

// let grid = [
//   [2, 1, 1],
//   [1, 1, 1],
//   [0, 1, 2],
// ];

// // let grid = [
// //   [2, 1, 1],
// //   [0, 1, 1],
// //   [1, 0, 1],
// // ];

// let data = new solution();
// let output = data.rottenOrange(grid);
// console.log(output);

// --------------------------------------------------------------------------------------

// DETECT A CYCLE IN UNDIRECTED GRAPH, BFS SOLVEED GEEKS FOR GEEKS BUDDY

// class solution {
//   // nvn --------> not visited node
//   detectCycle(nvn, visited, adj) {
//     let queue = [];
//     visited[nvn] = true;
//     queue.push([nvn, -1]);

//     while (queue.length !== 0) {
//       let [node, parent] = queue.shift();

//       for (let adjacent of adj[node]) {
//         if (!visited[adjacent]) {
//           visited[adjacent] = true;
//           queue.push([adjacent, node]);
//         } else if (parent !== adjacent) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }

//   cycleBfs(v, adj) {
//     let visited = new Array(v).fill(false);
//     for (let i = 0; i < v; i++) {
//       // this one for broken component
//       if (!visited[i]) {
//         if (this.detectCycle(i, visited, adj)) return 1;
//       }
//     }
//     return 0;
//   }
// }

// let adjList = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
// let totalVertex = 5;

// let data = new solution();
// let output = data.cycleBfs(totalVertex, adjList);
// console.log(output, "There is a cycle");

// --------------------------------------------------------------------------------------
// Distance of nearest cell having 1 in a binary matrix, geeks for geeks
// the question stats find the distance of the nearest 1 in the each cell
// i got the output but when we push the code into gfg we got time limit exceeded but this one is the perfect code let's see if any other best approach.....

// class solution {
//   bfsDistance(grid) {
//     let queue = [];
//     let visited = new Array(grid.length)
//       .fill()
//       .map(() => new Array(grid[0].length).fill(false));

//     let distance = new Array(grid.length)
//       .fill()
//       .map(() => new Array(grid[0].length).fill(0));

//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] === 1) {
//           queue.push([i, j, 0]);
//           visited[i][j] = true;
//         }
//       }
//     }

//     while (queue.length !== 0) {
//       let [row, col, steps] = queue.shift();
//       distance[row][col] = steps;

//       let direction = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1],
//       ];

//       for (let i = 0; i < 4; i++) {
//         let newRow = row + direction[i][0];
//         let newCol = col + direction[i][1];

//         if (
//           newRow >= 0 &&
//           newRow < grid.length &&
//           newCol >= 0 &&
//           newCol < grid[0].length &&
//           !visited[newRow][newCol]
//         ) {
//           visited[newRow][newCol] = true;
//           queue.push([newRow, newCol, steps + 1]);
//         }
//       }
//     }
//     return distance;
//   }
// }

// let inputGrid = [
//   [0, 1, 1, 0],
//   [1, 1, 0, 0],
//   [0, 0, 1, 1],
// ];

// let data = new solution();
// let output = data.bfsDistance(inputGrid);
// console.log(output, "this one yours");

// --------------------------------------------------------------------------------------
// Surrounded Regions replace o with x DFS technique leetcode question solved on leetcode

// class solution {
//   dfs(row, col, visited, grid) {
//     visited[row][col] = true;
//     let direction = [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ];

//     for (let i = 0; i < 4; i++) {
//       let newRow = row + direction[i][0];
//       let newCol = col + direction[i][1];

//       if (
//         newRow >= 0 &&
//         newRow < grid.length &&
//         newCol >= 0 &&
//         newCol < grid[0].length &&
//         !visited[newRow][newCol] &&
//         grid[newRow][newCol] === "O"
//       ) {
//         this.dfs(newRow, newCol, visited, grid);
//       }
//     }
//   }

//   surrounded(grid) {
//     let n = grid.length;
//     let m = grid[0].length;

//     let visited = new Array(grid.length)
//       .fill()
//       .map(() => new Array(grid[0].length).fill(false));
//     // this is the perfect code when you put on the leetcode you got one erro 0 undefined that time you will interchange the below two for loop
//     for (let i = 0; i < n; i++) {
//       // first row only
//       if (!visited[0][i] && grid[0][i] === "O") {
//         this.dfs(0, i, visited, grid);
//       }
//       // last row only
//       if (!visited[n - 1][i] && grid[n - 1][i] === "O") {
//         this.dfs(n - 1, i, visited, grid);
//       }
//     }

//     for (let j = 0; j < m; j++) {
//       if (!visited[j][0] && grid[j][0] === "O") {
//         this.dfs(j, 0, visited, grid);
//       }
//       if (!visited[j][m - 1] && grid[j][m - 1] === "O") {
//         this.dfs(j, m - 1, visited, grid);
//       }
//     }

//     // after all this check entire grid board inside of any other o replace with x
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[0].length; j++) {
//         if (!visited[i][j] && grid[i][j] === "O") {
//           grid[i][j] = "X";
//         }
//       }
//     }

//     return grid;
//   }
// }

// let board = [
//   ["X", "O", "X", "X"],
//   ["O", "X", "O", "X"],
//   ["X", "O", "X", "O"],
//   ["O", "X", "O", "X"],
// ];

// let data = new solution();
// let output = data.surrounded(board);
// console.log(output, "this one is yours");

// --------------------------------------------------------------------------------------
// Number of distince islands.... solved in gfg becasuse leetcode want to make subscription

// class solution {
//   dfs(row, col, visited, grid, list, baseRow, baseCol) {
//     visited[row][col] = true;
//     list.push([row - baseRow, col - baseCol]);

//     let direction = [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ];

//     for (let i = 0; i < 4; i++) {
//       let newRow = row + direction[i][0];
//       let newCol = col + direction[i][1];

//       if (
//         newRow >= 0 &&
//         newRow < grid.length &&
//         newCol >= 0 &&
//         newCol < grid[0].length &&
//         !visited[newRow][newCol] &&
//         grid[newRow][newCol] === 1
//       ) {
//         this.dfs(newRow, newCol, visited, grid, list, baseRow, baseCol);
//       }
//     }
//   }

//   distinctIsland(grid) {
//     let n = grid.length;
//     let m = grid[0].length;
//     let visited = new Array(n).fill().map(() => new Array(m).fill(false));
//     let setDataStructure = new Set();

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         if (!visited[i][j] && grid[i][j] === 1) {
//           let sequenceList = [];
//           this.dfs(i, j, visited, grid, sequenceList, i, j);
//           // one question rise why do we want to make stringify becase in set ds compare with string === operator so you can get accurate output and don't use the map with sequence list like sequenceList.map(pair => pair.join(','))
//           setDataStructure.add(JSON.stringify(sequenceList));
//         }
//       }
//     }
//     console.log(setDataStructure);
//     return setDataStructure.size;
//   }
// }

// let inputGrid = [
//   [1, 1, 0, 1, 1],
//   [1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1],
// ];
// // the output is 3 distinct islands there

// let data = new solution();
// let output = data.distinctIsland(inputGrid);
// console.log(output, "distinct island there");

// --------------------------------------------------------------------------------------

// TOPOLOGICAL SORTING....only applicable for DAG directed acyclic graph SOLVED ON GFG
// note: if there is edge between U & V and u appears before v

// class solution {
//   dfs(node, visited, stack, adjList) {
//     visited[node] = true;

//     for (let neighbor of adjList[node]) {
//       if (!visited[neighbor]) {
//         this.dfs(neighbor, visited, stack, adjList);
//       }
//     }
//     stack.push(node);
//   }

//   topoSort(v, adj) {
//     let visited = new Array(v).fill(false);
//     let stack = [];
//     for (let i = 0; i < v; i++) {
//       if (!visited[i]) {
//         this.dfs(i, visited, stack, adj);
//       }
//     }
//     // don't think it's and reversing order check out the adjList the all answer will be based on the adjList why i'm telling when you see the coder first you might think it's an reverse order list no definetely not

//     let ans = [];
//     while (stack.length !== 0) {
//       let vertex = stack.pop();
//       ans.push(vertex);
//     }
//     return ans;
//   }
// }

// let adjList = [[], [3], [3], [], [1, 0], [0, 2]];
// // the index are consider U and the array value arr neighbors of index so consider V simple :)
// let totalList = adjList.length;

// let data = new solution();
// let output = data.topoSort(totalList, adjList);
// console.log("this is your toposort order list", output);

// --------------------------------------------------------------------------------------

// KAHN'S algorithm one of the way to create topological order using BFS
// note: this one also applicable DAG graph

// class solution {
//   kahnsAlgo(v, adj) {
//     let indegree = new Array(v).fill(0);
//     let queue = []; // first in first out
//     for (let i = 0; i < v; i++) {
//       for (let degreeIncreasing of adj[i]) {
//         indegree[degreeIncreasing]++;
//       }
//     }
//     for (let j = 0; j < v; j++) {
//       if (indegree[j] === 0) {
//         queue.push(j);
//       }
//     }
//     let kahnstopo = [];
//     while (queue.length !== 0) {
//       let vertex = queue.shift();
//       kahnstopo.push(vertex);

//       for (let remove of adj[vertex]) {
//         indegree[remove]--;
//         if (indegree[remove] === 0) {
//           queue.push(remove);
//         }
//       }
//     }
//     return kahnstopo;
//   }
// }

// let adjList = [[], [], [3], [1], [0, 1], [0, 2]];
// let totalList = adjList.length;

// let data = new solution();
// let output = data.kahnsAlgo(totalList, adjList);
// console.log("this is your kahn's topological order", output);

// --------------------------------------------------------------------------------------

// DETECT A CYCLE DIRECTED GRAPH WITH kahn's algorithm bfs IN DIRECTED GRAPH solved gfg

// class solution {
//   kahnsAlgo(v, adj) {
//     let indegree = new Array(v).fill(0);
//     let queue = []; // first in first out
//     for (let i = 0; i < v; i++) {
//       for (let degreeIncreasing of adj[i]) {
//         indegree[degreeIncreasing]++;
//       }
//     }
//     for (let j = 0; j < v; j++) {
//       if (indegree[j] === 0) {
//         queue.push(j);
//       }
//     }
//     let count = 0;
//     while (queue.length !== 0) {
//       let vertex = queue.shift();
//       count++;

//       for (let remove of adj[vertex]) {
//         indegree[remove]--;
//         if (indegree[remove] === 0) {
//           queue.push(remove);
//         }
//       }
//     }
//     if (count === v) return false;
//     return true;
//   }
// }

// let adjList = [[], [], [3], [1], [0, 1], [0, 2]];
// let totalList = adjList.length;

// let data = new solution();
// let output = data.kahnsAlgo(totalList, adjList);
// console.log("this is your kahn's topological order", output);

// ---------------------------------------------------------------------------------

// DETECT A CYCLE DIRECTED GRAPH WITH dfs IN DIRECTED GRAPH // not solved anywhere but this is the correct code the gfg return max call stack exceed because the node version is low 12 but current version 20 that's the problem in above i provide bfs approach that's fine

// class solution {
//   dfs(node, visited, pathVisited, adj) {
//     visited[node] = true;
//     pathVisited[node] = true;

//     for (let neighbor of adj[node]) {
//       if (!visited[neighbor]) {
//         if (this.dfs(neighbor, visited, pathVisited, adj)) {
//           return true;
//         }
//       } else if (pathVisited[neighbor]) {
//         return true;
//       }
//     }
//     pathVisited[node] = false;
//     return false;
//   }

//   topoSort(v, adj) {
//     let visited = new Array(v).fill(false);
//     let pathVisited = new Array(v).fill(false);

//     for (let i = 0; i < v; i++) {
//       if (!visited[i]) {
//         if (this.dfs(i, visited, pathVisited, adj) === true) return true;
//       }
//     }
//     return false;
//   }
// }

// // let adjList = [[], [2], [3], [4, 7], [5], [6], [], [5], [9], [10], [8]];
// let adjList = [[], [], [3], [1], [0, 1], [0, 2]];
// // the index are consider U and the array value arr neighbors of index so consider V simple :)
// let totalList = adjList.length;

// let data = new solution();
// let output = data.topoSort(totalList, adjList);
// console.log("this is your toposort order list", output);

// ---------------------------------------------------------------------------------
// course Course Schedule one and course sehedule two also same code but slight differen instead of return true or false return kahnstopo or empty array

// class Solution {
//   isPossible(preRequisite, v, p) {
//     let adj = new Array(v).fill(null).map(() => []);
//     // for (let [todo, preRequ] of preRequisite) {
//     //   adj[todo].push(preRequ); // please use this one because time will reduce
//     // }
//     for (let i = 0; i < preRequisite.length; i++) {
//       adj[preRequisite[i][1]].push(preRequisite[i][0]);
//     } // if use this time can increase slightly but both are same

//     let indegree = new Array(v).fill(0);
//     let queue = []; // first in first out
//     for (let i = 0; i < v; i++) {
//       for (let degreeIncreasing of adj[i]) {
//         indegree[degreeIncreasing]++;
//       }
//     }
//     for (let j = 0; j < v; j++) {
//       if (indegree[j] === 0) {
//         queue.push(j);
//       }
//     }
//     let kahnstopo = [];
//     while (queue.length !== 0) {
//       let vertex = queue.shift();
//       kahnstopo.push(vertex);

//       for (let remove of adj[vertex]) {
//         indegree[remove]--;
//         if (indegree[remove] === 0) {
//           queue.push(remove);
//         }
//       }
//     }
//     if (kahnstopo.length === v) {
//       return true;
//     }
//     return false;
//   }
// }
// let N = 4;
// let P = 3;
// let preRequisite = [
//   [1, 0],
//   [2, 1],
//   [3, 2],
// ];

// let data = new Solution();
// let output = data.isPossible(preRequisite, N, P);
// console.log(output);

// ---------------------------------------------------------------------------------
// Find Eventual Safe States in kahn's algorithm modified BFS technique solved on leetcode reversed graph indegree
// class Solution {
//   eventualStates(graph) {
//     let reversedAdj = new Array(graph.length).fill(null).map(() => []);

//     let indegree = new Array(graph.length).fill(0);

//     for (let i = 0; i < graph.length; i++) {
//       for (let adj of graph[i]) {
//         reversedAdj[adj].push(i);
//         indegree[i]++;
//       }
//     }

//     // console.log(reversedAdj, "reversed adj");
//     // console.log(indegree);
//     let safeNode = [];
//     let queue = [];
//     for (let i = 0; i < reversedAdj.length; i++) {
//       if (indegree[i] === 0) {
//         queue.push(i);
//       }
//     }
//     // console.log(queue);
//     while (queue.length !== 0) {
//       let vertex = queue.shift();
//       safeNode.push(vertex);

//       for (let remove of reversedAdj[vertex]) {
//         indegree[remove]--;
//         if (indegree[remove] === 0) {
//           queue.push(remove);
//         }
//       }
//     }
//     let out = safeNode.sort((a, b) => a - b);
//     return out;
//   }
// }

// let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];

// let data = new Solution();
// let output = data.eventualStates(graph);
// console.log("commited safe states", output);
