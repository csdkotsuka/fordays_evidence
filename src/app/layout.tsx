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
  title: 'FORDAYSエビデンス検証ポータル | リハビリ専門職の科学的・客観的分析',
  description: 'フォーデイズ（FORDAYS）の核酸ドリンク・特許公報（Google Patents原本）、大学共同研究、基礎生理学メカニズムを、長年リハビリテーション教育・臨床に携わる専門職が徹底解説。健康の4大基盤（運動・食事・休養・低ストレス）と提唱「運動寿命」の延伸を科学的に提案します。',
  keywords: ['FORDAYS', 'フォーデイズ', '核酸ドリンク', '運動寿命', '健康寿命', 'エビデンス', '特許', 'Google Patents', '理学療法士', 'パーソナルトレーニング', 'サルコペニア', 'BCAA', 'メカニカルストレス', '毛細血管新生'],
  openGraph: {
    title: 'FORDAYSエビデンス検証ポータル | リハビリ専門職の科学的検証',
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
