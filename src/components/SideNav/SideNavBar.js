import { NavLink, Title } from './SideNavBarElements';
function SideNavBar() {
  return (
    <>
      <Title>Devchallenges.io</Title>
      <nav>
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
