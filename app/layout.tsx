import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Doward Caparas',
  description: 'Doward Caparas - Frontend Developer specializing in modern JavaScript frameworks and responsive design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
       
          <Navbar />
          <div className='w-60 h-60 rounded-full -z-10 absolute
           bg-primary_purple blur-3xl bg-opacity-20 mt-36
          '></div>

          {children}
          <Footer />
       
      </body>
    </html>
  );
}
