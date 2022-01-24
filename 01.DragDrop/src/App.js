import logo from './logo.svg';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  const onDragEnd =(result)=>{
    console.log(result);
  }
  return (<div className="dragDropArea">
    {/* ドラッグが終わった瞬間にプロパティを作動させる→onDragEndに関数を割り当てる */}
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="UNKO">
        {(provided) => (
          // ライブラリのお作法的に利用する
          // わからなくなったらdocumentを調べるのが良いと思います
          // {/* 何番目のドラッガブルか？ */}
          // {/* 掴んで移動させたいとき: dragHandleProps を追加すること */}
          <div {...provided.droppableProps} ref={provided.innerRef}>
          <Draggable draggableId="item0" index={0}>{(provided)=><div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item"> 
          item0</div>}
          </Draggable>
          <Draggable  draggableId="item1" index={1}>{(provided)=><div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item"> 
          item1</div>}
          </Draggable>
          <Draggable  draggableId="item2" index={2}>{(provided)=><div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item"> 
          item2</div>}
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
