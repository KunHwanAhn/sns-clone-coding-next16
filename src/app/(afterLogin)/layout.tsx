interface AfterLoginLayoutProps extends React.PropsWithChildren {}

const AfterLoginLayout = ({ children }: AfterLoginLayoutProps) => {
  return (
    <>
      <div>After Login Layout</div>
      {children}
    </>
  );
}

export default AfterLoginLayout;
