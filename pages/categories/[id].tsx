import axios from "axios";
import { NextPage } from "next";
import React from "react";
import { ImgResp } from "..";
import AdSpace from "../../src/components/AdSpace";
import ContentInfo from "../../src/components/ContentInfo";
import PopularLabels from "../../src/components/PopularLabels";
import PopularPosts from "../../src/components/PopularPosts";
import Seperator from "../../src/components/Seperator";
import {
  GridSection,
  LeftSideContainer,
  PageLayoutContent,
  RightSideContainer,
  StyledImg,
} from "../../src/styles/Layout.ui";
import {
  PostTextArea,
  ResentPostContainer,
} from "../../src/styles/RecentArticles.ui";
import { Container } from "../../src/styles/Trends.ui";
import { ArticleAtributes, AxiosResponsData } from "../../src/types/types";

interface CategoriesProps<T> extends ImgResp {
  id: number;
  attributes: T;
}

const Categories: NextPage<{
  posts: CategoriesProps<ArticleAtributes>[];
  popularLabels: { [item: string]: number }[];
}> = (props: {
  posts: CategoriesProps<ArticleAtributes>[];
  popularLabels: { [item: string]: number }[];
}) => {
  return (
    <Container>
      <PageLayoutContent>
        <LeftSideContainer>
          <GridSection>
            {props.posts.map((item, index) => {
              return (
                <ResentPostContainer key={index}>
                  <StyledImg src={`${process.env.BASE_URL_API}${item.url}`} />
                  <ContentInfo
                    postDate={item.attributes.createdAt.split("T")[0]}
                    title={item.attributes.Title}
                    writterInfo={item.attributes.Writter}
                    tag={item.attributes.Tag}
                    titleFS="30px"
                  />
                  <PostTextArea>
                    {item.attributes.Article.slice(0, 200)}...
                  </PostTextArea>
                </ResentPostContainer>
              );
            })}
          </GridSection>
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
    </Container>
  );
};

export const getStaticProps = async (props: any) => {
  const resp = await axios.get(
    `${process.env.BASE_URL_API}/api/posts?filters[Tag][$eqi]=${props.params.id}`
  );

  const res = await axios.get(`${process.env.BASE_URL_API}/api/posts`);

  const dataToTransform = res?.data.data.map((item: any) => {
    return {
      ...item,
    };
  });
  const transformedData: { [key: string]: ArticleAtributes[] } =
    dataToTransform.reduce(
      (groups: any, item: any) => ({
        ...groups,
        [item.attributes.Tag.toLowerCase()]: [
          item,
          ...(groups[item.attributes.Tag.toLowerCase()] || []),
        ],
      }),
      {}
    );
  const popularLabels = Object.keys(transformedData).map((item) => {
    return { [item]: transformedData[item].length };
  });
  const { data: imgResp } = await axios.get<ImgResp[]>(
    `${process.env.BASE_URL_API}/api/upload/files?sort=createdAt:desc`
  );
  const posts = resp.data.data.map((item: any, index: number) => {
    return { ...item, ...imgResp.find((item2) => item2.id === item.id) };
  });

  return {
    props: {
      posts,
      popularLabels,
    },
  };
};

export const getStaticPaths = async () => {
  const {
    data: { data },
  } = await axios.get<{ data: AxiosResponsData<ArticleAtributes>[] }>(
    `${process.env.BASE_URL_API}/api/posts?sort=createdAt:desc`
  );

  const tags = [
    ...new Set(
      data.map((item) => {
        return item.attributes.Tag.toLowerCase();
      })
    ),
  ];
  const paths = tags.map((item) => {
    return { params: { id: item } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Categories;
