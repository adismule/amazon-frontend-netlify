import React from 'react'
import { categoryInfo } from './CategoryFullInfo'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((infos, index) => (
        <CategoryCard key={infos.id || index} data={infos} />
      ))}
    </section>
  );
}


  export default Category