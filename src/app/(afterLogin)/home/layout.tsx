interface HomeLayoutProps extends React.PropsWithChildren {}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <div>Home Layout</div>
      {children}
    </>
  );
}

export default HomeLayout;
