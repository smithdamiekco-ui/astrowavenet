import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SEO = ({ title, description, path, type = "website" }: SEOProps) => {
  const url = `https://CoreWaveConnect.com${path}`;
  const fullTitle = path === "/" ? title : `${title} | CoreWaveConnect`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    </Helmet>
  );
};

export default SEO;
