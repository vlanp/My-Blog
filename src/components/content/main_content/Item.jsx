import ItemTitle from "./item/ItemTitle";
import ItemSubtitle from "./item/ItemSubtitle";
import ItemPicture from "./item/ItemPicture";
import ItemDescription from "./item/ItemDescription";

const Item = ({ title, subtitle, description }) => {
  return (
    <section className="item">
      <ItemTitle title={title} />
      <ItemSubtitle subtitle={subtitle} />
      <ItemPicture />
      <ItemDescription description={description} />
    </section>
  );
};

export default Item;
