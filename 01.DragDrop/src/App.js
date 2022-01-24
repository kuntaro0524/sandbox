import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([{id:1, text:"item0"}, {id:2, text:"item1"}, {id:3, text:"item2"}]);
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
            {items.map((item, index)=>(
          <Draggable draggableId={item.text} index={index} key={item.id}>
            {(provided)=>
              <div 
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps} 
                className="item"> 
                {item.text}
              </div>}
          </Draggable>
            ))}
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
