// 1) BFS, GFG
// 2) DFS, GFG
// 3) NUMBER OF PROVINANCE IN MATRIX TO ADJASANCY LIST, LEETCODE
// 4) NUMBER OF ISLANDS MATRIX, LEETCODE
// 5) FLOOD FILL ALGORITHM MATRIX, LEETCODE
// 6) ROTTEN ORANGES BFS , LEETCODE
// 7) DETECT A CYCLE IN UNDIRECTED GRAPH BFS , GEEKS FOR GEEKS
// 8) Distance of nearest cell having 1, BFS geeks for geeks
// 9) Surrounded Regions replace o with x DFS technique leetcode question solved on leetcode
// 10) Number of distinct islands.... solved in gfg
// 11) Topological sorting solved on GFG technique DFS datastructure STACK
// 12) Topological sorting solved using khan's algorithm modified bfs technique solved gfg
// 13) DETECT A CYCLE DIRECTED GRAPH WITH kahn's algorithm bfs IN DIRECTED GRAPH solved gfg
// 14) DETECT A CYCLE DIRECTED GRAPH WITH DFS TECHNIQUE IN DIRECTED GRAPH not solved anywhere
// 15) Course Schedule One and Two
// 16) Find Eventual Safe States in kahn's algorithm modified BFS technique solved on LEETCODE reversed graph
// 17) Alien dictionary hard code using kahn's algorithm solved on GFG
// 18) Shortest path in Directed Acyclic Graph using topological DFS algorithm gfg not provide js option
// 19) Shortest path in Undirected Graph having unit distance using normal bfs algorithm,,, same above
// 20) Word Ladder one using BFG traversal technique....My own code more time reduce using array solved on leetcode and gfg both platform
// 21) Word Ladder Two using BFG traversal technique solved on geeks for geeks

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
// // who are connected within 4 direction that's all count single islands so don't mixed up
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
// 0) 0    1  // total 4 row 2 column output = 1... 0s means water 1s means land check with 4 direction
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

//     // for (let i = 0; i < grid.length; i++) {
//     //   for (let j = 0; j < grid[0].length; j++) {
//     //     if (grid[i][j] === 1 && !visitedArray[i][j]) {
//     //       return -1;
//     //     }
//     //   }
//     // } or
//     if (count !== countFresh) return -1;
//     return time;
//   }
// }

// let grid = [
//   [2, 1, 1],
//   [1, 1, 1],
//   [0, 1, 2],
// ];

// let grid = [
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1],
// ];

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
// first value is not visited node and second one is parent of the node simple buddy...
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
//       // this one if multiple component graph, for this code
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
//       .map(() => new Array(grid[0].length).fill(Number.MAX_SAFE_INTEGER));

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
//     // this is the perfect code when you put on the leetcode you got one error 0 undefined that time you will interchange the below two for loop why because as chatGPT first column check before row that's the common practice without affecting solution
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
// Number of distinct islands.... solved in gfg becasuse leetcode want to make subscription

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
//     // // both loops are same you can use anyone.// find indegree of each vertex
//     // for (let i = 0; i < v; i++) {
//     //   for (let j = 0; j < adj[i].length; j++) {
//     //     let increasing = adj[i][j];
//     //     indegree[increasing]++;
//     //   }
//     // }

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
// // reverse edgess not adjlist
//     let reversedAdj = new Array(graph.length).fill(null).map(() => []);

//     let indegree = new Array(graph.length).fill(0);
// /// /// reverse all the edges
//     for (let i = 0; i < graph.length; i++) {
//       for (let adj of graph[i]) {
//         reversedAdj[adj].push(i);
//         indegree[i]++;
//       }
//     }
// /// after reversed edges just simple concept no chaos
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

// ---------------------------------------------------------------------------------
// Verifying an Alien Dictionary solved on leetcode it's an easy problem

// var isAlienSorted = function (words, alienOrder) {
//   let compareWords = (words1, words2, alienOrder) => {
//     let n = Math.min(words1.length, words2.length);
//     for (let i = 0; i < n; i++) {
//       let char1 = words1[i];
//       let char2 = words2[i];

//       if (char1 !== char2) {
//         return alienOrder.get(char1) < alienOrder.get(char2);
//       }
//     }
//     return words1.length <= words2.length;
//   };

//   let alienCharOrder = new Map();
//   for (let i = 0; i < alienOrder.length; i++) {
//     alienCharOrder.set(alienOrder[i], i);
//   }
//   console.log(alienCharOrder);
//   for (let j = 0; j < words.length - 1; j++) {
//     if (!compareWords(words[j], words[j + 1], alienCharOrder)) {
//       return false;
//     }
//   }
//   return true;
// };

// const words = ["word", "world", "row"];
// // in alien order we assign 0 to 25 according to this h assigned 0 and l assigned 1 checking which one letter mismatch so we got initially mismatch the string h and l that's why i given to example this h---0 < l ---1 so true
// const order = "hlabcdefgijkmnopqrstuvwxyz";
// console.log(isAlienSorted(words, order));

// ---------------------------------------------------------------------------------
// Alien dictionary hard code using kahn's algorithm solved on GFG
// class Solution {
//   // usual Kahn's process if you don't know just go back read the kahn's blog.
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

//   findOrder(dict, n, k) {
//     let createAdjList = new Array(k);
//     for (let i = 0; i < k; i++) {
//       createAdjList[i] = [];
//     }
//     console.log(createAdjList);

//     for (let i = 0; i < n - 1; i++) {
//       // loop for extract words from the array
//       let strOne = dict[i];
//       let strTwo = dict[i + 1];

//       let len = Math.min(strOne.length, strTwo.length);
//       // after extracted words fetch each words from that extracted words.
//       for (let j = 0; j < len; j++) {
//         if (strOne[j] != strTwo[j]) {
//           createAdjList[strOne[j].charCodeAt(0) - 97].push(
//             strTwo[j].charCodeAt(0) - 97
//           );
//           break;
//         }
//       }
//     }
//     // this one last process after doing all the kahn's process okay don't see at initially...
//     let topo = this.kahnsAlgo(k, createAdjList);
//     // this one more efficient method as well as you can directly change the string example this one escape from the error time limit exceeded
//     let changeString = [];
//     for (let changeChar of topo) {
//       changeString.push(String.fromCharCode(changeChar + 97));
//     }
//     return changeString.join(" ");
//   }
// }

// let alienDic = ["baa", "abcd", "abca", "cab", "cad"];
// let nOfLength = 5;
// let standardAlbha = 4;

// const data = new Solution();
// let output = data.findOrder(alienDic, nOfLength, standardAlbha);
// console.log(output);

// ---------------------------------------------------------------------------------

// Shortest path in Directed Acyclic Graph using topological algorithm we don't solve this problem anywhere because gfg doesn't allowed javascript in this problem, leetcode didn't show the question

// class Solution {
//   topoDfs(node, visited, stack, adjList) {
//     visited[node] = true;
//     for (let neighbor of adjList[node]) {
//       let joiningV = neighbor[0];
//       if (!visited[joiningV]) {
//         this.topoDfs(joiningV, visited, stack, adjList);
//       }
//     }
//     stack.push(node);
//   }

//   Graph(m, n, edges) {
//     let adj = new Array(n).fill(null).map(() => []);

//     // console.log(adj);
//     for (let i = 0; i < m; i++) {
//       let U = edges[i][0];
//       let V = edges[i][1];
//       let W = edges[i][2];
//       adj[U].push([V, W]);
//     }
//     console.log(adj, "adjList");
//     let visited = new Array(n).fill(false);
//     let stack = [];
//     for (let i = 0; i < n; i++) {
//       if (!visited[i]) {
//         this.topoDfs(i, visited, stack, adj);
//       }
//     }
//     console.log(stack, "stack");

//     let distance = new Array(n).fill(Infinity);
//     distance[0] = 0;

//     while (stack.length > 0) {
//       let topNode = stack.pop();
//       console.log(topNode, "topNode");
//       for (let adjacent of adj[topNode]) {
//         let v = adjacent[0];
//         let weight = adjacent[1];
//         if (distance[topNode] + weight < distance[v]) {
//           distance[v] = distance[topNode] + weight;
//         }
//       }
//     }
//     return distance;
//   }
// }

// let edges = [
//   [0, 1, 2],
//   [0, 4, 1],
//   [4, 5, 4],
//   [4, 2, 2],
//   [1, 2, 3],
//   [2, 3, 6],
//   [5, 3, 1],
// ];

// let m = edges.length;
// let n = 6;

// let data = new Solution();
// let output = data.Graph(m, n, edges);
// console.log(output, "your shortest path");
//// output of this problem before write code 0 2 3 6 1 5

// ---------------------------------------------------------------------------------

//Shortest path in Undirected Graph having unit distance using normal bfs algorithm. we don't solve this problem anywhere because gfg doesn't allowed javascript in this problem, leetcode didn't show the question

// class Solution {
//   shortest(n, m, edges, src) {
//     let adj = new Array(n).fill(null).map(() => []);

//     for (let adjacent of edges) {
//       adj[adjacent[0]].push(adjacent[1]);
//       adj[adjacent[1]].push(adjacent[0]);
//     }
//     console.log(adj, "your adj List");

//     let distance = new Array(n).fill(1e9);
//     // why so we make 0 with src because the questions strictly says we go from the src to all node's that's we first push into the queue simple don't chaos read the question
//     distance[src] = 0;
//     let queue = [];
//     queue.push(src);

//     while (queue.length > 0) {
//       let node = queue.shift();
//       console.log(node, "this is node ");
//       for (let neighbor of adj[node]) {
//         // +1 means unit distance of weight
//         if (distance[node] + 1 < distance[neighbor]) {
//           distance[neighbor] = 1 + distance[node];
//           queue.push(neighbor);
//         }
//       }
//     }
//     // if it is unreachable to reach any vertex, then return -1 for that vertex that's the loop
//     let ans = new Array(n).fill(-1);
//     for (let i = 0; i < n; i++) {
//       if (distance[i] != 1e9) {
//         ans[i] = distance[i];
//       }
//     }
//     return ans;
//   }
// }

// let edges = [
//   [0, 1],
//   [0, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [1, 2],
//   [2, 6],
//   [6, 7],
//   [7, 8],
//   [6, 8],
// ];

// let n = 9;
// let m = 10;
// let src = 0;

// let data = new Solution();
// let output = data.shortest(n, m, edges, src);
// console.log(output, "this one is yours");

// Output: 0 1 2 1 2 3 3 4 4

// ---------------------------------------------------------------------------------

// Word Ladder one using BFG traversal technique....My own code more time reduce using array solved on leetcode and gfg both platform

// var ladderLength = function (beginWord, endWord, wordList) {
//   let queue = [];
//   queue.push([beginWord, 1]);
//   let setDs = new Set();
//   for (let i = 0; i < wordList.length; i++) {
//     setDs.add(wordList[i]);
//   }
//   setDs.delete(beginWord);

//   while (queue.length > 0) {
//     let [currentWord, steps] = queue.shift();
//     let outputLoop = [];
//     // for (let i = 0; i < individualWords.length; i++) {
//     if (currentWord === endWord) return steps;
//     // }
//     for (let i = 0; i < currentWord.length; i++) {
//       //   let extractFirstLetter = individualWords[word];
//       for (let j = "a".charCodeAt(0); j <= "z".charCodeAt(0); j++) {
//         let data = currentWord.split("");
//         data[i] = String.fromCharCode(j);
//         let updated = data.join("");
//         outputLoop.push(updated);
//       }
//     }

//     for (let i = 0; i < outputLoop.length; i++) {
//       if (setDs.has(outputLoop[i])) {
//         setDs.delete(outputLoop[i]);
//         queue.push([outputLoop[i], steps + 1]);
//       }
//     }
//   }

//   return 0;
// };

// let beginWord = "hit";
// let endWord = "cog";
// let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

// console.log(
//   ladderLength(beginWord, endWord, wordList),
//   "your transformation sequence"
// );

// ---------------------------------------------------------------------------------

// word ladder 2 using bfs technique and solved on geeks for geeks

// function ladderLength(beginWord, endWord, wordList) {
//   for (let i = 0; i < wordList.length; i++) {
//     if (!wordList[i] === endWord) {
//       return [];
//     }
//   }

//   let setDs = new Set(wordList);
//   let queue = [];
//   queue.push([beginWord]);
//   let usedWordOnLevel = new Set();
//   usedWordOnLevel.add(beginWord);
//   let level = 0;
//   let ans = [];

//   while (queue.length > 0) {
//     let levelString = queue.shift(); // Change pop to shift to correctly process BFS.
//     console.log(levelString, "levelString");

//     if (levelString.length > level) {
//       level++;
//       for (let used of usedWordOnLevel) {
//         console.log(used, "used");
//         setDs.delete(used);
//       }
//     }

//     let strTrans = levelString[levelString.length - 1];
//     console.log(strTrans, "strTrans");

//     if (strTrans === endWord) {
//       ans.push([...levelString]); // Fix to correctly store the transformation sequence.
//     }

//     for (let i = 0; i < strTrans.length; i++) {
//       for (let j = "a".charCodeAt(0); j <= "z".charCodeAt(0); j++) {
//         let splits = strTrans.split("");
//         splits[i] = String.fromCharCode(j);
//         let update = splits.join("");

//         if (setDs.has(update)) {
//           let newLevelString = [...levelString, update];
//           queue.push(newLevelString);
//           usedWordOnLevel.add(update); // Change to add to correctly track used words.
//         }
//       }
//     }
//   }
//   return ans;
// }

// let beginWord = "hit";
// let endWord = "cog";
// let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

// console.log(
//   ladderLength(beginWord, endWord, wordList),
//   "your transformation sequence"
// );

// ---------------------------------------------------------------------------------

// class Solution {
//   dijkstra(V, adj, S) {
//     let setDs = new Set();
//     let distance = new Array(V).fill(Infinity);

//     distance[S] = 0;

//     setDs.add([0, S]);

//     while (setDs.size !== 0) {
//       let extraction = setDs.values().next().value;
//       console.log(extraction, "while extraction");
//       let node = extraction[1];
//       let dist = extraction[0];
//       setDs.delete(extraction);

//       for (let neighbor of adj[node]) {
//         console.log(neighbor, "neighbor before extract");
//         let neighNode = neighbor[0];
//         let neighWeight = neighbor[1];
//         // 1 3
//         // 0 6
//         // console.log(neighNode, neighWeight);
//         if (dist + neighWeight < distance[neighNode]) {
//           if (distance[neighNode] != Infinity) {
//             // simply deleted node from the stack because not need to do repetetive sum that's why
//             setDs.delete([distance[neighNode], neighNode]);
//           }

//           distance[neighNode] = dist + neighWeight;
//           setDs.add([distance[neighNode], neighNode]);
//         }
//       }
//     }

//     return distance;
//   }
// }

// let totalVertex = 3;
// let source = 2;
// let adjList = [
//   [
//     [1, 1],
//     [2, 6],
//   ],
//   [
//     [2, 3],
//     [0, 1],
//   ],
//   [
//     [1, 3],
//     [0, 6],
//   ],
// ];

// let data = new Solution();
// let output = data.dijkstra(totalVertex, adjList, source);
// console.log(output, "this you shortest path in dj algo");

// ---------------------------------------------------------------------------------

// Shortest Path in Weighted undirected graph, this is the correct code, you can convert into this code c++ or java or python, then you will apply geeks for geeks,,,,, using dijkstra algorithm we don't have any platform to check the code gfg doesn't provide js option leetcode has not this problem but this is the perfect code i'm using set but in the youtube only have priority queue format optimized problem

// class Solution {
//   dijkstraShortesPath(n, m, edges) {
//     let adjList = new Array(n + 1).fill().map(() => []);
//     console.log(adjList);

//     for (let makeEdgeConnection of edges) {
//       adjList[makeEdgeConnection[0]].push([
//         makeEdgeConnection[1],
//         makeEdgeConnection[2],
//       ]);
//       adjList[makeEdgeConnection[1]].push([
//         makeEdgeConnection[0],
//         makeEdgeConnection[2],
//       ]);
//     }
//     // console.log(adjList, "your final adjList");

//     let setDs = new Set();
//     let distance = new Array(n + 1).fill(Infinity);
//     let parent = new Array(n + 1);

//     for (let i = 1; i <= n; i++) {
//       parent[i] = i;
//     }

//     distance[1] = 0;
//     setDs.add([0, 1]); // here 1 position is call node and 0 position called distance or weight of the from this one

//     while (setDs.size !== 0) {
//       let extract = setDs.values().next().value;
//       let node = extract[1];
//       let dist = extract[0];
//       setDs.delete(extract);
//       console.log("Distance :", dist, "Node :", node);

//       for (let adjacent of adjList[node]) {
//         let adjaNode = adjacent[0];
//         let adjaWeight = adjacent[1];

//         if (dist + adjaWeight < distance[adjaNode]) {
//           if (distance[adjaNode] !== Infinity) {
//             setDs.delete(distance[adjaNode], adjaNode);
//           }

//           distance[adjaNode] = dist + adjaWeight;
//           setDs.add([distance[adjaNode], adjaNode]);
//           parent[adjaNode] = node;
//         }
//       }
//     }
//     if (distance[n] === Infinity) return -1;
//     console.log(distance, "distance");
//     console.log(parent, "Parent");
//     let path = [];
//     let node = n; // we are gonna check n means 5 where it is come from the parent of the node that's the code below here don't panic buddy

//     while (parent[node] !== node) {
//       path.push(node);
//       node = parent[node];
//     }
//     path.push(1);
//     console.log(path, "path");

//     let yourPath = path.reverse();
//     return yourPath;
//   }
// }

// let n = 5;
// let m = 6;
// let edges = [
//   [1, 2, 2],
//   [2, 5, 5],
//   [2, 3, 4],
//   [1, 4, 1],
//   [4, 3, 3],
//   [3, 5, 1],
// ];

// let data = new Solution();
// let output = data.dijkstraShortesPath(n, m, edges);
// console.log(output, "this is your shortest path");

// ---------------------------------------------------------------------------------

// Shortest Distance in a Binary Maze using bfs  queue data structure solved on gfg

// class Solution {
//   binaryMaze(src, destiny, grid) {
//     if (
//       grid[src[0]] === grid[destiny[0]] &&
//       grid[src[1]] === grid[destiny[1]]
//     ) {
//       return 0;
//     } // sometimes the src and destiny might same position that time we want to return 0

//     let queue = [];
//     let distance = new Array(grid.length)
//       .fill()
//       .map(() => new Array(grid[0].length).fill(Infinity));
//     // -------------->
//     distance[src[0]][src[1]] = 0;
//     // console.log(distance);

//     queue.push([0, src[0], src[1]]);
//     // console.log(queue);

//     while (queue.length !== 0) {
//       let [dist, row, col] = queue.shift();
//       console.log(dist, row, col, "extraction value");
//       let directions = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1],
//       ];
//       queue.pop();

//       for (let i = 0; i < 4; i++) {
//         let newRow = row + directions[i][0];
//         let newCol = col + directions[i][1];

//         if (
//           newRow >= 0 &&
//           newRow < grid.length &&
//           newCol >= 0 &&
//           newCol < grid[0].length &&
//           grid[newRow][newCol] === 1 &&
//           dist + 1 < distance[newRow][newCol]
//         ) {
//           distance[newRow][newCol] = dist + 1;
//                //   met your destination
//           if (newRow === destiny[0] && newCol === destiny[1]) return dist + 1;
//           queue.push([dist + 1, newRow, newCol]);
//         }
//       }
//     }
//     return -1;
//   }
// }

// let board = [
//   [1, 1, 1, 1],
//   [1, 1, 0, 1],
//   [1, 1, 1, 1],
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
// ];
// let source = [0, 1];
// let destination = [2, 2];
// // our task is find the shortest distance between a given source cell to a destination cell

// let data = new Solution();
// let output = data.binaryMaze(source, destination, board);
// console.log(output, "this is your shortest distance");

// ---------------------------------------------------------------------------------

// Cheapest flight within k stops solved on leetcode using dijkstra set data structure

// class Solution {
//   cheapestFlight(n, flights, src, destiny, k) {
//     let adjList = new Array(n).fill().map(() => []);
//     // make adjacancy list of directed graph
//     for (let edge of flights) {
//       adjList[edge[0]].push([edge[1], edge[2]]);
//     }

//     let setDs = new Set();
//     let distance = new Array(n).fill(Infinity);

//     distance[src] = 0;
//     setDs.add([0, src, 0]);

//     while (setDs.size !== 0) {
//       let extract = setDs.values().next().value;

//       let stops = extract[0];
//       let node = extract[1];
//       let cost = extract[2];

//       setDs.delete(extract);

//       for (let adjacent of adjList[node]) {
//         let adjNode = adjacent[0];
//         let adjCost = adjacent[1];

//         if (stops > k) break;

//         if (cost + adjCost < distance[adjNode] && stops <= k) {
//           if (distance[adjNode] !== Infinity) {
//             setDs.delete(stops, adjNode, cost + adjCost);
//           }

//           distance[adjNode] = cost + adjCost;
//           setDs.add([stops + 1, adjNode, cost + adjCost]);
//         }
//       }

//       //   console.log(stops, node, dist);
//     }

//     // console.log(distance);

//     if (distance[destiny] === Infinity) return -1;
//     return distance[destiny];
//   }
// }

// let graph = [
//   [0, 1, 100],
//   [1, 2, 100],
//   [2, 0, 100],
//   [1, 3, 600],
//   [2, 3, 200],
// ];

// let src = 0;
// let destination = 3;
// let numberOfStops = 1;
// let totalNodes = 4;

// let data = new Solution();
// let ouput = data.cheapestFlight(
//   totalNodes,
//   graph,
//   src,
//   destination,
//   numberOfStops
// );

// console.log(ouput, "Your cheapest flight");

// ---------------------------------------------------------------------------------

// Number of ways to reach destination but in the leecode we got large input something but this one is correct code

// class Solution {
//   numberOfWaysToReachDestination(n, roads) {
//     let adjList = new Array(n).fill().map(() => []);

//     for (let edge of roads) {
//       adjList[edge[0]].push([edge[1], edge[2]]);
//       adjList[edge[1]].push([edge[0], edge[2]]);
//     }

//     // console.log(adjList);

//     let distance = new Array(n).fill(Infinity);
//     let ways = new Array(n).fill(0);
//     let setDs = new Set();
//     let modulo = 10 ** 9 + 7;

//     distance[0] = 0;
//     ways[0] = 1;

//     setDs.add([0, 0]); // 0th index is distance of edges 1st index that node

//     while (setDs.size > 0) {
//       let extract = setDs.values().next().value;
//       let node = extract[1];
//       let dist = extract[0];

//       // console.log(node, dist, "this extracted values");

//       setDs.delete(extract);

//       for (let adjacent of adjList[node]) {
//         let adjNode = adjacent[0];
//         let adjWeight = adjacent[1];

//         if (dist + adjWeight < distance[adjNode]) {
//           if (distance[adjNode] !== Infinity) {
//             setDs.delete([distance[adjNode], adjNode]);
//           }

//           distance[adjNode] = dist + adjWeight;
//           setDs.add([dist + adjWeight, adjNode]);
//           ways[adjNode] = ways[node]; //  we are fill the values from the node
//         } else if (dist + adjWeight === distance[adjNode]) {
//           ways[adjNode] = (ways[adjNode] + ways[node]) % modulo;
//           // console.log(`Ways[${adjNode}] updated to ${ways[adjNode]}`);
//         }
//       }
//     }
//     return ways[n - 1] % modulo;
//   }
// }

// class Solution {
//   numberOfWaysToReachDestination(n, roads) {
//     let adjList = new Array(n).fill().map(() => []);

//     for (let edges of roads) {
//       adjList[edges[0]].push([edges[1], edges[2]]);
//       adjList[edges[1]].push([edges[0], edges[2]]);
//     }

//     // console.log(adjList);

//     let setDs = new Set();
//     let distance = new Array(n).fill(1e9);
//     let ways = new Array(n).fill(0);

//     distance[0] = 0; // as usual same as distance of itself node
//     ways[0] = 1; // you only one way to reach itself that's we fill with 1

//     setDs.add([0, 0]);

//     let modulo = 1e9 + 7;

//     while (setDs.size > 0) {
//       //  console.log(setDs, "setds value");
//       //  console.log(ways, "ways");
//       let extraction = setDs.values().next().value;

//       let dist = extraction[0];
//       let node = extraction[1];

//       // console.log(extraction, "ext");

//       setDs.delete(extraction);

//       for (let adjacent of adjList[node]) {
//         //  console.log(adjacent, "adjacent of the node");
//         let adjnode = adjacent[0];
//         let adjweight = adjacent[1];

//         //  console.log(adjnode, adjweight);

//         if (dist + adjweight < distance[adjnode]) {
//           let temp = [distance[adjnode], adjnode];
//           if (distance[adjnode] !== 1e9) {
//             console.log(temp, "temp");
//             setDs.delete(temp);
//           }

//           distance[adjnode] = dist + adjweight;
//           setDs.add([dist + adjweight, adjnode]);
//           ways[adjnode] = ways[node];
//         } else if (dist + adjweight == distance[adjnode]) {
//           // ways[adjnode] += ways[node];
//           // ways[adjnode] %= modulo;
//           ways[adjnode] = ways[adjnode] + ways[node];
//         }
//       }
//     }
//     return ways[n - 1] % modulo;
//   }
// }

// function priorityQueue() {
//   let queue = [];

//   function enqueue(distan, node) {
//     queue.push([distan, node]);
//     sortQueue();
//   }

//   function dequeue() {
//     return queue.shift();
//   }

//   function sortQueue() {
//     queue.sort((a, b) => {
//       if (a[0] !== b[0]) {
//         return a[0] - b[0];
//       } else {
//         return a[1] - b[1];
//       }
//     });
//   }
//   function isEmpty() {
//     return queue.length === 0;
//   }

//   return { enqueue, dequeue, sortQueue, isEmpty };
// }

// function numberOfWaysToReachDestination(n, roads) {
//   let adjList = new Array(n).fill(null).map(() => []);

//   for (let edges of roads) {
//     adjList[edges[0]].push([edges[1], edges[2]]);
//     adjList[edges[1]].push([edges[0], edges[2]]);
//   }

//   let priority = priorityQueue();
//   let distance = new Array(n).fill(Infinity);
//   let ways = new Array(n).fill(0);
//   let modulo = 10 ** 9 + 7;

//   distance[0] = 0;
//   ways[0] = 1;

//   priority.enqueue(0, 0);

//   while (!priority.isEmpty()) {
//     let extraction = priority.dequeue();
//     let node = extraction[1];
//     let dist = extraction[0];

//     console.log(node, dist);

//     for (let adjacent of adjList[node]) {
//       let adjnode = adjacent[0];
//       let adjweight = adjacent[1];

//       if (dist + adjweight < distance[adjnode]) {
//         distance[adjnode] = dist + adjweight;
//         priority.enqueue(distance[adjnode], adjnode);
//         ways[adjnode] = ways[node] % modulo;
//       } else if (dist + adjweight === distance[adjnode]) {
//         ways[adjnode] = (ways[adjnode] + ways[node]) % modulo;
//       }
//     }
//   }
//   return ways[n - 1] % modulo;
// }

// let roads = [
//   //// 12
//   [1, 0, 2348],
//   [2, 1, 2852],
//   [2, 0, 5200],
//   [3, 1, 12480],
//   [2, 3, 9628],
//   [4, 3, 7367],
//   [4, 0, 22195],
//   [5, 4, 5668],
//   [1, 5, 25515],
//   [0, 5, 27863],
//   [6, 5, 836],
//   [6, 0, 28699],
//   [2, 6, 23499],
//   [6, 3, 13871],
//   [1, 6, 26351],
//   [5, 7, 6229],
//   [2, 7, 28892],
//   [1, 7, 31744],
//   [3, 7, 19264],
//   [6, 7, 5393],
//   [2, 8, 31998],
//   [8, 7, 3106],
//   [3, 8, 22370],
//   [8, 4, 15003],
//   [8, 6, 8499],
//   [8, 5, 9335],
//   [8, 9, 5258],
//   [9, 2, 37256],
//   [3, 9, 27628],
//   [7, 9, 8364],
//   [1, 9, 40108],
//   [9, 5, 14593],
//   [2, 10, 45922],
//   [5, 10, 23259],
//   [9, 10, 8666],
//   [10, 0, 51122],
//   [10, 3, 36294],
//   [10, 4, 28927],
//   [11, 4, 25190],
//   [11, 9, 4929],
//   [11, 8, 10187],
//   [11, 6, 18686],
//   [2, 11, 42185],
//   [11, 3, 32557],
//   [1, 11, 45037],
// ];

// let roads = [
//   // //7
//   [0, 6, 7],
//   [0, 1, 2],
//   [1, 2, 3],
//   [1, 3, 3],
//   [6, 3, 3],
//   [3, 5, 1],
//   [6, 5, 1],
//   [2, 5, 1],
//   [0, 4, 5],
//   [4, 6, 2],
// ];

// let roads = [
//   //// 5
//   [0, 1, 1],
//   [1, 2, 4],
//   [0, 4, 3],
//   [3, 2, 5],
//   [3, 4, 1],
//   [3, 0, 5],
//   [1, 3, 1],
// ];

// let numberOfNodes = 7;

// console.log(numberOfWaysToReachDestination(numberOfNodes, roads), "your ways");

// ---------------------------------------------------------------------------------

// floyd warshall algorithm for find all the shortest path algorithm, solved on gfg

// class Solution {
//   floydWarshall(matrix) {
//     let n = matrix.length;
//     // first if any cell has -1 you fill with 1e9 Infinity value// not necessory to do this for understanding guyz simple don't panic
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (matrix[i][j] === -1) {
//           matrix[i][j] = 1e9;
//         }
//         if (i === j) matrix[i][j] = 0;
//       }
//     }

//     for (let k = 0; k < n; k++) {
//       for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//           matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
//         }
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (matrix[i][j] === 1e9) {
//           matrix[i][j] = -1;
//         }
//       }
//     }
//     return matrix;
//   }
// }

// let grid = [
//   [0, 2, -1, -1],
//   [1, 0, 3, -1],
//   [-1, -1, 0, -1],
//   [3, 5, 4, 0],
// ];

// let data = new Solution();
// let output = data.floydWarshall(grid);
// console.log(output, "your all pairs shortest paths");

// ---------------------------------------------------------------------------------

// Find the City With the Smallest Number of Neighbors at a Threshold Distance uding dijkstra algorithm priority queue own code solved on leetcode and gfg as well as...

// class Solution {
//   priorityQueue() {
//     // step two
//     let queue = [];

//     function enqueue(distan, node) {
//       queue.push([distan, node]);
//       sortQueue();
//     }

//     function dequeue() {
//       return queue.shift();
//     }

//     function sortQueue() {
//       queue.sort((a, b) => {
//         if (a[0] !== b[0]) {
//           return a[0] - b[0];
//         } else {
//           return a[1] - b[1];
//         }
//       });
//     }
//     function isEmpty() {
//       return queue.length === 0;
//     }

//     return { enqueue, dequeue, sortQueue, isEmpty };
//   }

//   dijkstra(graph, start) {
//     // step three
//     let distance = new Array(graph.length).fill(Number.MAX_SAFE_INTEGER);

//     let pq = this.priorityQueue();
//     distance[start] = 0;
//     pq.enqueue(start, 0);

//     while (!pq.isEmpty()) {
//       let extract = pq.dequeue();
//       let node = extract[0];
//       let dist = extract[1];

//       for (let adjacent of graph[node]) {
//         let adjNode = adjacent[0];
//         let adjWeight = adjacent[1];

//         if (dist + adjWeight < distance[adjNode]) {
//           distance[adjNode] = dist + adjWeight;
//           pq.enqueue(adjNode, dist + adjWeight);
//         }
//       }
//     }
//     return distance;
//   }

//   findTheCity(n, edges, thresh) {
//     // step one
//     let adjList = new Array(n).fill(null).map(() => []);
//     let countCity = Infinity;
//     let cityCount = -1;

//     for (let createEdge of edges) {
//       adjList[createEdge[0]].push([createEdge[1], createEdge[2]]);
//       adjList[createEdge[1]].push([createEdge[0], createEdge[2]]);
//     }

//     for (let cities = 0; cities < n; cities++) {
//       let distanceofNeighbor = this.dijkstra(adjList, cities);

//       let count = 0;
//       for (let adjCities = 0; adjCities < n; adjCities++) {
//         if (distanceofNeighbor[adjCities] <= thresh) {
//           count++;
//         }
//       }

//       if (count <= countCity) {
//         countCity = count;
//         cityCount = cities;
//       }
//     }
//     return cityCount;
//   }
// }

// class Solution {
//   findTheCity(n, edges, thresh) {
//     let matrix = new Array(n).fill().map(() => new Array(n).fill(Infinity));

//     let countCity = Infinity;
//     let cityNo = -1;

//     for (let edge of edges) {
//       matrix[edge[0]][edge[1]] = edge[2];
//       matrix[edge[1]][edge[0]] = edge[2];
//     }

//     for (let i = 0; i < n; i++) {
//       matrix[i][i] = 0;
//     }

//     for (let k = 0; k < n; k++) {
//       for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//           // // not necessory but it's easy to avoid some unnecessory combinations simple
//           if (matrix[i][k] === Infinity || matrix[j][k] === Infinity) {
//             continue;
//           }

//           matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
//         }
//       }
//     }

//     for (let city = 0; city < n; city++) {
//       let count = 0;
//       for (let adjCities = 0; adjCities < n; adjCities++) {
//         if (matrix[city][adjCities] <= thresh) {
//           count++;
//         }
//       }

//       if (count <= countCity) {
//         countCity = count;
//         cityNo = city;
//       }
//     }
//     return cityNo;
//   }
// }

// let edges = [
//   [0, 1, 3],
//   [1, 2, 1],
//   [1, 3, 4],
//   [2, 3, 1],
// ];
// let n = 4;
// let threshHold = 4;

// let data = new Solution();
// let output = data.findTheCity(n, edges, threshHold);
// console.log(output, "yours");

// ----------------------------------------------------------------------------------

// minimum spanning tree using prim's algorithm... this one is the correct version on the gfg no one haven't posted js solution everyone got some error but my code passed all testcases but this code takes more time let's see

// class Solution {
//   priorityQueue() {
//     // step two
//     let queue = [];

//     function enqueue(distan, node) {
//       queue.push([distan, node]);
//     }

//     function dequeue() {
//       sortQueue();
//       return queue.shift();
//     }

//     function sortQueue() {
//       queue.sort((a, b) => {
//         if (a[0] !== b[0]) {
//           return a[0] - b[0];
//         } else {
//           return a[1] - b[1];
//         }
//       });
//     }
//     function isEmpty() {
//       return queue.length === 0;
//     }

//     return { enqueue, dequeue, sortQueue, isEmpty };
//   }

//   primsalgo(arr, V) {
//     let graph = new Array(V).fill().map(() => []);

//     for (let edges of arr) {
//       graph[edges[0]].push([edges[1], edges[2]]);
//       graph[edges[1]].push([edges[0], edges[2]]);
//     }

//     console.log(graph);

//     let visited = new Array(graph.length).fill(false);
//     let pq = this.priorityQueue();

//     pq.enqueue(0, 0);

//     let sum = 0;

//     while (!pq.isEmpty()) {
//       let extract = pq.dequeue();
//       let node = extract[1];
//       let dist = extract[0];
//       // if someone alrady visted the node already we don't want to do any more that'
//       if (visited[node]) {
//         continue;
//       }

//       visited[node] = true;

//       sum = sum + parseInt(dist);

//       for (let adjacent of graph[node]) {
//         let adjnode = adjacent[0];
//         let adjweight = adjacent[1];

//         if (!visited[adjnode]) {
//           pq.enqueue(adjweight, adjnode);
//         }
//       }
//     }
//     return sum;
//   }
// }

// const graphInput = [
//   ["0", "1", "5"],
//   ["1", "2", "3"],
//   ["0", "2", "1"],
// ];
// let v = 3;

// let data = new Solution();
// let output = data.primsalgo(graphInput, v);
// console.log(output, "your MST weight");

// ----------------------------------------------------------------------------------

// class DisJointSet {
//   constructor(n) {
//     this.rank = [];
//     this.parent = [];
//     this.size = [];

//     for (let i = 0; i <= n; i++) {
//       this.rank.push(0);
//       this.parent.push(i);
//       this.size.push(1); // intially all the nodes has 1 size of data
//     }
//   }

//   findUltimateParent(node) {
//     if (node === this.parent[node]) {
//       return node;
//     }
//     return (this.parent[node] = this.findUltimateParent(this.parent[node]));
//   }

//   //   DisjointUnionRank(u, v) {
//   //     this.ult_U = this.findUltimateParent(u);
//   //     this.ult_V = this.findUltimateParent(v);

//   //     if (this.ult_U === this.ult_V) return; // if your u and v belonging to same union return dont noeed to do anyting below

//   //     if (this.rank[this.ult_V] < this.rank[this.ult_U]) {
//   //       this.parent[this.ult_U] = this.ult_U;
//   //     } else if (this.rank[this.ult_V] < this.rank[this.ult_U]) {
//   //       this.parent[this.ult_U] = this.ult_V;
//   //     } else {
//   //       this.parent[this.ult_V] = this.ult_U;
//   //       this.rank[this.ult_U]++;
//   //     }

//   //     console.log(this.parent, "dasfdf");
//   //   }

//   DisJointUnionSize(u, v) {
//     this.ult_U = this.findUltimateParent(u);
//     this.ult_V = this.findUltimateParent(v);

//     if (this.ult_U === this.ult_V) return;

//     if (this.size[this.ult_U] < this.size[this.ult_V]) {
//       this.parent[this.ult_U] = this.ult_V;
//       this.size[this.ult_V] += this.size[this.ult_U];
//     } else {
//       this.parent[this.ult_V] = this.ult_U;
//       this.size[this.ult_V] += this.size[this.ult_U];
//     }

//     console.log(this.parent);
//   }
// }

// let data = new DisJointSet(9);
// // console.log(data);

// data.DisJointUnionSize(1, 2);
// data.DisJointUnionSize(2, 3);
// data.DisJointUnionSize(4, 5);
// data.DisJointUnionSize(6, 7);
// data.DisJointUnionSize(5, 6);
// data.DisJointUnionSize(8, 9);

// if (data.findUltimateParent(3) === data.findUltimateParent(9)) {
//   console.log("same", "before");
// } else {
//   console.log("Not Same", "before");
// }

// data.DisJointUnionSize(3, 9);

// if (data.findUltimateParent(3) === data.findUltimateParent(9)) {
//   console.log("same", "after");
// } else {
//   console.log("Not Same", "after");
// }

// // ------------> ---------------> -------------->

// size is my choice why because we've already done a similar problem number of ways to reach destination that's why you can choose rank something your wish

// class DisJointSet {
//   constructor(n) {
//     this.size = [];
//     // everyone has a individual node the size of the node 1 as well as we know
//     // like 1, 2, 3, 4 means 1-> 1 size of node 2-> 1 size of node so that's we initially mentioned always the size of the all nodes 1
//     this.parent = [];

//     for (let i = 0; i <= n; i++) {
//       this.size.push(1);
//       this.parent.push(i);
//     }
//     // console.log(this.size, this.parent);
//   }

//   findUltimateParent(node) {
//     if (node === this.parent[node]) {
//       return node;
//     }
//     return (this.parent[node] = this.findUltimateParent(this.parent[node]));
//   }
//   disjointSetSize(u, v) {
//     let ult_u = this.findUltimateParent(u);
//     let ult_v = this.findUltimateParent(v);
//     // now we are goint to join some node ex 2 and 3 okay the 2 and 3 are belonging to same component already so don't want to do anything
//     if (ult_u === ult_v) return;

//     // if not they are not belonging to the same component let's connect with smaller to larger always...
//     if (this.size[ult_u] < this.size[ult_v]) {
//       this.parent[ult_u] = ult_v;
//       this.size[ult_v] += this.size[ult_u];
//     } else {
//       // if will there is equal size or grather of the ultu case you don't need to compare anything
//       // this means v oda parent ippo u equal ah iruntha neenga eppudi vena mathikkalam
//       // example 1, 2 both ultimate parent size array values are same 2 oda parent 1 like that based on the ultimate parent size buddy don't confuse
//       this.parent[ult_v] = ult_u;
//       this.size[ult_u] += this.size[ult_v];
//     }
//     console.log(this.parent, "parent");
//     console.log(this.size, "size of the value");
//   }

//   comparing(u, v) {
//     if (this.findUltimateParent(u) === this.findUltimateParent(v)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// let data = new DisJointSet(7);

// data.disjointSetSize(1, 2);
// data.disjointSetSize(2, 3);
// data.disjointSetSize(4, 5);
// data.disjointSetSize(6, 7);
// data.disjointSetSize(5, 7);

// let out = data.comparing(3, 7);

// if (out) console.log("Same Component");
// else console.log("Not same ");

// data.disjointSetSize(3, 7);

// let after = data.comparing(3, 7);

// if (after) console.log("After Same Component");
// else console.log(" After Not same ");

// // -------------------------------------------------------------------------------

// Kruskal's Algorithm with disjoint set data structure let's decode,,, this one is the correct code but we got TLE i think the gfg has js node version of 12

// class Solution {
//   disConstructor(n) {
//     this.size = [];
//     this.parent = [];

//     for (let i = 0; i <= n; i++) {
//       this.size.push(1);
//       this.parent.push(i);
//     }
//   }

//   findUltimateParent(node) {
//     if (node === this.parent[node]) {
//       return node;
//     }

//     return (this.parent[node] = this.findUltimateParent(this.parent[node]));
//   }

//   disjointsize(u, v) {
//     let ult_u = this.findUltimateParent(u);
//     let ult_v = this.findUltimateParent(v);

//     if (ult_u === ult_v) return;
//     // if they are not belonging to the same component do this
//     if (this.size[ult_u] < this.size[ult_v]) {
//       this.parent[ult_u] = ult_v;
//       this.size[ult_v] += this.size[ult_u];
//     } else {
//       this.parent[ult_v] = ult_u;
//       this.size[ult_u] += this.size[ult_v];
//     }
//     console.log(this.parent, "paren");
//   }

//   kruskal(edges, v) {
//     let sortedEdges = edges.sort((a, b) => a[2] - b[2]); // Sort based on weight
//     let mstWeight = 0;
//     this.disConstructor(v);

//     for (let extract of sortedEdges) {
//       let [u, v, weight] = extract;

//       let ult_u = this.findUltimateParent(u);
//       let ult_v = this.findUltimateParent(v);

//       if (ult_u !== ult_v) {
//         mstWeight += parseInt(weight);
//         this.disjointsize(u, v);
//       }
//     }

//     return mstWeight;
//   }
// }

// const graphInput = [
//   ["0", "1", "5"],
//   ["1", "2", "3"],
//   ["0", "2", "1"],
// ];
// let v = 3;

// let data = new Solution();
// let out = data.kruskal(graphInput, v);
// console.log(out, "your minimum tree edges");

// ------------------------------------------------------------------

// class Solution {
//   disConstructor(n) {
//     this.size = [];
//     this.parent = [];

//     for (let i = 0; i <= n; i++) {
//       this.size.push(1);
//       this.parent.push(i);
//     }
//   }

//   findUltimateParent(node) {
//     if (node === this.parent[node]) {
//       return node;
//     }

//     return (this.parent[node] = this.findUltimateParent(this.parent[node]));
//   }

//   disjointsize(u, v) {
//     //console.log(u, v);
//     let ult_u = this.findUltimateParent(u);
//     let ult_v = this.findUltimateParent(v);

//     if (ult_u === ult_v) return;
//     // if they are not belonging to the same component do this
//     if (this.size[ult_u] < this.size[ult_v]) {
//       this.parent[ult_u] = ult_v;
//       this.size[ult_v] += this.size[ult_u];
//     } else {
//       this.parent[ult_v] = ult_u;
//       this.size[ult_u] += this.size[ult_v];
//     }
//   }
// }
// function accountsMerge(accounts) {
//   let dss = new Solution();
//   const n = accounts.length;
//   let mapwithemail = new Map();
//   dss.disConstructor(n);
//   for (let i = 0; i < n; i++) {
//     for (let j = 1; j < accounts[i].length; j++) {
//       let emails = accounts[i][j];
//       // console.log(emails, "emails");
//       if (!mapwithemail.has(emails)) {
//         mapwithemail.set(emails, i);
//       } else {
//         dss.disjointsize(i, mapwithemail.get(emails));
//       }
//     }
//   }

//   let mappingMail = new Array(n).fill(null).map(() => []);

//   for (let extract of mapwithemail) {
//     let mail = extract[0];
//     let node = dss.findUltimateParent(extract[1]);
//     mappingMail[node].push(mail);
//   }
//   let ans = [];
//   //console.log(mappingMail, "before");
//   for (let i = 0; i < n; i++) {
//     if (mappingMail[i].length === 0) continue;
//     mappingMail[i].sort();

//     let temp = [];
//     temp.push(accounts[i][0], ...mappingMail[i]);
//     ans.push(temp);
//   }
//   return ans;
// }

// // console.log(mapwithemail, "map with mail");

// let input = [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];
// let output = accountsMerge(input);
// console.log(output, "your console");

// [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],
// ["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],
// ["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],
// ["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],
// ["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]

// let expect = [
//   ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];

// ---------------------------------------------------------------------------------

// number of islands 2 online query problem disjoint set() structure let's unwrap the problem solved on the gfg

// class Solution {
//   disConstructor(n) {
//     this.size = [];
//     this.parent = [];

//     for (let i = 0; i <= n; i++) {
//       this.size.push(1);
//       this.parent.push(i);
//     }
//   }

//   findUltimateParent(node) {
//     if (node === this.parent[node]) {
//       return node;
//     }

//     return (this.parent[node] = this.findUltimateParent(this.parent[node]));
//   }

//   disjointsize(u, v) {
//     // console.log(u, v, "uandv");
//     //console.log(u, v);
//     let ult_u = this.findUltimateParent(u);
//     let ult_v = this.findUltimateParent(v);

//     if (ult_u === ult_v) return;
//     // if they are not belonging to the same component do this
//     if (this.size[ult_u] < this.size[ult_v]) {
//       this.parent[ult_u] = ult_v;
//       this.size[ult_v] += this.size[ult_u];
//     } else {
//       this.parent[ult_v] = ult_u;
//       this.size[ult_u] += this.size[ult_v];
//     }
//   }
// }
// class Islands {
//   isValid(newRow, newCol, n, m) {
//     if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   onlineQuery(n, m, operators) {
//     let ds = new Solution();
//     ds.disConstructor(n * m);
//     let visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
//     let count = 0;
//     let ans = [];

//     for (let extractrc of operators) {
//       let row = extractrc[0];
//       let col = extractrc[1];
//       if (visited[row][col]) {
//         ans.push(count);
//         continue;
//       }
//       visited[row][col] = true;
//       count++;
//       let directions = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1],
//       ];

//       for (let i = 0; i < 4; i++) {
//         let newRow = row + directions[i][0];
//         let newCol = col + directions[i][1];

//         if (this.isValid(newRow, newCol, n, m) === true) {
//           // NodeNumber=(Row×Number of Columns)+Column find the node number value
//           if (visited[newRow][newCol]) {
//             let nodeNum = row * m + col;
//             let adjNodeNum = newRow * m + newCol;

//             if (
//               ds.findUltimateParent(nodeNum) !=
//               ds.findUltimateParent(adjNodeNum)
//             ) {
//               count--;
//               ds.disjointsize(nodeNum, adjNodeNum);
//             }
//           }
//         }
//       }
//       ans.push(count);
//     }
//     return ans;
//   }
// }

// let n = 4; // row
// let m = 5; // col
// let A = [
//   [1, 1],
//   [0, 1],
//   [3, 3],
//   [3, 4],
// ];

// let chunk = new Islands();
// let find = chunk.onlineQuery(n, m, A);

// console.log(find, "your output");

// -------------------------------------------------------------------------------------

// Maximum store removed disjoint set union

// const dfs = function (stone, visited, stones) {
//   for (let i = 0; i < stones.length; i++) {
//     if (!visited[i] && (stone[0] == stones[i][0] || stone[1] == stones[i][1])) {
//       visited[i] = true;
//       dfs(stones[i], visited, stones);
//     }
//   }
// };

// const removeStones = function (stones) {
//   let n = stones.length;
//   const visited = Array(n).fill(false);
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     if (!visited[i]) {
//       visited[i] = true;
//       dfs(stones[i], visited, stones);
//       count++;
//     }
//   }
//   return n - count;
// };

// let stones = [
//   [0, 0],
//   [0, 1],
//   [1, 0],
//   [1, 2],
//   [2, 1],
//   [2, 2],
// ];

// let data = removeStones(stones);
// console.log(data, "total stones removed");

///// -----------------------------------------------------------------------------
// // Maximum stones removed with disjoint set algorithm

// class Solution {
//   disConstructor(n) {
//     this.size = [];
//     this.parent = [];

//     for (let i = 0; i <= n; i++) {
//       this.size.push(1);
//       this.parent.push(i);
//     }
//     // console.log(this.size);
//     // console.log(this.parent);
//   }

//   findUltimateParent(node) {
//     if (node === this.parent[node]) {
//       return node;
//     }

//     return (this.parent[node] = this.findUltimateParent(this.parent[node]));
//   }

//   disjointsize(u, v) {
//     console.log(u, v, "uandv");
//     //console.log(u, v);

//     let ult_u = this.findUltimateParent(u);
//     let ult_v = this.findUltimateParent(v);

//     if (ult_u === ult_v) return;
//     // if they are not belonging to the same component do this
//     if (this.size[ult_u] < this.size[ult_v]) {
//       this.parent[ult_u] = ult_v;
//       this.size[ult_v] += this.size[ult_u];
//     } else {
//       this.parent[ult_v] = ult_u;
//       this.size[ult_u] += this.size[ult_v];
//     }
//   }
// }

// function removeStones(stones) {
//   let n = stones.length;
//   let maxRow = 0;
//   let maxCol = 0;

//   for (let [row, col] of stones) {
//     maxRow = Math.max(maxRow, row);
//     maxCol = Math.max(maxCol, col);
//   }

//   let total = maxRow + maxCol + 1;

//   let ds = new Solution();

//   ds.disConstructor(total);

//   for (let [newRow, newCol] of stones) {
//     let assignNewRow = newRow;
//     let assignNewCol = newCol + maxRow + 1;

//     ds.disjointsize(assignNewRow, assignNewCol);
//   }

//   let connectedGroups = new Set();

//   for (let [newRow, newCol] of stones) {
//     let newassignNewRow = newRow;
//     let newassignNewCol = newCol + maxRow + 1;

//     let root = ds.findUltimateParent(newassignNewRow);
//     connectedGroups.add(root);
//   }

//   console.log(connectedGroups.size, "connected groups");

//   return n - connectedGroups.size;
// }

// let stones = [
//   [0, 1],
//   [1, 0],
//   [1, 1],
// ];
// let data = removeStones(stones);
// console.log(data, "total stones removed");

////--------------------------------------------------------------------------------------
