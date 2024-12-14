
export default function products({
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
