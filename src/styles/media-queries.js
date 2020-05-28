import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];

export default mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`),
);

/*
 usage, where first element is at smallest breakpoint
 import mq from './media-queries'
     css={mq({
       color: ['green', 'gray', 'hotpink']
     })}
*/
