interface SeoProps {
  metaTitle: string;
  metaDesc: string;
  metaImg?: any;
  keywords?: string;
  metaViewport?: string;
  canonicalUrl?: string;
}

export const Seo = ({
  metaTitle,
  metaDesc,
  metaImg,
  keywords,
  metaViewport,
  canonicalUrl,
}: SeoProps) => {
  return (
    <>
      {/* Primary meta tags */}
      <title>::{metaTitle}::</title>
      <link rel="canonical" href={`${canonicalUrl}`} />
      <meta name="title" content={`${metaTitle}`} />
      <meta name="description" content={`${metaDesc}`} />
      <meta name="viewport" content={`${metaViewport}`} />
      <meta name="keywords" content={`${keywords}`} />

      {/* Open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${canonicalUrl}`} />
      <meta property="og:title" content={`${metaTitle}`} />
      <meta property="og:description" content={`${metaDesc}`} />
      <meta property="og:image" content={`${metaImg}`} />
      <meta property="og:site_name" content={`${metaTitle}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="website" />
      <meta property="twitter:url" content={`${canonicalUrl}`} />
      <meta property="twitter:title" content={`${metaTitle}`} />
      <meta property="twitter:description" content={`${metaDesc}`} />
      <meta property="twitter:image" content={`${metaImg}`} />
    </>
  );
};
