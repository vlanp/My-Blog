import Title from "./header/Title";
import Baseline from "./header/Baseline";

const Header = ({ title, baseline }) => {
  return (
    <header className="container">
      <Title title={title} />
      <Baseline baseline={baseline} />
    </header>
  );
};

export default Header;
