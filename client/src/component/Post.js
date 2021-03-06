import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";



const Post = ({ post }) => {

let date = new Date(post.created_at); 
  return (
        // Here's the Content of {post.user}'s Post {post.title}: {post.content} !
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src = {post.user.avatar_url ? post.user.avatar_url : post.user.id} />
        }
        title={post.user.username}
        subheader={date.toDateString()}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/blogs/${post.id}`}>
         <Button>
          Read Post
        </Button>
        </Link>
      </CardActions>


    </Card>
  );
}

export default Post