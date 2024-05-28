import { code as code01, Example as Example01 } from './example_01';
import { code as code02, Example as Example02 } from './example_02';

const examples = {
  slug: 'checkbox-input',
  title: 'CheckboxInput',
  category: 'Components',
  description: [
    "CheckboxInput is used for replacing the default HTML checkbox input with your own. The default checkbox is very limited in how it's appearance may be customised so many developers opt for replacing it. However, in doing so, it is important that developers don't forget to take accessibility into consideration.",
    'HTML inputs interact with screen readers, tools that read out the content of a web page for people with limiting sight. These are difficult or impossible to replicate in ways that user of a screen reader would expect. As such it is considered best practice to still place a HTML input on the page but hide it from view letting it behave normally in all ways except visually.',
    'CheckboxInput is a component that does that. It creates an input with type="checkbox" and hides it with CSS. The inputs checked and disabled state are then passed to a replacement component given in its CheckboxComponent property. A developer can then use the properties to adjust rendering of their custom checkbox as needed.',
  ],
  content: [
    {
      type: 'text',
      example: Example01,
      exampleMarkDown: code01,
    },
    {
      type: 'text',
      example: Example02,
      exampleMarkDown: code02,
    },
  ],
};
export default examples;
