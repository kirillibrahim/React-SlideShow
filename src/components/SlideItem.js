import React from "react";

const SlideItem = React.memo(({ item }) => {
  console.log(item);
  return (
    <div id="slide" className="card text-center">
      <h1>{item.title}</h1>
      <p>{item.text}</p>
    </div>
  );
});

export default SlideItem;
