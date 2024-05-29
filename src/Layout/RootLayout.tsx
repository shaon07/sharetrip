import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

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
        <div className="grid grid-cols-[248px_1fr] gap-4 p-4">
          <aside>
            <Sidebar />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </main>
    </section>
  );
}
