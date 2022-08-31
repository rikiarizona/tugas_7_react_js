import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Badge,
  Breadcrumb,
  Card,
  CardGroup,
  Media,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col md={4}>
            <Alert variant="primary">Website React Bootstrap</Alert>
          </Col>
          <Col md={{ span: 5, offset: 3 }}>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup aria-label="First group">
                <Button variant="primary" size="sm">
                  Notifications <Badge variant="light">9</Badge>
                </Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Second group">
                <Button variant="primary" size="sm">
                  Message <Badge variant="light">19</Badge>
                </Button>
              </ButtonGroup>
              <Media className="ml-5">
                <img
                  width={20}
                  height={20}
                  className="mr-3"
                  src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                  alt="Icon Account"
                />
                <Media.Body>Andreas</Media.Body>
              </Media>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 3 }}></Col>
          <Col md={{ span: 6, offset: 8 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active href="/">
                Bola
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 15 }}>
            <CardGroup>
              <Card style={{ width: "300px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
                  alt="Diego image"
                />
                <Card.Body>
                  <Card.Title>
                    <b>Diego Godin Ukir Rekor Spesial Lawan Thailand</b>
                  </Card.Title>
                  <Card.Text>
                    Godin sekarang menjadi pemain Uruguay dengan caps terbanyak
                    setelah membantu negaranya melibas Thailand di final Piala
                    Tiongkok. Diego Godin boleh berbangga setelah sermi menjadi.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "300px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="Neymar image"
                />
                <Card.Body>
                  <Card.Title>
                    <b>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</b>
                  </Card.Title>
                  <Card.Text>
                    Ayah sang pemain bintang Brasil berusaha meredam rumor
                    ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris
                    Saint-Germain soal perpanjangan kontrak bersama Champion
                    Ligue 1 Prancis, demikian kata ayahnya.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ widht: "300px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="Inggris Image"
                />
                <Card.Body>
                  <Card.Title>
                    <b>Inggris Mau Jadi Tim Terbaik Di Dunia</b>
                  </Card.Title>
                  <Card.Text>
                    Kumpulan talenta terbaik yang dimiliki Inggris saat ini
                    membuat Barkley sangat optimistis. Ross Barkley merasa
                    Inggris sudah berada di jalur yang benar untuk bisa menjadi
                    tim terbaik di dunia dengan banyaknya talenta yang muncul
                    sekarang ini.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "300px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Sani Rizki Fauzi"
                />
                <Card.Body>
                  <Card.Title>
                    <b>
                      Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia
                      U-23 Tetap Bagus
                    </b>
                  </Card.Title>
                  <Card.Text>
                    Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki
                    Fauzi, menegaskan kesiapannya untuk bermain pada laga
                    melawan Brunei Darussalam U23, Kedua tim akan bentrik pada
                    laga pemungkas grup K.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
