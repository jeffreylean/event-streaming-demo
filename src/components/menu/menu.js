import { Menu } from "antd";
import {
  HomeOutlined,
  CarOutlined,
  CoffeeOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      )
    );
  }, []);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Menu.Item key="hotel" icon={<HomeOutlined />}>
        <Link to={"/hotel"}>Hotel</Link>
      </Menu.Item>
      <Menu.Item key="food" icon={<CoffeeOutlined />}>
        <Link to={"/food"}>Food</Link>
      </Menu.Item>
      <Menu.Item key="ride" icon={<CarOutlined />}>
        <Link to={"/ride"}>Ride</Link>
      </Menu.Item>
      <Menu.Item key="flight" icon={<RocketOutlined />}>
        <Link to={"/flight"}>Flight</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
