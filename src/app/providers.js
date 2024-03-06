import theme from '@/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import StoreProvider from '@/lib/StoreProvider';

export function Providers({ children }) {
    return (
        <StoreProvider>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
        </StoreProvider>
    );
}
