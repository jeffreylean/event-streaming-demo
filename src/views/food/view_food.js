import { Header } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Space, Alert, notification } from "antd";
import Meta from "antd/lib/card/Meta";

import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  addEnhancedEcommerceActionContext,
  addEnhancedEcommerceProductContext,
  trackEnhancedEcommerceAction
} from "@snowplow/browser-plugin-enhanced-ecommerce";

const ViewFood = () => {
  const { foodId } = useParams();

  if (foodId === "kfc") {
    return (
      <>
        <div style={{ height: "250px", width: "100%" }}>
          <img
            src={require("../../assets/image/kfc/kfc_cover.webp")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
            alt="food pic"
          ></img>
        </div>
        <Row justify="center">
          <Space style={{ marginTop: 20 }}>
            <Card
              cover={
                <img
                  src={require("../../assets/image/kfc/zinger_box.jpeg")}
                  alt="food"
                />
              }
              style={{ width: 200 }}
              actions={[
                <ShoppingCartOutlined
                  style={{ color: "red" }}
                  onClick={() => {
                    addEnhancedEcommerceProductContext({
                      id: "zinger_box",
                      name: "Zinger Box",
                      category: "Set",
                      quantity: 1
                    });

                    addEnhancedEcommerceActionContext({
                      id: "action_click",
                      currency: "MYR"
                    });

                    trackEnhancedEcommerceAction({
                      action: "click"
                    });
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />
                    });
                  }}
                />
              ]}
            >
              <Meta title="Zinger Box" description="Set box A" />
            </Card>
            <Card
              cover={
                <img
                  src={require("../../assets/image/kfc/rice_plate.jpg")}
                  alt="food"
                />
              }
              style={{ width: 200 }}
              actions={[
                <ShoppingCartOutlined
                  style={{ color: "red" }}
                  onClick={() => {
                    addEnhancedEcommerceProductContext({
                      id: "rice_plate",
                      name: "Rice Plate",
                      category: "Set",
                      quantity: 1
                    });

                    addEnhancedEcommerceActionContext({
                      id: "action_click",
                      currency: "MYR"
                    });

                    trackEnhancedEcommerceAction({
                      action: "click"
                    });
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />
                    });
                  }}
                />
              ]}
            >
              <Meta title="Rice plate" description="With rice" />
            </Card>
          </Space>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <div style={{ height: "250px", width: "100%" }}>
          <img
            src={require("../../assets/image/mcd/garspicysesamemcchickenfebwebsitebannerimagexjpg_1644209175660.webp")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          ></img>
        </div>
        <Row justify="center">
          <Space style={{ marginTop: 20 }}>
            <Card
              cover={
                <img
                  src={require("../../assets/image/mcd/screenshot-pmpng_1645370887677.webp")}
                  alt="food"
                />
              }
              style={{ width: 200 }}
              actions={[
                <ShoppingCartOutlined
                  style={{ color: "red" }}
                  onClick={async () => {
                    for (let i = 0; i <= 29; i++) {
                      await new Promise((r) => setTimeout(r, 5000)).then(() => {
                        addEnhancedEcommerceProductContext({
                          id: "double_spicy_chicken_mcdeluxe",
                          name: "Double spicy chicken mcDeluxe",
                          category: "Set",
                          quantity: 1
                        });

                        addEnhancedEcommerceActionContext({
                          id: "action_click",
                          currency: "MYR"
                        });

                        trackEnhancedEcommerceAction({
                          action: "click"
                        });
                      });
                    }
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />
                    });
                  }}
                />
              ]}
            >
              <Meta title="Double spicy chicken mcDeluxe" />
            </Card>
            <Card
              cover={
                <img
                  src={require("../../assets/image/mcd/screenshot-pmpng_1645371489935.webp")}
                  alt="food"
                />
              }
              style={{ width: 200 }}
              actions={[
                <ShoppingCartOutlined
                  style={{ color: "red" }}
                  onClick={() => {
                    addEnhancedEcommerceProductContext({
                      id: "spicy_chicken_mcdeluxe",
                      name: "Spicy chicken mcDeluxe",
                      category: "Set",
                      quantity: 1
                    });

                    addEnhancedEcommerceActionContext({
                      id: "action_click",
                      currency: "MYR"
                    });

                    trackEnhancedEcommerceAction({
                      action: "click"
                    });
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />
                    });
                  }}
                />
              ]}
            >
              <Meta title="Spicy chicken mcDeluxe" style={{ width: "100%" }} />
            </Card>
          </Space>
        </Row>
      </>
    );
  }
};

export default ViewFood;
