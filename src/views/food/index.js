import { Card, Input, Row, Space } from "antd";
import {
  EnhancedEcommercePlugin,
  trackEnhancedEcommerceAction,
  addEnhancedEcommerceProductContext,
  addEnhancedEcommerceActionContext
} from "@snowplow/browser-plugin-enhanced-ecommerce";
import { newTracker, trackPageView } from "@snowplow/browser-tracker";
import { useNavigate } from "react-router-dom";
import {
  GeolocationPlugin,
  enableGeolocationContext
} from "@snowplow/browser-plugin-geolocation";

newTracker("ap1", "http://127.0.0.1:8080", {
  appId: "food",
  connectionTimeout: 100000,
  stateStorageStrategy: "none",
  plugins: [EnhancedEcommercePlugin(), GeolocationPlugin()]
});
enableGeolocationContext();

trackPageView({
  title: "Food Page"
});

const Food = () => {
  const { Meta } = Card;
  const nav = useNavigate();

  return (
    <>
      <Row style={{ marginBottom: "20px", marginTop: "20px" }} justify="center">
        <Input
          style={{ width: "50%" }}
          placeholder="Search by restaurant or food"
        />
      </Row>
      <Row justify="center">
        <Space style={{ marginTop: 20 }}>
          <Card
            hoverable
            cover={
              <img
                src="https://www.mcdonalds.com.my/storage/foods/September2019/92hbWZG6qt0k4Eu123bt.png"
                alt="food"
              />
            }
            style={{ width: 240, height: 300 }}
            onClick={() => {
              trackEnhancedEcommerceAction({
                action: "click"
              });
              nav(`view/mcd`);
            }}
          >
            <Meta title="Mc Donald" description="I'm lovin it!" />
          </Card>
          <Card
            hoverable
            cover={
              <img src={require("../../assets/image/kfc/kfc.png")} alt="food" />
            }
            style={{ width: 240, height: 300 }}
            onClick={() => {
              trackEnhancedEcommerceAction({
                action: "click"
              });
              nav(`view/kfc`);
            }}
          >
            <Meta title="KFC" description="Finger lickin good" />
          </Card>
        </Space>
      </Row>
    </>
  );
};

export default Food;
