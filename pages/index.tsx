export default function Home() {
  return (
    <div className='p-4 flex flex-col w-full'>
      <div className='flex flex-col bg-white w-full max-w-md mx-auto rounded-lg overflow-auto shadow-md'>
        <div className='bg-tertiary-200 flex-1 p-2 pb-10 flex flex-col items-center'>
          <span className='font-bold'>This is the Home Page</span>
        </div>
        <div
          style={{
            backgroundImage:
              'url(https://raw.githubusercontent.com/dogescript/grunt-dogescript/master/media/doge-01.jpg)',
          }}
          className='rounded-full p-2 bg-primary-800 text-white -mt-8 self-center w-16 h-16 bg-center bg-cover border-4 border-primary-800'
        />

        <p className='p-4'>
          This is some content This is some content This is some content This is
          some content This is some content This is some content This is some
          content
        </p>
      </div>
    </div>
  );
}
