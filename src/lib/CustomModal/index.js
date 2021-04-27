import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
const { children, classes, onClose, ...other } = props;
return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
    <Typography variant="h6">{children}</Typography>
    {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
        </IconButton>
    ) : null}
    </MuiDialogTitle>
);
});

const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

/******
 * size can be 'lg''md''sm''xl''xs'false 
 */
const CustomModal = ({isOpen, size='md',handleClose, title, handleSuccess, children, 
    leftBtnText='Cancel', rightBtnText='Ok', hideLetfBtn=false, hideRightBtn=false}) => {

    return (
      <Dialog fullWidth
       maxWidth={size} 
       onClose={handleClose}
       open={isOpen}
       aria-labelledby={title}>
        <DialogTitle id={title} onClose={handleClose}>{title}</DialogTitle>
            {children && <DialogContent dividers>
                {children}
            </DialogContent>}
            <DialogActions>
                {!hideLetfBtn && <Button onClick={handleClose} color="secondary">
                    {leftBtnText}
                </Button>}
                {!hideRightBtn && <Button onClick={handleSuccess} autoFocus color="primary">
                    {rightBtnText}
                </Button>}
            </DialogActions>
      </Dialog>
    );
  }
  export default CustomModal