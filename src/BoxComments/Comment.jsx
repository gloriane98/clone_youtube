import React from 'react'
import CommentForm from './CommentForm'
import { Avatar, Stack,Grid,Box, ListItemButton } from '@mui/material';
import { ThumbDown, ThumbUp } from '@mui/icons-material';


export default function Comment({
    comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment,
    deleteComment,
    addComment,
    parentId = null,
    currentUserId
}) {
    const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  
  return (
    <Stack 
        key={comment.id} 
        direction="row" >
      <Box  >
        <Avatar />
      </Box>
      <Stack 
        direction="column"
        sx={{ width:"450px"}}>
            <Grid 
                direction="column" >
            <span>{comment.username}</span>&nbsp;&nbsp; 
            <span>{createdAt}</span>
            </Grid>
            {!isEditing && <Stack sx={{border:"1px solid green"}}>{comment.body}</Stack>}
            {isEditing && (
            <CommentForm
                submitLabel="Update"
                hasCancelButton
                initialText={comment.body}
                handleSubmit={(text) => updateComment(text, comment.id)}
                handleCancel={() => {
                setActiveComment(null);
                }}
            />
            )}
        <Stack 
            direction="row" 
            justifyContent="space-between" >
          {canReply && (
            <div
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
          
        </Stack>
        <Stack direction="row">
           <ListItemButton>
              <ThumbUp/>
            </ListItemButton>
            <ListItemButton>
              <ThumbDown/>
            </ListItemButton>
        </Stack>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <Grid >
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
           
          </Grid>
        )}
      </Stack>
    </Stack>
  );
}
