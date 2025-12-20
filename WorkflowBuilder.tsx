import { useState, useCallback } from 'react';
import { 
  ReactFlow, 
  Controls, 
  Background, 
  applyNodeChanges, 
  applyEdgeChanges,
  addEdge,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  NodeTypes,
  Handle,
  Position
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Play, Square, GitBranch, Zap, Clock, MessageSquare } from "lucide-react";

// Custom Node Components
const TriggerNode = ({ data }: { data: { label: string } }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-green-500 min-w-[150px]">
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 mr-2">
        <Zap size={16} />
      </div>
      <div className="text-sm font-bold">{data.label}</div>
    </div>
    <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-green-500" />
  </div>
);

const ActionNode = ({ data }: { data: { label: string } }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500 min-w-[150px]">
    <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-500" />
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 mr-2">
        <Play size={16} />
      </div>
      <div className="text-sm font-bold">{data.label}</div>
    </div>
    <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-500" />
  </div>
);

const ConditionNode = ({ data }: { data: { label: string } }) => (
  <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-orange-500 min-w-[150px]">
    <Handle type="target" position={Position.Top} className="w-3 h-3 bg-orange-500" />
    <div className="flex items-center">
      <div className="rounded-full w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-600 mr-2">
        <GitBranch size={16} />
      </div>
      <div className="text-sm font-bold">{data.label}</div>
    </div>
    <Handle type="source" position={Position.Bottom} id="true" className="w-3 h-3 bg-green-500 left-[25%]" />
    <Handle type="source" position={Position.Bottom} id="false" className="w-3 h-3 bg-red-500 left-[75%]" />
  </div>
);

const nodeTypes: NodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
  condition: ConditionNode,
};

const initialNodes: Node[] = [
  { id: '1', type: 'trigger', position: { x: 250, y: 0 }, data: { label: 'New Trending Topic' } },
  { id: '2', type: 'action', position: { x: 250, y: 100 }, data: { label: 'Generate Script' } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
];

export function WorkflowBuilder() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  // Single-click handler for node configuration
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setIsConfigOpen(true);
  }, []);

  const updateNodeLabel = (label: string) => {
    if (!selectedNode) return;
    setNodes((nds) =>
      nds.map((n) => {
        if (n.id === selectedNode.id) {
          return { ...n, data: { ...n.data, label } };
        }
        return n;
      })
    );
  };

  return (
    <div className="h-[600px] w-full border rounded-lg bg-slate-50 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick} // Single click interaction
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md flex flex-col gap-2">
        <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Add Node</div>
        <Button 
          variant="outline" 
          size="sm" 
          className="justify-start"
          onClick={() => {
            const id = (nodes.length + 1).toString();
            setNodes((nds) => [...nds, { 
              id, 
              type: 'trigger', 
              position: { x: 100, y: 100 }, 
              data: { label: 'New Trigger' } 
            }]);
          }}
        >
          <Zap className="mr-2 h-4 w-4 text-green-500" /> Trigger
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="justify-start"
          onClick={() => {
            const id = (nodes.length + 1).toString();
            setNodes((nds) => [...nds, { 
              id, 
              type: 'action', 
              position: { x: 100, y: 150 }, 
              data: { label: 'New Action' } 
            }]);
          }}
        >
          <Play className="mr-2 h-4 w-4 text-blue-500" /> Action
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="justify-start"
          onClick={() => {
            const id = (nodes.length + 1).toString();
            setNodes((nds) => [...nds, { 
              id, 
              type: 'condition', 
              position: { x: 100, y: 200 }, 
              data: { label: 'Condition' } 
            }]);
          }}
        >
          <GitBranch className="mr-2 h-4 w-4 text-orange-500" /> Condition
        </Button>
      </div>

      <Sheet open={isConfigOpen} onOpenChange={setIsConfigOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Configure Node</SheetTitle>
            <SheetDescription>
              Edit the properties of the selected {selectedNode?.type} node.
            </SheetDescription>
          </SheetHeader>
          
          {selectedNode && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="node-label">Label</Label>
                <Input 
                  id="node-label" 
                  defaultValue={selectedNode.data.label as string}
                  onChange={(e) => updateNodeLabel(e.target.value)}
                />
              </div>
              
              {selectedNode.type === 'trigger' && (
                <div className="grid gap-2">
                  <Label>Trigger Type</Label>
                  <Select defaultValue="topic">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="topic">New Trending Topic</SelectItem>
                      <SelectItem value="time">Scheduled Time</SelectItem>
                      <SelectItem value="manual">Manual Trigger</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedNode.type === 'action' && (
                <div className="grid gap-2">
                  <Label>Action Type</Label>
                  <Select defaultValue="script">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="script">Generate Script</SelectItem>
                      <SelectItem value="image">Generate Image</SelectItem>
                      <SelectItem value="post">Post to Socials</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
