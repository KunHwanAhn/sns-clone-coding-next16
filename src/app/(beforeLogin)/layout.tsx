const BeforeLoginLayout = ({ children, loginModal }: LayoutProps<"/">) => {
  return (
    <>
      {children}
      {loginModal}
    </>
  );
};

export default BeforeLoginLayout;
