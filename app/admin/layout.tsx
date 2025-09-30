import SideBar from "@/components/SideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen grid grid-cols-6 max-w-7xl mx-auto">
      <SideBar />
      <div className="col-span-5">
        {children}
      </div>
    </div>
  );
}
