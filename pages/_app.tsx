import { AppProps } from 'next/app';
import '../styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-tertiary-900 h-full'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
