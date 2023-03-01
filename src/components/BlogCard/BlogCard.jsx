import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import CardPoster from "../Card/CardPoster";
import CardText from "../Card/CardText";
import CardTitle from "../Card/CardTitle";
import Tag from "../Tag";
import CardFooter from "../Card/CardFooter";
import UserBox from "../UserBox";
import Avatar from "../Avatar";
import UserInfo from "../UserInfo";

const BlogCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardPoster
          src="https://source.unsplash.com/600x400/?computer"
          alt="card__image"
          vasya="123"
        />
      </CardHeader>
      <CardBody>
        <Tag tag="Technology" />
        <CardTitle title="What's new in 2022 Tech" />
        <CardText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!"
        />
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
          <UserInfo />
        </UserBox>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
