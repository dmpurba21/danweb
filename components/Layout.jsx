import { Sora } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
        <title>Daniel Purba | Portfolio</title>
        <meta
          name="description"
          content="Daniel Purba — Software License Advisor with 12+ years across ASEAN and APAC. Specialising in license compliance, vendor risk, and data analytics."
        />
        <meta
          name="keywords"
          content="software asset management, SAM, ITAM, license compliance, vendor risk, TPRM, IBM, Microsoft, ASEAN, APAC, audit defense"
        />
        <meta name="author" content="Daniel Purba" />
        <meta name="theme-color" content="#f13024" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </main>
  );
};

export default Layout;
