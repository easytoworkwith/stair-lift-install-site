import './globals.css';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Stair Lift Connect';

export const metadata = {
  title: `${siteName} | Stair Lift Installation Options`,
  description: 'Connect with independent stair lift installation and home accessibility providers. Call to check availability near you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
