import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='flex'>
        <div className='hidden md:block h-[100vh] w-[250px]'>
          <Sidebar />
        </div>
        <div className='p-5 flex-1'>{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
