import ItemTitle from "../main_content/item/ItemTitle";
import ItemPicture from "../main_content/item/ItemPicture";
import ItemDescription from "../main_content/item/ItemDescription";

const AboutMe = ({ title, description }) => {
  return (
    <section className="about-me">
      <ItemTitle title={title} />
      <ItemPicture />
      <ItemDescription description={description} />
    </section>
  );
};

export default AboutMe;
