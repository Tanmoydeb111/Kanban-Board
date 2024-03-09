import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/DeleteIcon";
import { Column, Id, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";
import More from "../icons/More";
import DropdownMenu from "./ColorBox";
import Edit from "../icons/edit";
import ColorPicker from "./colorPick";
import ColorBox from "./ColorBox";
import MoveIcon from "../icons/More";
import He from "./Heading"
// import { ColorPicker, useColor } from 'react-color-palette';
// import 'react-color-palette/lib/css/styles.css';
// import useGenerateRandomColor from "./useGenerateRandomColor";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  var k=4;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-columnBackgroundColor
      opacity-40
      border-2
      border-pink-500
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    
    <div
      ref={setNodeRef}
      style={style}
      className="
  bg-bd
  w-[460px]
  h-[600px]
  max-h-[600px]
  rounded-md
  flex
  flex-col
  "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        
  className="
    rounded
    text-md
    h-[60px]
    cursor-grab
    p-3
    font-bold
    flex
    items-center
    justify-between
  "
>
  
  <div className="flex gap-2
">
            {/* <ColorPicker /> */}
            {/* <div className="box-border h-2 w-2 p-3 border-2"></div> */}
            <ColorBox />

{/* && column.title != "Not Started" && column.title != "Complete" && column.title != "In Progress" */}
<div className="bg-tt rounded border-tt px-2 border-2">
{!editMode && column.title }
          {editMode && (
            <input
              className=" rounded border-yellow-200 px-2 border-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
          </div>
    <div
      className="
        flex
        items-center
        bg-#ffffff
        px-2
        py-1
        text-sm
        text-no
      "
    >
      {tasks.length}
    </div>
  </div>

  <div className="flex justify-end">
  <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="
        stroke-black
        hover:bg-tt
        rounded
        px-1
        py-2
        "
        >
          <TrashIcon />
        </button>
        <button
        onClick={() => {
          setEditMode(true);
        }}
          className="
        stroke-black
        hover:bg-tt
        rounded
        px-1
        py-2
        "
        >
          <Edit />
        </button>
  <button className="items-center text-no px-2  cursor-move">
          <More />
        </button>
    <button
      className=" items-center text-no         rounded
      px-1
      py-2  hover:bg-tt"
      onClick={() => {
        createTask(column.id);
      }}
    >
      <PlusIcon />
    </button>
  </div>
</div>




      {/* Column task container */}
      <div className="
      flex 
      flex-grow 
      flex-col 
      gap-4 
      p-2 
      overflow-x-hidden overflow-y-auto
      ">
        {/* <button ><MoveIcon /></button> */}
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className="flex gap-2 items-center p-4 hover:bg-tt hover:text-rose-500 active:bg-#cececc"
        onClick={()=> {
          createTask(column.id);
        }}
    >
        <PlusIcon />
        Add task
      </button>
    </div>
  );


}


export default ColumnContainer;
