import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto'
});

export const metadata: Metadata = {
  title: 'FORDAYSエビデンス検証ポータル | 理学療法士22年の科学的・客観的分析',
  description: 'フォーデイズ（FORDAYS）の核酸ドリンク・特許公報（Google Patents原本）、大学共同研究、基礎生理学メカニズムを、理学療法士・教員歴22年の専門職が徹底解説。サプリメントと適切な運動（メカニカルストレス）の相乗効果で100歳まで動ける身体づくりを提案します。',
  keywords: ['FORDAYS', 'フォーデイズ', '核酸ドリンク', 'エビデンス', '特許', 'Google Patents', '理学療法士', 'パーソナルトレーニング', 'サルコペニア', 'BCAA', 'メカニカルストレス', '毛細血管新生'],
  openGraph: {
    title: 'FORDAYSエビデンス検証ポータル | 理学療法士22年の科学的検証',
    description: '特許14件原本、大学共同研究（神戸大・東大・金沢大等）、生理学メカニズム、エビデンスの強みと限界を誠実に解説。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
