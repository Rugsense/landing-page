import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rugsense — Real-time Web3 Security for Wallets & Smart Contracts',
  description:
    'Rugsense is a browser extension that analyzes smart contracts and wallet transactions in real-time, warning you about risks before you sign or connect.',
  keywords: [
    'Rugsense',
    'Web3 security',
    'smart contract analysis',
    'wallet protection',
    'DeFi safety',
    'NFT trading',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Rugsense — Real-time Web3 Security',
    description:
      'Analyze contracts and wallet actions in real-time. Get alerts for risky approvals, phishing dApps, and more.',
    url: '/',
    siteName: 'Rugsense',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
