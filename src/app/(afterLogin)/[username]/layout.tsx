interface UserLayoutProps extends React.PropsWithChildren {};

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <div>User Layout</div>
      <>{children}</>
    </>
  );
}

export default UserLayout;
