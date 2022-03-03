import logo from "./logo.svg";
import { Row, Typography } from "antd";
import "./App.less";

function App() {
  return (
    <div className="App">
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Typography.Text type="danger" strong style={{ fontSize: "50px" }}>
          Event tracking test platform
        </Typography.Text>
      </Row>
    </div>
  );
}

export default App;
