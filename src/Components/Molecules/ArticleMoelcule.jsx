import React from "react";
import Title from "../Atoms/Title";
import TextAtom from "../Atoms/TextAtom";


function ArticleMoelcule({content, title}) {
  return (
    <article >
      <Title msn={title}/>
      <TextAtom text={content} />
    </article>
  );
}

export default ArticleMoelcule;