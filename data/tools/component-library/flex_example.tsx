import Flex from '../../../components/generic/Flex';

const Example = () => (
  <Flex
    style={{
      width: '100%',
      justifyContent: 'space-between',
    }}
  >
    <div style={{ color: 'red' }}>Left</div>
    <div style={{ color: 'green' }}>Middle</div>
    <div style={{ color: 'blue' }}>Right</div>
  </Flex>
);

export default Example;
