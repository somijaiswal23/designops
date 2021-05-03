import React from 'react';
import {StickyFooter} from "../../lib";
import {CodeSnippet, stickyFooterCode} from '../../codeBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        paddingTop: '60px',
      },
}));

const StickyFooterDemo = () => {
    const classes = useStyles();
    return(
        <>
        <StickyFooter copyright={`@${new Date().getFullYear()} RXP Services. All rights reserved`}
         footerText='Creative agency making happier humans.' position={'left'}>
            <div>  
            </div>
        </StickyFooter>
        <div className={classes.div}>
            <CodeSnippet code={stickyFooterCode}/>
        </div>
        </>
    ) 

}

export default StickyFooterDemo;

