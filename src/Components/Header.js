import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCar } from "../Features/Cars/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [Open, setOpen] = useState(false);
  const [Cars, setCars] = useState([]);

  const state = useSelector(selectCar);
  useEffect(() => {
    setCars(state);
  }, []);
  return (
    <React.Fragment>
      <Container>
        <a href="#">
          <img src="/images/logo.svg" alt="tesla-logo" />
        </a>
        <Menu>
          {Cars.map((car) => (
            <a href="#" key={car}>
              {car}
            </a>
          ))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">tesla Account</a>
          <CustomIcon onClick={() => setOpen(true)} />
        </RightMenu>
      </Container>
      <SideNav show={Open}>
        <CustomClose>
          <CloseIcon onClick={() => setOpen(false)} />
        </CustomClose>
        {Cars.map((car) => (
          <li key={car}>
            <a href="#">{car}</a>
          </li>
        ))}
        <img src="./black.svg" />
      </SideNav>
    </React.Fragment>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  min-height: 60px;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 600;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 0 10px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 11px;
    text-transform: uppercase;
  }
`;

const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
  padding: 0 10px 0 0;
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: white;
  padding: 20px;
  text-align: start;
  z-index: 99;
  font-weight: 600;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin: 20px 0;
    font-size: 20px;
  }
`;
const CustomClose = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
