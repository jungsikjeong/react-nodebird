import React from "react";
import { Card, Icon, Button, Avatar } from "antd";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <Card
      // createdAt은 기본적으로 날짜 객체임.
      // 객체를 key에 넣으면 오류가 발생하기 때문에 +를 붙여 숫자로 형변환합니다.
      key={+post.createdAt}
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
