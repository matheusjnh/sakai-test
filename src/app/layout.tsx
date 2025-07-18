import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@/styles/layout/layout.scss';
import { Metadata } from 'next';

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'TheuJnh'
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <head>
                <link id="theme-css" href={`/themes/lara-light-blue/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                <PrimeReactProvider>{children}</PrimeReactProvider>
            </body>
        </html>
    );
}
