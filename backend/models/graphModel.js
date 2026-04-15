let graph = {};

function addEdge(from, to) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
}

function getGraph() {
    return graph;
}

module.exports = { addEdge, getGraph };