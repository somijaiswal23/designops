const customCardCode = `import React from 'react';
import './index.css';
import {CustomCard, CustomModal} from "../node_modules/designops/dist/index.js";
import { useState } from 'react';
import {TextField} from '@material-ui/core';

const IMAGE = "https://images.unsplash.com/photo-1617665146086-14d150bd34fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80";
const CustomCardDemo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalHeader, setModalHeader] = useState('Heading');
  const [subHeader, setSubHeader] = useState('This is a media card. You can use this section to describe the content.');
  const [hideCancel, sethideCancel] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  
  const handleSuccess=()=>setOpenModal(false);
  const handleClose=()=>setOpenModal(false);
  const viewAction = (header, subHeader) => {
    setModalHeader(header);
    setSubHeader(subHeader);
    sethideCancel(true);
    setOpenModal(true);
    setIsEdit(false);
  };

  const editAction = () => {
    setOpenModal(true);
    setIsEdit(true);
    sethideCancel(false);
  }
  const headingHandler=(e)=>{
    const {value} = e.target
    setModalHeader(value)
  }
  
  const cardRows = (init, total) => {
    let rows = [];
    for(let i=init; i<total; i++){
      rows.push(
      <CustomCard 
        viewAction={viewAction} 
        editAction={editAction}
        cardHeading={\`Heading \${i}\`}
        cardSubHeading={\`I am a Card \${i}\`}
        img={IMAGE}
        cardClasses='cardClass'/>);
    }
    return rows;
  }

  return (
    <div>
      {/* component 1 */}
      <div className='container'>    
        {cardRows(1,6)}
      </div>
      <div className='container'>
       {cardRows(6,11)}
      </div>
      {/* component 2*/}
       <CustomModal 
        isOpen={openModal} 
        size="sm" 
        handleSuccess={handleSuccess} 
        handleClose={handleClose}
        hideLetfBtn={hideCancel}
        title={modalHeader}>
        <p>{subHeader}</p>
        {isEdit && <form>
          <TextField id="outlined-basic" 
          label="Heading" variant="outlined" 
          type="text" fullWidth 
          onChange={headingHandler}/>
          <TextField id="outlined-basic"
           label="SubHeading" variant="outlined" 
           type="text" fullWidth/>
        </form>}
      </CustomModal>
    </div>
  );
}

export default CustomCardDemo;

/*************index.css*************/

.cardClass {
  height: 30%;
  width: 30%;
  margin: 10px;
}

.container {
display: flex;
flex-direction: row;
justify-content: center;
}


`
export default customCardCode;