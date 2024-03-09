import { useState } from "react";
import TrashIcon from "../icons/DeleteIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import MoveIcon from "../icons/More";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  <div>
     <button onClick={toggleEditMode}><MoveIcon /></button>
  </div>
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30
       p-2.5 h-[60px] min-h-[60px] items-center flex text-left rounded border-2 border-rose-500  cursor-grab relative
      "
      />
    );
  }
  // <button onClick={toggleEditMode}><MoveIcon /></button>

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className=" p-1 h-[60px] min-h-[60px] select-all items-center rounded flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative 
        "
      >
        <textarea
          className="
        h-[90%]
        w-full resize-none border-none select-all rounded bg-mainBackgroundColor text-black focus:outline-none
        "
          value={task.content}
          autoFocus
          placeholder="select-all"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-mainBackgroundColor justify-between p-2.5 h-[60px] min-h-[50px] items-center rounded flex text-left hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task border-bd
      border-2"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>

      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-white absolute right-10 top-1/2 -translate-y-1/2 bg-black opacity-60 hover:opacity-100 rounded border-bd
          border-2"
        >
          <TrashIcon />
        </button>
      ) }
      
      <button
          // onMouseOver={() => {
          //   setMouseIsOver(false);
          // }}
          onClick={() => {
            setMouseIsOver(false);
          }}
          
          // onTouchMove={()=>{
          //   setMouseIsOver(false);
          // }}
          className="cursor-move"
        >
          <MoveIcon />
        </button>

    </div>

  );
}

export default TaskCard;
