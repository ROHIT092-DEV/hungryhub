import AdminHeader from "@/components/((admin))/Header";


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <AdminHeader />
      <div className="">
        {children}
      </div>
    </div>
  );
}
