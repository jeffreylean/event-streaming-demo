import { Input, Space, Row, Card, Button, DatePicker } from "antd";
const Hotel = () => {
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vH" }}
    >
      <Card>
        <Row>
          <Input placeholder="Destination" />
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Space>
            <DatePicker
              placeholder="Check-in"
              onChange={onChange}
              onOk={onOk}
            />
            <DatePicker
              placeholder="Check-out"
              onChange={onChange}
              onOk={onOk}
            />
          </Space>
        </Row>
        <Row style={{ marginTop: "10px" }} justify="center">
          <Button type="primary">Search</Button>
        </Row>
      </Card>
    </Row>
  );
};

export default Hotel;
