import { Flex } from '@radix-ui/themes';
import { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import API from '../nodes/API';
import Files from '../nodes/Files';
import Decision from '../nodes/Decision';
import ArtificialIntelligence from '../nodes/ArtificialIntelligence';
import Notification from '../nodes/Notification';

const initialNodes = [
  {
    id: 'n0',
    type: 'filesNode',
    position: { x: 15, y: 100 },
    data: { label: 'Node 0' },
  },
  {
    id: 'n1',
    type: 'apiNode',
    position: { x: 207, y: 100 },
    data: { label: 'Node 1' },
  },
  {
    id: 'n2',
    type: 'decisionNode',
    position: { x: 385, y: 100 },
    data: { label: 'Node 2' },
  },
  {
    id: 'n3',
    type: 'aiNode',
    position: { x: 565, y: 100 },
    data: { label: 'Node 3' },
  },
  {
    id: 'n4',
    type: 'notificationNode',
    position: { x: 750, y: 100 },
    data: { label: 'Node 4' },
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
  filesNode: Files,
  decisionNode: Decision,
  aiNode: ArtificialIntelligence,
  notificationNode: Notification
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
