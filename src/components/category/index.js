import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import PlayList from '../playlist';


function Category(props) {
  let { title, description, playlist, handleOpenModal} = props;
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={description}
      />
      <CardContent>
        <PlayList playlist={playlist} handleOpenModal={handleOpenModal}/>
      </CardContent>
    </Card>
  )
}

export default Category;
