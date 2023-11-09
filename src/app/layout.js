import './index.css';
import { GlobalProvider } from '@/redux/provider';
import { Footer, Header, SideBar } from '@/app/components';

export const metadata = {
  title: 'Региональная строительная компания',
  description: 'Ведущий в Росиии разработчик компьютерных решений',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <GlobalProvider>
          <Header />
          <SideBar />
          <main className="main">{children}</main>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  )
}
