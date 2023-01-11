import { useEffect, useState } from "react";
import { Input, Space, Row, Card, Button, DatePicker } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import {
  newTracker,
  trackPageView,
  enableActivityTracking,
  trackSelfDescribingEvent,
} from "@snowplow/browser-tracker";

//newTracker("sp", "http://127.0.0.1:8080", {
//  appId: "flight",
//  discoverRootDomain: true,
//  cookieName: "airasia.com", // Recommended
//  contexts: {
//    webPage: true, // default, can be omitted
//    performanceTiming: true,
//    gaCookies: true,
//    geolocation: true,
//  },
//});

const Flight = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [promo, setPromo] = useState("");

  function onChangeStart(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setStartDate(dateString);
  }

  function onChangeEnd(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setEndDate(dateString);
  }

  function submit() {
    trackSelfDescribingEvent({
      event: {
        // schema:
        //   "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0",
        data: {
          formId: "flight_form",
          elementId: "search_button",
          nodeName: "INPUT",
          elementType: "button",
          action: "CLICK",
          env: "local",
          tracked_by: "jeffrey",
        },
      },
    });
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
          <Space>
            <Input
              placeholder="From"
              style={{ width: "201px" }}
              onChange={(e) => {
                setFrom(e);
              }}
            />
            <SwapOutlined />
            <Input
              placeholder="To"
              style={{ width: "201px" }}
              onChange={(e) => {
                setTo(e);
              }}
            />
          </Space>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Space>
            <DatePicker
              placeholder="Depart date"
              showTime={{ format: "HH:mm" }}
              onChange={onChangeStart}
            />
            <SwapOutlined />
            <DatePicker
              placeholder="Return date"
              showTime={{ format: "HH:mm" }}
              onChange={onChangeEnd}
            />
          </Space>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Input
            placeholder="Promo code"
            onChange={(e) => {
              setPromo(e);
            }}
          />
        </Row>
        <Row style={{ marginTop: "10px" }} justify="center">
          <Button type="primary" onClick={submit}>
            Search
          </Button>
        </Row>
      </Card>
    </Row>
  );
};

export default Flight;
