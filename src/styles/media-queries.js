import facepaint from 'facepaint';

const breakpoints = [420, 768, 990, 1120];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default mq;
/*
 usage, where first element is at smallest breakpoint
 import mq from './media-queries'
     css={mq({
       color: ['green', 'gray', 'hotpink']
     })}
*/
