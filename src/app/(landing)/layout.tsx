const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-container border-2 border-black font-poppins">
      {children}
    </div>
  );
};

export default Layout;
