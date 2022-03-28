const fs = require('fs');
const args = process.argv.slice(2);
const [componentName] = args;

const COMPONENTS_DIRECTORY = './components';

fs.writeFileSync(
  `${COMPONENTS_DIRECTORY}/${componentName}.tsx`,
  `
import React, { forwardRef } from 'react';
import { Box } from './Box';
import { BoxProps } from './Box.types';

type ${componentName}Props<TagName extends React.ElementType> =
  BoxProps<TagName> & {
    /* customProp?: boolean; */
  };

const ${componentName}: <TagName extends React.ElementType>(
    props: ${componentName}Props<TagName>
    // eslint-disable-next-line react/display-name
) => JSX.Element = forwardRef(
  <TagName extends React.ElementType>(
    { children, ...props }: ${componentName}Props<TagName>,
    ref: any
) => (
  <Box ref={ref} {...props}>
    {children}
  </Box>
)) as any;

export { ${componentName} };
`.trim()
);

const indexFilePath = `${COMPONENTS_DIRECTORY}/index.ts`;

const indexFileContents = fs.readFileSync(indexFilePath, {
  encoding: 'utf8',
});

fs.writeFileSync(
  indexFilePath,
  `
${indexFileContents.trim()}
export { ${componentName} } from './${componentName}';
`
    .trim()
    .split('\n')
    .sort()
    .join('\n')
);

console.log(`Finished generating component "${componentName}"`);
