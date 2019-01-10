import React from 'react';

import Grid from '@material-ui/core/Grid';

import Category from '../category';

function Categories(props) {
  let { categories, handleOpenModal } = props;
  return (
    <Grid container spacing={8}>
      {categories.map(el => (
        <Grid item xs={12} key={el.id}>
          <Category {...el} handleOpenModal={handleOpenModal}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Categories;
