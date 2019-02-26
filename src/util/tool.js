import React from  'react';

export const builder = (ParentNode , ChildNode) => {


    return (props)=>{

      return <ParentNode {...props}><ChildNode {...props}/></ParentNode>
      
    }
  }