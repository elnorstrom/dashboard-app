import React from 'react';

const NewsApp = (props) => (
  <div>
      {props.news && props.news[0].title}
  </div>
);


export default NewsApp;
