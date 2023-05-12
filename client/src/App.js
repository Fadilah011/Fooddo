import { ThemeProvider } from '@mui/material/styles';
import { themeConfigs, themeModes } from './configs/theme.configs';
import Layout from './components/Layout/Layout';

const App = () => {
  const mode = themeModes.light; // Ganti dengan mode yang sesuai
  const theme = themeConfigs.custom({ mode });

  return (
    <ThemeProvider theme={theme}>
      <Layout/>

      {/* Komponen-komponen lain dalam aplikasi */}
    </ThemeProvider>
  );
};

export default App;
