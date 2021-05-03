const stickyFooterCode = `
import React from 'react';
import {StickyFooter} from "../node_modules/designops/dist/index.js";
const StickyFooterDemo = () => {
    return(
        <StickyFooter copyright={\`@${new Date().getFullYear()} RXP Services. All rights reserved\`}
         footerText='Creative agency making happier humans.' position={'left'}>
            <div>  
            </div>
        </StickyFooter>
    ) 

}

export default StickyFooterDemo;


`
export default stickyFooterCode;