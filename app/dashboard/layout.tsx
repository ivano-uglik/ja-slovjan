
import Sidebar from "../sections/Layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar element={children} />
  );
}
