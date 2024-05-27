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
          <aside className="w-[248px]">
            <Sidebar />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </main>
    </section>
  );
}
