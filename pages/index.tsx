import type { NextPage } from "next";
import Banner from "../src/components/Banner";
import ContentInfo from "../src/components/ContentInfo";
import NavBar from "../src/components/NavBar";
import Seperator from "../src/components/Seperator";
import Trends from "../src/components/Trends";
import {
  PageLayoutContent,
  LeftSideContainer,
  RightSideContainer,
  StyledImg,
  GridSection,
} from "../src/styles/Layout.ui";
import { Container } from "../src/styles/Trends.ui";
import Post from "../src/components/Post";
import { PostWrapper } from "../src/styles/Post.ui";
import SubPosts from "../src/components/SubPosts";
import RecentArticles from "../src/components/RecentArticles";
import PopularTags from "../src/components/PopularTags";
import Footer from "../src/components/Footer";
import PopularPosts from "../src/components/PopularPosts";
import PopularLabels from "../src/components/PopularLabels";
import AdSpace from "../src/components/AdSpace";
import axios from "axios";
import { ArticleAtributes, PageProps } from "../src/types/types";
import { strToColor } from "../src/utils/strToColor";

const Home: NextPage<PageProps<ArticleAtributes>> = (
  props: PageProps<ArticleAtributes>
) => {
  if (props.status === 404) {
    return <div>{props?.error}</div>;
  }

  return (
    <>
      {/* <NavBar /> */}
      <Banner {...props.data} />
      <Container>
        <Trends {...props.data.transformedData["sports"]} />
        <PageLayoutContent>
          <LeftSideContainer>
            <Seperator
              title={props.data.transformedData["politics"][0]?.Tag}
              tagColor={strToColor(
                props.data.transformedData["politics"][0]?.Tag
              )}
            />
            <StyledImg
              src={`${process.env.BASE_URL_API}${props.data.transformedData["politics"][0]?.imgUrl}`}
            />
            <ContentInfo
              postDate={
                props.data.transformedData["politics"][0]?.createdAt.split(
                  "T"
                )[0]
              }
              title={props.data.transformedData["politics"][0]?.Title}
              writterInfo={props.data.transformedData["politics"][0]?.Writter}
              tag={props.data.transformedData["politics"][0]?.Tag}
              titleFS="30px"
            />
            <PostWrapper>
              {props.data?.transformedData["politics"].map(
                (item, index, arr) => {
                  if (arr.length > 1 && index !== 0 && index <= 3) {
                    return <Post key={index} {...item} />;
                  }
                }
              )}
            </PostWrapper>
            <GridSection>
              <SubPosts
                tag="sports"
                transformedData={props.data?.transformedData["sports"]}
              />
              <SubPosts
                tag="meteo"
                transformedData={props.data?.transformedData["meteo"]}
              />
            </GridSection>
            <RecentArticles
              tag="business"
              transformedData={props.data?.transformedData["business"]}
            />
          </LeftSideContainer>
          <RightSideContainer>
            <PopularPosts />
            <Seperator
              title="Labels"
              backgroundColor="#989494"
              tagColor="red"
              AdditionalText
            />
            {props.popularLabels.map((label, index) => {
              return <PopularLabels key={index} popularLabels={label} />;
            })}
            <AdSpace />
          </RightSideContainer>
        </PageLayoutContent>
        <PopularTags />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

export interface ImgResp {
  url: string;
  id: number;
  width: number;
  height: number;
}
export const getServerSideProps = async () => {
  try {
    const resp = await axios.get(
      `${process.env.BASE_URL_API}/api/posts?sort=createdAt:desc`
    );
    const { data: imgResp } = await axios.get<ImgResp[]>(
      `${process.env.BASE_URL_API}/api/upload/files?sort=createdAt:desc`
    );

    const newData = resp?.data.data.map((item: any, index: number) => {
      return {
        ...item.attributes,
        imgUrl: imgResp[index].url,
        width: imgResp[index].width,
        height: imgResp[index].height,
      };
    });
    const transformedData: { [key: string]: ArticleAtributes[] } =
      newData.reduce(
        (groups: any, item: any) => ({
          ...groups,
          [item.Tag.toLowerCase()]: [
            item,
            ...(groups[item.Tag.toLowerCase()] || []),
          ],
        }),
        {}
      );

    const popularLabels = Object.keys(transformedData).map((item) => {
      return { [item]: transformedData[item].length };
    });

    return {
      props: {
        data: { transformedData },
        popularLabels,
        status: 200,
      },
    };
  } catch (error: any) {
    return {
      props: {
        error: "Something went wrong",
        data: [],
        status: 404,
      },
    };
  }
};
