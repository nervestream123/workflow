import { Flex } from '@radix-ui/themes';
import { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import API from '../nodes/API';

const initialNodes = [
  {
    id: 'n1',
    type: 'apiNode',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
  },
];

const initialEdges = [
  // {
  //   id: 'n1-n2',
  //   source: 'n1',
  //   target: 'n2',
  //   type: 'step',
  //   label: 'connects with',
  // },
];

const nodeTypes = {
  apiNode: API,
};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <Flex width="100%" align="center">
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}>
        <Background bgColor="#090017" />
        <Controls className="flow-controls" />
      </ReactFlow>
    </Flex>
  );
}

export default Flow;
