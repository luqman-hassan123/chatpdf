import React from 'react';
import Button from '@mui/material/Button';

function Button({ title, onClick, className, endIcon, variant = "contained" }) {
  return (
    <Button
      variant={variant}
      endIcon={endIcon}
      title={title}
      onClick={onClick}
      className={className}
    >
      {title}
    </Button>
  );
}

export default Button;
