import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(["koko0", "koko1", "koko2"]);
  const onDragEnd =(result)=>{
    const new_items = [...items];
    // 動かしたところを一個削除する
    const remove  = new_items.splice(result.source.index,1);
    new_items.splice(result.destination.index, 0, remove[0])
    console.log(new_items);
    setItems(new_items);
  }
  return (<div className="dragDropArea">
    {/* ドラッグが終わった瞬間にプロパティを作動させる→onDragEndに関数を割り当てる */}
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="UNKO">
        {(provided) => (
          // ライブラリのお作法的に利用する
          // わからなくなったらdocumentを調べるのが良いと思います
          // 何番目のドラッガブルか？
          // 掴んで移動させたいとき: dragHandleProps を追加すること 
          <div {...provided.droppableProps} ref={provided.innerRef}>
          <Draggable draggableId="item0" index={0}>{(provided)=><div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item"> 
          {items[0]}</div>}
          </Draggable>
          <Draggable  draggableId="item1" index={1}>{(provided)=><div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item"> 
          {items[1]}</div>}
          </Draggable>
          <Draggable  draggableId="item2" index={2}>{(provided)=><div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item"> 
          {items[2]}</div>}
          </Draggable>
          {/* お作法として書かないとWarningがでる */}
          {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
  );
}

export default App;
