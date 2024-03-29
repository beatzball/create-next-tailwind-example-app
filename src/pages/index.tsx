import { useEffect } from 'react';
import Button, { Colors } from '../components/Button';
import Input from '../components/Input';
import { useThemeContext } from '../contexts/theme';

export default function Home() {
  const { dark, setDark } = useThemeContext();
  return (
    <div className='p-4 flex flex-col w-full'>
      <div className='flex flex-col bg-white dark:bg-gray-600 w-full max-w-md mx-auto rounded-lg overflow-auto shadow-md'>
        <div className='bg-tertiary-300 dark:bg-tertiary-700 flex-1 p-2 pb-10 flex flex-col items-center'>
          <span className='font-bold'>This is the Home Page</span>
        </div>
        <div
          style={{
            backgroundImage:
              'url(https://raw.githubusercontent.com/dogescript/grunt-dogescript/master/media/doge-01.jpg)',
          }}
          className='rounded-full p-2 bg-action-default -mt-8 self-center w-16 h-16 bg-center bg-cover border-4 border-action-default'
        />

        <p className='p-4'>
          This is some content This is some content This is some content This is
          some content This is some content This is some content This is some
          content
        </p>
        <div className='p-4'>
          <div>Toggle Dark Mode</div>
          <button
            className={`
              flex border-2 rounded-full w-12
              ${dark ? 'bg-black' : 'bg-white'}
            `}
            onClick={() => setDark(!dark)}
          >
            <div
              className={`
                border-2 rounded-full h-6 w-6
                transform duration-100 ease-in-out
                ${
                  !dark
                    ? 'translate-x-5 bg-black border-white'
                    : 'bg-white border-black'
                }
              `}
            />
          </button>
        </div>
        <div className='w-full max-w-sm mx-auto space-y-2 mb-4'>
          <Input type='email' placeholder='email' />
          <Input type='password' placeholder='password' />
          <Button>Submit</Button>
          {['primary', 'secondary', 'tertiary', 'accent', 'violator'].map(
            (color: Colors) => (
              <div className='flex space-x-2' key={color}>
                <Button color={color}>{color}</Button>
                <Button color={color} weight='light'>
                  {color}
                </Button>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
