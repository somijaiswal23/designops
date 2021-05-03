import React from 'react';
import {SignIn} from "../../lib";
import {CodeSnippet, signInCode} from '../../codeBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        paddingTop: '60px',
      },
}));

const SignInDemo = () => {
    const classes = useStyles();
    return(
        <>
        <SignIn firstLabel={'User Name'}/>
        <div className={classes.div}>
            <CodeSnippet code={signInCode}/>
        </div>
        </>
    ) 

}

export default SignInDemo;

