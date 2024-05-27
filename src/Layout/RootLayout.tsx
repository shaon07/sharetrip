import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <div className="w-full flex items-start justify-between gap-4 p-4">
          <aside className="flex-1">
            <Sidebar />
          </aside>
          <div className="flex-2">{children}</div>
        </div>
      </main>
    </section>
  );
}
