import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'James | USC ECE & XR Developer',
  description: 'Personal portfolio of James - USC Electrical & Computer Engineering student and XR Developer',
  keywords: ['James', 'USC', 'Electrical Engineering', 'Computer Engineering', 'XR Developer', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
