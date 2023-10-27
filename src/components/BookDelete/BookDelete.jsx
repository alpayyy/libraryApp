import React from 'react';
import { Button } from 'antd'; 

const DeleteBook = ({ onDelete }) => { 
  return (
    <Button type="primary" onClick={onDelete}>
      Kitabı Sil
    </Button>
  );
};

export default DeleteBook;
