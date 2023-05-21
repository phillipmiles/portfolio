import Flex from '../../../components/generic/Flex';

const Example = () => (
  <Flex
    style={{
      width: '100%',
      justifyContent: 'space-between',
      color: 'blue',
    }}
  >
    <div>Left</div>
    <div>Middle</div>
    <div>Right</div>
  </Flex>
);

export default Example;
