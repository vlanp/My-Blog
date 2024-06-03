import Link from "./navigation_menu/Link";

const NavigationMenu = () => {
  return (
    <section className="navigation-menu container">
      <div>
        <Link link="http://google.fr" />
        <Link link="http://google.fr" />
        <Link link="http://google.fr" />
      </div>
      <div>
        <Link link="http://google.fr" />
      </div>
    </section>
  );
};

export default NavigationMenu;
