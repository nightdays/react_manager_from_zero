import React from  'react';

export const builder = (ParentNode , ChildNode) => {
    return (props)=>{

      return <ParentNode history={props.history}  location={props.location}><ChildNode /></ParentNode>
      
    }
  }