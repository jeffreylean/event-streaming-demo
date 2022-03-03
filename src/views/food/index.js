import { Card, Input, Row, Space } from "antd";

const Food = () => {
  const { Meta } = Card;

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
          >
            <Meta title="Mc Donald" description="I'm lovin it!" />
          </Card>
          <Card
            hoverable
            cover={
              <img src={require("../../assets/image/kfc.png")} alt="food" />
            }
            style={{ width: 240, height: 300 }}
          >
            <Meta title="KFC" description="Finger lickin good" />
          </Card>
        </Space>
      </Row>
    </>
  );
};

export default Food;
