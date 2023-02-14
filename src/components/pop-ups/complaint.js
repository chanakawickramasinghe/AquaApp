import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {useRef} from 'react';
import { set } from 'lodash';
import {addDoc,collection } from "@firebase/firestore";
import { useNavigate } from 'react-router-dom';
import {firestore} from "../../firebase";






const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    // setOpen(false);
    // window.location.reload(false);
  };

  const titleRef = useRef(null);
  const descRef = useRef(null);

  const currentDate = new Date();

  console.log(currentDate.toLocaleDateString());


  const ref = collection (firestore,"Complaints"); 

  

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(titleRef.current.value);
        console.log(descRef.current.value);
        

        const data = {
            Title: titleRef.current.value,
            Description: descRef.current.value,
            Status: 'Not Fixed',
            Date: currentDate.toLocaleDateString(),
        }

        

        try{
            addDoc(ref,data);    
            alert('Complaint Added!');        
            setTimeout(() => window.location.reload(), 1000);
            
        }catch(e){
            console.log(e);
        }
    };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Complaint
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{  width: '100%'}}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add New Complaint
        </BootstrapDialogTitle>
        <form onSubmit={handleSave}>
        <DialogContent dividers>
        
          <Typography gutterBottom>
          Complaint Type <br/>
          <input type="text" style={{  width: '500px'}} id="Title" ref={titleRef} required />
          </Typography>
          <Typography gutterBottom>
          Description <br/>
          <input type="textarea" style={{  width: '500px', height: '200px'}} id="name" ref={descRef} required />
          </Typography>
        </DialogContent>
        <DialogActions>
          
            <Button type="submit" onClick={handleClose2}>Add Complaint</Button>
          {/* <Button autoFocus onClick={handleClose}>
            Save changes
          </Button> */}
        </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}