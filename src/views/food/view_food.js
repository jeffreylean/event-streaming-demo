import { Header } from "antd/lib/layout/layout";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Space, Alert, notification } from "antd";
import Meta from "antd/lib/card/Meta";

import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  addEnhancedEcommerceActionContext,
  addEnhancedEcommerceProductContext,
  trackEnhancedEcommerceAction,
} from "@snowplow/browser-plugin-enhanced-ecommerce";
import { trackSelfDescribingEvent } from "@snowplow/browser-tracker";
import {
  addItem,
  addTrans,
  trackTrans,
} from "@snowplow/browser-plugin-ecommerce";

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
              objectFit: "cover",
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
                    addEnhancedEcommerceActionContext({
                      id: "action_click",
                      currency: "MYR",
                    });

                    trackEnhancedEcommerceAction({
                      action: "click",
                      context: [
                        {
                          schema:
                            "aliran:com.airasia/enhanced-ecommerce-productFieldObject/jsonschema/1-0-0",
                          data: {
                            id: "zinger_box",
                            name: "Zinger Box",
                            category: "Set",
                            quantity: 1,
                            dimension8: "test",
                          },
                        },
                        {
                          schema:
                            "aliran:com.airasia/data_governance_metadata/jsonschema/1-0-0",
                          data: {
                            dataClassification: "C2",
                            dataOwner: "jeffreylean@airasia.com",
                            hasPII: false,
                            dataCustodian: "data-coe",
                          },
                        },
                      ],
                    });
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />,
                    });
                  }}
                />,
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
                      quantity: 1,
                    });

                    addEnhancedEcommerceActionContext({
                      id: "action_click",
                      currency: "MYR",
                    });

                    trackEnhancedEcommerceAction({
                      action: "click",
                    });
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />,
                    });
                  }}
                />,
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
              objectFit: "cover",
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
                          quantity: 1,
                        });

                        addEnhancedEcommerceActionContext({
                          id: "action_click",
                          currency: "MYR",
                        });

                        trackEnhancedEcommerceAction({
                          action: "click",
                        });
                      });
                    }
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />,
                    });
                  }}
                />,
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
                    addTrans({
                      orderId: "1234", // required
                      total: 11.99, // required
                      affiliation: "Acme Clothing",
                      tax: 1.29,
                      shipping: 5,
                      city: "San Jose",
                      state: "California",
                      country: "USA",
                      currency: "USD",
                    });

                    addItem({
                      orderId: "1234", // required
                      sku: "DD44", // required
                      name: "spicy_chicken_mcdeluxe",
                      category: "Set",
                      price: 11.99,
                      quantity: 1,
                      currency: "MYR",
                    });

                    trackEnhancedEcommerceAction({
                      action: "click",
                    });
                    trackTrans();
                    notification.open({
                      message: "Successfully added to cart",
                      icon: <ShoppingCartOutlined style={{ color: "red" }} />,
                    });
                  }}
                />,
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
