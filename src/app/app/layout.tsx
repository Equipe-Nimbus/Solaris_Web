'use client';

import { ContentLayout as Layout } from "@/components/layout/content-layout";
import "@/styles/globals.css";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function ContentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

    return (
        <APIProvider apiKey={API_KEY}>
            <Layout>
                {children}
            </Layout>
        </APIProvider>
    );
}
