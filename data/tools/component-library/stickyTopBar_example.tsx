import StickyContainer from '../../../components/generic/StickyTopBar';

export const Example = () => {
  const handleOpen = () => {
    console.log('YAY');
  };
  const handleClose = () => {
    console.log('Boo');
  };
  return (
    <div style={{ height: '600px' }}>
      <div style={{ height: '400px', border: '2px solid red' }}>
        <StickyContainer onOpen={handleOpen} onClose={handleClose}>
          <div
            style={{ padding: '16px', background: 'lightgrey', flexGrow: 1 }}
          >
            I'm sticky within the red box and will retract when scrolling down
            but reappears when scrolling up.
          </div>
        </StickyContainer>
      </div>
    </div>
  );
};

export const exampleCode = [
  {
    language: 'jsx',
    code: `<div style={{ height: '400px', border: '2px solid red' }}>
  <StickyContainer>
    <div style={{ 
      padding: '16px', 
      background: 'lightgrey', 
      flexGrow: 1 
    }}>
      I'm sticky within the red box and will retract when scrolling 
      down but reappears when scrolling up.
    </div>
  </StickyContainer>
</div>`,
  },
];
