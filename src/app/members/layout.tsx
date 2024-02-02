import "./members.css";

export default function MembersLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        {children}
      </div>
    );
  }