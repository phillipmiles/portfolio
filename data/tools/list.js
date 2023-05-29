import flexExample from './component-library/flex_example';
import flexCode from './component-library/flex_code.tsx';
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
  Example as ContentSliderExample,
  exampleCode as contentSliderCode,
} from './component-library/contentSlider_example1.tsx';
import {
  Example as PageExample,
  exampleCode as pageCode,
} from './component-library/page_example.tsx';
import {
  Example as PageWithFooterExample,
  exampleCode as pageWithFooterCode,
} from './component-library/pageWithFooter_example.tsx';
import {
  CustomCheckboxExample,
  customCheckboxExampleCode,
} from './component-library/customCheckbox_example';
import {
  PageContentWidthExample,
  pageContentWidthExampleCode,
} from './component-library/PageContentWidth';
import {
  flexColCode,
  FlexColExample,
} from './component-library/flexCol_example';
import {
  contentRevealCode,
  contentRevealCode2,
  ContentRevealExample,
  ContentRevealExample2,
} from './component-library/contentReveal_example';

const tools = [
  {
    slug: 'flex',
    title: 'Flex',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: column' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: [
      {
        type: 'text',
        example: flexExample,
        exampleMarkDown: flexCode,
      },
    ],
  },
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
    slug: 'custom-checkbox',
    title: 'Custom Checkbox',
    description:
      'A super basic utility component that just replaces a div with display flex to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
    content: [
      {
        type: 'text',
        example: CustomCheckboxExample,
        exampleMarkDown: customCheckboxExampleCode,
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
  // {
  //   slug: 'page-content-wrap',
  //   title: 'Page Content Wrap',
  //   description:
  //     'A super basic utility component that just replaces a div with "display: flex;" and "flex-direction: column;" to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
  //   content: [
  //     {
  //       type: 'text',
  //       example: flexExample,
  //       exampleMarkDown: flexCode,
  //     },
  //   ],
  // },
  {
    slug: 'content-slider',
    title: 'Content Slider',
    description:
      'A super basic utility component that just replaces a div with "display: flex;" and "flex-direction: column;" to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.',
    content: [
      {
        type: 'text',
        example: ContentSliderExample,
        exampleMarkDown: contentSliderCode,
      },
    ],
  },
  {
    slug: 'content-reveal',
    title: 'Content Reveal',
    description:
      "A simple utility component that replaces a div with 'display: flex' and 'flex-direction: row' to a component called Flex. I use flex alot and seeing a Flex component when scanning code is just easier for me to read.",
    content: [
      {
        type: 'text',
        example: ContentRevealExample,
        exampleMarkDown: contentRevealCode,
      },
      // {
      //   type: 'text',
      //   example: ContentRevealExample2,
      //   exampleMarkDown: contentRevealCode2,
      // },
    ],
  },
];

// Sort tools array into alphabetical order
tools.sort((a, b) => {
  const nameA = a.title.toLowerCase();
  const nameB = b.title.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

export default tools;
