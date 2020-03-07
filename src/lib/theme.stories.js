/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import FlexCol from '../components/FlexCol';
import FlexColItem from '../components/FlexColItem';
import { Text } from '../components';

export default { title: 'Styles' };

const Swatches = ({ themeKey, themeProperty }) => {
  const context = useThemeUI();
  const { theme } = context;
  const themeKeys = Object.keys(theme[themeKey]);

  return themeKeys.map(key => (
    <FlexColItem cols={3} key={key} sx={{ mb: 4 }}>
      <Text sx={{ mb: 2 }}>{key}</Text>
      <div
        sx={{
          width: 9,
          height: 9,
          borderRadius: 'small',
          boxShadow: 0,
          [themeProperty]: key,
        }}
      />
    </FlexColItem>
  ));
};

export const colors = () => {
  return (
    <FlexCol margin={0} gutter={3}>
      <Swatches themeKey="colors" themeProperty="bg" />
    </FlexCol>
  );
};

export const shadows = () => {
  return (
    <FlexCol margin={0} gutter={3}>
      <Swatches themeKey="shadows" themeProperty="boxShadow" />
    </FlexCol>
  );
};
