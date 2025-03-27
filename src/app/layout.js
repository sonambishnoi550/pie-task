
import "./globals.css";

export const metadata = {
  title: "Pie",
  description: "We’ll show the tax breakdown per income type and our app will even calculate an overall aggregated tax calculation.",
  openGraph: {
    title: "Pie",
    description: "We’ll show the tax breakdown per income type and our app will even calculate an overall aggregated tax calculation. ",
    images: [
      {
        url: "/meta-tag.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
