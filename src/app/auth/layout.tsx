import { AuthLayout as Layout } from "@/components/layout/auth-layout";
import "@/styles/globals.css";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Layout>
            {children}
        </Layout>
    );
}
