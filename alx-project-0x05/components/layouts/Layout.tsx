import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // tell TS this component can receive children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <h1>My App Header</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
