import { NavLink, Title } from './SideNavBarElements';
function SideNavBar() {
  return (
    <>
      <nav>
        <Title>Devchallenges.io</Title>
        <NavLink colors>Colors</NavLink>
        <NavLink typography>Typography</NavLink>
        <NavLink spaces>Spaces</NavLink>
        <NavLink buttons>Buttons</NavLink>
        <NavLink inputs>Inputs</NavLink>
        <NavLink grid>Grid</NavLink>
      </nav>
    </>
  );
}

export default SideNavBar;
