import { Draggable } from 'react-beautiful-dnd';


const Choice = ({ choice, index }) => {
    return(
        <Draggable draggableId={'a'+index} index={index}>
            {provided => (
                <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                    {choice}
                </div>
            )}
        </Draggable>
    );
}

export default Choice;


