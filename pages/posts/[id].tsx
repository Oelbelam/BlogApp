import axios from "axios";
import React from "react";
import { ImgResp } from "..";
import { ArticleAtributes, AxiosResponsData } from "../../src/types/types";

function Posts() {
  return <div>posts</div>;
}

export default Posts;

export const getStaticProps = async (props: any) => {
  const { data } = await axios.get<{ data: ArticleAtributes }>(
    `${process.env.BASE_URL_API}/api/posts/${props.params.id}`
  );

  const { data: imgResp } = await axios.get<ImgResp>(
    `${process.env.BASE_URL_API}/api/upload/files/${props.params.id}`
  );

  return {
    props: {
      data: { ...data, ...imgResp },
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get<{
    data: AxiosResponsData<ArticleAtributes>[];
  }>(`${process.env.BASE_URL_API}/api/posts`);

  const paths = data.data.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};
