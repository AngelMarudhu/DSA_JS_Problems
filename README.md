// BlockEditor.js
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ChevronRight, ChevronDown, Trash2 } from 'lucide-react';

// Define item types for drag and drop
const ItemTypes = {
  BLOCK: 'block'
};

// Main component
export default function BlockEditor() {
  const [blocks, setBlocks] = useState([
    {
      id: '1',
      type: 'block',
      position: { x: 100, y: 100, width: 200, height: 200 },
      children: [
        {
          id: '2',
          type: 'label',
          position: { x: 10, y: 10, width: 180, height: 30 },
          children: []
        }
      ]
    }
  ]);
  
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [expanded, setExpanded] = useState(new Set(['1']));

  const toggleExpand = (id) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  const addNewBlock = (parentId = null) => {
    const newBlock = {
      id: Date.now().toString(),
      type: 'block',
      position: { x: 100, y: 100, width: 200, height: 200 },
      children: []
    };

    if (!parentId) {
      setBlocks([...blocks, newBlock]);
    } else {
      const updateBlockChildren = (block) => {
        if (block.id === parentId) {
          return {
            ...block,
            children: [...block.children, newBlock]
          };
        }
        return {
          ...block,
          children: block.children.map(updateBlockChildren)
        };
      };
      setBlocks(blocks.map(updateBlockChildren));
    }
    setExpanded(new Set([...expanded, newBlock.id]));
  };

  const deleteBlock = (id) => {
    const filterBlocks = (blocks) => {
      return blocks.filter(block => {
        if (block.id === id) return false;
        block.children = filterBlocks(block.children);
        return true;
      });
    };
    setBlocks(filterBlocks(blocks));
    setSelectedBlock(null);
  };

  const updateBlockPosition = (id, newPosition) => {
    const updatePosition = (blocks) => {
      return blocks.map(block => {
        if (block.id === id) {
          return {
            ...block,
            position: newPosition
          };
        }
        return {
          ...block,
          children: updatePosition(block.children)
        };
      });
    };
    setBlocks(updatePosition(blocks));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex min-h-screen bg-gray-100">
        <LeftSidebar
          blocks={blocks}
          expanded={expanded}
          selectedBlock={selectedBlock}
          onToggleExpand={toggleExpand}
          onSelectBlock={setSelectedBlock}
          onAddBlock={addNewBlock}
          onDeleteBlock={deleteBlock}
        />
        <Canvas
          blocks={blocks}
          selectedBlock={selectedBlock}
          onSelectBlock={setSelectedBlock}
          onUpdatePosition={updateBlockPosition}
        />
      </div>
    </DndProvider>
  );
}

// Left Sidebar Component
function LeftSidebar({ 
  blocks, 
  expanded, 
  selectedBlock, 
  onToggleExpand, 
  onSelectBlock, 
  onAddBlock, 
  onDeleteBlock 
}) {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <button 
        onClick={() => onAddBlock()}
        className="w-full mb-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add Block
      </button>
      <div className="tree-view">
        {blocks.map(block => (
          <TreeItem
            key={block.id}
            block={block}
            isExpanded={expanded.has(block.id)}
            isSelected={selectedBlock === block.id}
            onToggle={onToggleExpand}
            onSelect={onSelectBlock}
            onDelete={onDeleteBlock}
            onAddChild={onAddBlock}
          />
        ))}
      </div>
    </div>
  );
}

// Tree Item Component
function TreeItem({ 
  block, 
  isExpanded, 
  isSelected, 
  onToggle, 
  onSelect, 
  onDelete, 
  onAddChild 
}) {
  return (
    <div className="ml-4">
      <div 
        className={`flex items-center p-2 cursor-pointer ${isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
        onClick={() => onSelect(block.id)}
      >
        {block.children.length > 0 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggle(block.id);
            }}
            className="mr-2"
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
        <span>{block.type}</span>
        {isSelected && (
          <div className="ml-auto flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddChild(block.id);
              }}
              className="mr-2 text-blue-500 hover:text-blue-700"
            >
              +
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(block.id);
              }}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
      {isExpanded && block.children.map(child => (
        <TreeItem
          key={child.id}
          block={child}
          isExpanded={isExpanded}
          isSelected={isSelected}
          onToggle={onToggle}
          onSelect={onSelect}
          onDelete={onDelete}
          onAddChild={onAddChild}
        />
      ))}
    </div>
  );
}

// Canvas Component
function Canvas({ blocks, selectedBlock, onSelectBlock, onUpdatePosition }) {
  const [, drop] = useDrop({
    accept: ItemTypes.BLOCK,
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      if (!delta) return;

      const block = findBlock(blocks, item.id);
      if (!block) return;

      // Calculate new position with grid snapping
      const x = Math.round((block.position.x + delta.x) / 80) * 80;
      const y = Math.round((block.position.y + delta.y) / 80) * 80;

      onUpdatePosition(item.id, {
        ...block.position,
        x,
        y
      });
    }
  });

  return (
    <div className="flex-1 p-4">
      <div 
        ref={drop}
        className="w-[960px] h-[600px] bg-white shadow-lg relative mx-auto"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #f0f0f0 0px, #f0f0f0 1px, transparent 1px, transparent 80px)'
        }}
      >
        {blocks.map(block => (
          <DraggableBlock
            key={block.id}
            block={block}
            isSelected={selectedBlock === block.id}
            onSelect={onSelectBlock}
          />
        ))}
      </div>
    </div>
  );
}

// Draggable Block Component
function DraggableBlock({ block, isSelected, onSelect }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BLOCK,
    item: { id: block.id, type: block.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const style = {
    position: 'absolute',
    left: block.position.x,
    top: block.position.y,
    width: block.position.width,
    height: block.position.height,
    opacity: isDragging ? 0.5 : 1,
    border: isSelected ? '2px solid blue' : '1px solid #ccc',
    backgroundColor: 'white',
    cursor: 'move'
  };

  return (
    <div
      ref={drag}
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(block.id);
      }}
    >
      {block.children.map(child => (
        <DraggableBlock
          key={child.id}
          block={child}
          isSelected={isSelected}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

// Helper function to find a block by ID in the nested structure
function findBlock(blocks, id) {
  for (const block of blocks) {
    if (block.id === id) return block;
    const found = findBlock(block.children, id);
    if (found) return found;
  }
  return null;
}
