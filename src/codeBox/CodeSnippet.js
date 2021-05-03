import React , { useState } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import Code from '../Code';
import CodeIcon from '@material-ui/icons/Code';

const CodeSnippet = ({code}) => {
    const [codeSnippet, setCodeSnippet] = useState(false); 
    const showCodeSnippet = () => {
        setCodeSnippet(!codeSnippet);
    }
    return (
        <>
        <div className='container'>
            <Button variant="contained" onClick={showCodeSnippet} startIcon={<CodeIcon/>} endIcon={<CodeIcon/>}>
            {codeSnippet ? 'Hide Code ' : 'Display Code '}
            </Button>
        </div>
     {codeSnippet && <Code code={code} language="js" /> } 
     </>
    );
}

export default CodeSnippet;