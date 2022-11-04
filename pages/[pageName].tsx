import { CenterCol, ImgWrapper, PageWrapper } from "../styles/components";
import { GetServerSideProps, NextPage } from "next";
import { getDisplayDatetime, getDomainInfo } from "../util";
import Image from "next/image";
import { Page } from "../util/types";
import { PubDate } from "./blog/post/[postId]";
import SEO from "../components/seo";
import { pageMapping } from "../util/db";

interface Props {
  page: Page;
}

const SitePage: NextPage<Props> = ({ page }: Props) => {
  if (!page) {
    return null;
  }

  return (
    <>
      <SEO pageTitle={page.title} description={page.description} />

      <PageWrapper>
        <CenterCol>
          <h1>{page.title}</h1>

          <PubDate>Published: {getDisplayDatetime(page.updated)}</PubDate>

          {page.featuredImage?.url && (
            <ImgWrapper>
              <Image
                src={`https:${page.featuredImage.url}`}
                alt={page.featuredImage.title}
                fill={true}
                style={{
                  objectFit: "contain"
                }}
                sizes="70vw"
              />
            </ImgWrapper>
          )}

          <div dangerouslySetInnerHTML={{ __html: page.content! }} />
        </CenterCol>
      </PageWrapper>
    </>
  );
};

export default SitePage;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const pageName = query.pageName;

  // For some reason, landing page produces a .js pageName.
  if (!pageName || pageName.includes('.js')) {
    return { props: { page: {} } };
  }

  const pageId = pageMapping[pageName as string];

  const [host, protocol] = getDomainInfo(req.headers.host);

  const { page } = await (
    await fetch(`${protocol}://${host}/api/get-single-page?id=${pageId}`)
  ).json();

  return { props: { page } };
};
