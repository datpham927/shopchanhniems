import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({setOpen,open,handlePlayMusic}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Nghe một chút nhạc cho tâm hồn bình an!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Nhạc thiền! tịnh tâm an nhiên tự tại sẽ giúp bạn xua tan đi những mệt mỏi, đau khổ, stress, những phiền lo trong tạm thời và có thể sẽ giúp bạn nghĩ thoáng hơn, lạc quan và có một hướng nhìn khác trong mọi vấn đề!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Không</Button>
          <Button onClick={handlePlayMusic} >
            có
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}