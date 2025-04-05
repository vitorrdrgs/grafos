import { dijkstra } from "../src/services/dijkstra.js";
import GraphMatrix from "../src/models/graph_matrix.js";

/*
INPUT:
0, 4,  0, 0,  0,  0,  0, 8,  0
4, 0,  8, 0,  0,  0,  0, 11, 0
0, 8,  0, 7,  0,  4,  0, 0,  2
0, 0,  7, 0,  9,  14, 0, 0,  0
0, 0,  0, 9,  0,  10, 0, 0,  0
0, 0,  4, 14, 10, 0,  2, 0,  0
0, 0,  0, 0,  0,  2,  0, 1,  6
8, 11, 0, 0,  0,  0,  1, 0,  7
0, 0,  2, 0,  0,  0,  6, 7,  0

OUTPUT:
Parent: [0, 0, 1, 2, 5, 6, 7, 0, 2]
Cost: [0, 4, 12, 19, 21, 11, 9, 8, 14]
*/
test("Dijkstra correctly returns parents and costs vector", () => {
    const graph = new GraphMatrix([
        [0, 1, 4],
        [0, 7, 8],
        [1, 2, 8],
        [1, 7, 11],
        [2, 3, 7],
        [2, 5, 4],
        [2, 8, 2],
        [3, 4, 9],
        [3, 5, 14],
        [4, 5, 10],
        [5, 6, 2],
        [6, 7, 1],
        [6, 8, 6],
        [7, 8, 7],
    ], 9);


    expect(dijkstra(graph, 0)).toEqual({
        parent: [0, 0, 1, 2, 5, 6, 7, 0, 2],
        cost: [0, 4, 12, 19, 21, 11, 9, 8, 14]
    });
})
