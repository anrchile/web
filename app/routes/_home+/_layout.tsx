import Footer from "@web/components/Footer";
import { Header } from "@web/components/Header";
import { type MetaFunction, Outlet } from "react-router";

export const meta: MetaFunction = () => {
    return [
        { title: "Academia Nacional de Robótica de Olmué" },
        { name: "description", content: "Academia Nacional de Robótica de Olmué" }
    ];
};

export default function HomeLayout() {
    return (
        <body className="bg-gray-900 min-h-screen dark text-foreground">
            <Header />
            <Outlet />
            <Footer />
        </body>
    );
}
