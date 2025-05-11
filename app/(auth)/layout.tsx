import ModeToggle from '@/components/mode-toggle/ModeToggle';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative h-[100vh] flex items-center justify-center'>
      {children}
      <div className='absolute bottom-5 right-0 text-white'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default AuthLayout;
