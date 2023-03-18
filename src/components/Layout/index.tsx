import Header from '@/components/Header';

import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <S.MainContent>
        {children}
      </S.MainContent>
    </>
  );
}
