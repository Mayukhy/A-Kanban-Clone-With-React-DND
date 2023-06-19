import React, { useRef } from 'react'
import './style.scss'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Card, Stack, CardMedia, CardContent, Box } from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';
export default function Todos({ todos, idx, taskState, task, Snapshot }) {

  return (

    <Draggable key={todos.id} draggableId={todos.id} index={idx}>
      {(provided, snapshot) => (
        < Box key={idx}

          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}

        >
          <Card sx={{
            width: '324px',
            height: 'auto',
            margin: '10px auto',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow:'none'
          }} style={{
            transform: snapshot.isDragging ? 'rotate(3deg)' : 'none',
          }}>
            <CardContent>
              <div className='navigation'>
                <span className={todos.state === 'Low' && task.title === 'To Do' || task.title === 'On Progress' ? 'low': todos.state === 'High' && task.title === 'To Do' || task.title === 'On Progress' ?
                  'high' : todos.state === 'Completed' || task.title === 'Done' ? 'complete' : 'low'}>{task.title === 'Done' ?
                    'Completed' : todos.state === 'Completed' && task.title === 'On Progress' ? 'Low' : todos.state === 'Completed' && task.title === 'To Do' ? 'Low' : todos.state}</span>
                <span className="threedot">...
                </span>
              </div>
              <div className="heading"> {todos.name}</div>

              <Box sx={{
                display: 'flex',
                marginTop: '10px',
                gap: '13px'
              }} className="">
                <span style={{
                  display: todos.banner === '' ? 'none' : 'initial'
                }} >
                  <CardMedia sx={{
                    width: 'auto',
                    height: 'auto',
                  }}  >
                    <img src={todos.banner} alt="" />
                  </CardMedia>
                </span>
                <span
                  style={{
                    display: todos.banner2 === '' ? 'none' : 'initial'
                  }}>
                  <CardMedia sx={{
                    width: 'auto',
                    height: 'auto',
                  }}  >
                    <img src={todos.banner2} alt="" />
                  </CardMedia>
                </span>
              </Box>




              <div className="description">
                {todos.description}
              </div>
              <div className="bottomcontainer">
                <div  className="avatars">
                  <AvatarGroup >
                    <Avatar sx={{
                      width: '24px',
                      height: '24px',
                    }}
                      alt="Remy Sharp" src={todos.img2} />
                    <Avatar sx={{
                      width: '24px',
                      height: '24px'
                    }} style={{
                      display: todos.img3 === '' ? 'none' : 'initial'
                    }} alt="Travis Howard" src={todos.img3} />
                    <Avatar sx={{
                      width: '24px',
                      height: '24px'
                    }}
                      style={{
                        display: todos.img1 === '' ? 'none' : 'initial'
                      }} alt="Cindy Baker" src={todos.img1} />
                  </AvatarGroup>

                </div>
                <div className="comments">
                  <span className='msgicon'>{todos.msgicon}</span>
                  <span className="texts">{todos.commentsno} Comments</span>
                </div>
                <div className="files">
                  <span className='fileicon'>{todos.file}</span>
                  <span className="fileNo">
                    {todos.fileno} files
                  </span>
                </div>
              </div>

            </CardContent>
          </Card>
        </Box>

      )}
    </Draggable>

  )
}
