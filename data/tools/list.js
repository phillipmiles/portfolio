import { SelectExample, SelectCode } from './component-library/select_example';
import {
  Example1,
  example1Code,
} from './component-library/detachedHoverEffect_example1.tsx';
import {
  Example2,
  example2Code,
} from './component-library/detachedHoverEffect_example2.tsx';
import {
  Example3,
  example3Code,
} from './component-library/detachedHoverEffect_example3.tsx';
import {
  Example as PageExample,
  exampleCode as pageCode,
} from './component-library/page_example.tsx';
import {
  Example as PageWithFooterExample,
  exampleCode as pageWithFooterCode,
} from './component-library/pageWithFooter_example.tsx';
import {
  Example as StickyTopBarExample,
  exampleCode as stickyTopBarExampleCode,
} from './component-library/stickyTopBar_example';
import {
  Example2 as StickyTopBarExample2,
  example2Code as stickyTopBarExample2Code,
} from './component-library/stickyTopBar_example2';
import {
  PageContentWidthExample,
  pageContentWidthExampleCode,
} from './component-library/PageContentWidth';
import {
  Example as NumberAnimateExample,
  exampleCode as numberAnimateExampleCode,
} from './component-library/NumberAnimate_example';
import hooks from './component-library/hooks';
import components from './component-library/components';

const tools = [
  {
    slug: 'hooks',
    category: 'Hooks',
    items: hooks,
  },
  {
    slug: 'components',
    category: 'Components',
    items: [
      ...components,
      {
        slug: 'detached-hover-effect',
        title: 'Detached Hover Effect',
        description:
          'Provides the basic framework to style a pseduo class element to assist in a hover effect.',
        content: [
          {
            type: 'text',
            example: Example1,
            exampleMarkDown: example1Code,
          },
          {
            type: 'text',
            example: Example2,
            exampleMarkDown: example2Code,
          },
          {
            type: 'text',
            example: Example3,
            exampleMarkDown: example3Code,
          },
        ],
      },

      {
        slug: 'page',
        title: 'Page',
        description:
          'A super basic utility component that just replaces a div with display flex to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
        content: [
          {
            type: 'text',
            example: PageExample,
            exampleMarkDown: pageCode,
          },
        ],
      },
      // {
      //   slug: 'flex-col',
      //   title: 'Flex Col',
      //   description:
      //     'A super basic utility component that just replaces a div with display flex to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
      //   content: [
      //     {
      //       type: 'text',
      //       example: FlexColExample,
      //       exampleMarkDown: flexColCode,
      //     },
      //   ],
      // },
      {
        slug: 'page-content-width',
        title: 'Page Content Width',
        description:
          'A super basic utility component that just replaces a div with display flex to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
        content: [
          {
            type: 'text',
            example: PageContentWidthExample,
            exampleMarkDown: pageContentWidthExampleCode,
          },
        ],
      },
      {
        slug: 'sticky-container',
        title: 'Sticky Container',
        description:
          'A super basic utility component that just replaces a div with "display: flex;" and "flex-direction: column;" to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
        content: [
          {
            type: 'text',
            example: StickyTopBarExample,
            exampleMarkDown: stickyTopBarExampleCode,
          },
          {
            type: 'text',
            example: StickyTopBarExample2,
            exampleMarkDown: stickyTopBarExample2Code,
          },
        ],
      },
      {
        slug: 'number-animate',
        title: 'Number Animate',
        description:
          'A super basic utility component that just replaces a div with "display: flex;" and "flex-direction: column;" to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
        content: [
          {
            type: 'text',
            example: NumberAnimateExample,
            exampleMarkDown: numberAnimateExampleCode,
          },
        ],
      },
      {
        slug: 'select',
        title: 'Select',
        description: [
          "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
          'TODO: Change focus styling to utilise focus-visible to avoid on click focus styling. ',
        ],
        content: [
          {
            type: 'text',
            example: SelectExample,
            exampleMarkDown: SelectCode,
          },
        ],
      },
    ],
  },

  // {
  //   slug: 'inputs',
  //   category: 'Inputs',
  //   items: [
  //     {
  //       slug: 'select',
  //       title: 'Select',
  //       description:
  //         "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
  //       content: [
  //         {
  //           type: 'text',
  //           example: SelectExample,
  //           exampleMarkDown: SelectCode,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// Sort tools array into alphabetical order
// tools.sort((a, b) => {
//   const nameA = a.title.toLowerCase();
//   const nameB = b.title.toLowerCase();
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   return 0;
// });

export default tools;
