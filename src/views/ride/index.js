import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Card, Input, Row } from "antd";

const mapStyles = {
  height: "50vh",
  width: "50%",
};

const Ride = () => {
  const [marker, setMarker] = useState({});
  const addMarker = (e) => {
    setMarker({ location: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
  };
  return (
    <Row justify="center" style={{ marginTop: "20px" }}>
      <Card style={{ width: "75%" }}>
        <Row justify="center" style={{ marginTop: "20px" }}>
          <LoadScript googleMapsApiKey="AIzaSyAZpt6Kmb3FdVnjYrkfQKYIJOq_2fOrXhE">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={{ lng: 101.693207, lat: 3.140853 }}
              onClick={addMarker}
            >
              {<Marker position={marker.location} />}
            </GoogleMap>
          </LoadScript>
        </Row>
        <Row style={{ marginTop: "20px" }} justify="center">
          <Input style={{ width: "25%" }} placeholder="Pickup" />
        </Row>
        <Row justify="center">
          <Input style={{ width: "25%" }} placeholder="Destination" />
        </Row>
      </Card>
    </Row>
  );
};

export default Ride;
