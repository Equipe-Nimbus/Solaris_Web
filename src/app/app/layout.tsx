import { ContentLayout as Layout } from "@/components/layout/content-layout";
import "@/styles/globals.css";

export default function ContentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <Layout>
            {children}
        </Layout>
    );
}
