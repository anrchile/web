import { Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "@web/globals.css";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
            </head>
            <body>
                {children}
                <Scripts />
                <ScrollRestoration />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary() {
    return (
        <div>
            <h1>Error</h1>
        </div>
    );
}
