'use client'
// import node module libraries
import { Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';
// import sub components
import { Notifications, DeleteAccount, GeneralSetting, EmailSetting, Preferences } from 'sub-components'
import { FormSelect, DropFiles } from 'widgets';

const Test = () => {
  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'US', label: 'US' },
    { value: 'UK', label: 'UK' },
    { value: 'UAE', label: 'UAE' }
  ];
  
  return (
    <Container fluid className="p-6">

      {/* Page Heading */}
      <PageHeading heading="Create New Test" />

      <Card>
          {/* card body */}
          <Card.Body>
            <div className=" mb-6">
              <h4 className="mb-1">General Settings</h4>
            </div>
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Avatar</h5>
              </Col>
              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image src="/images/avatar/avatar-5.jpg" className="rounded-circle avatar avatar-lg" alt="" />
                  </div>
                  <div>
                    <Button variant="outline-white" className="me-2" type="submit">Change </Button>
                    <Button variant="outline-white" type="submit">Remove </Button>
                  </div>
                </div>
              </Col>
            </Row>
            
            <div>
              <div className="mb-6">
                <h4 className="mb-1">Basic information</h4>
              </div>
              
              <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="fullName">Full name</Form.Label>
                  <Col sm={4} className="mb-3 mb-lg-0">
                    <Form.Control type="text" placeholder="First name" id="fullName" required />
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="text" placeholder="Last name" id="lastName" required />
                  </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">Email</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="email" placeholder="Email" id="email" required />
                  </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">Phone <span className="text-muted">(Optional)</span></Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Phone" id="phone" />
                  </Col>
                </Row>

                {/* Location */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="country">Location</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect} placeholder="Select Country" id="country" options={countryOptions} />
                  </Col>
                </Row>

                {/* Address Line One */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">Address line 1</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Address line 1" id="addressLine" required />
                  </Col>
                </Row>

                {/* Address Line Two */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLineTwo">Address line 2</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Address line 2" id="addressLineTwo" required />
                  </Col>
                </Row>


                {/* Zip code */}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="zipcode">Zip code</Form.Label>

                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Zip code" id="zipcode" required />
                  </Col>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>

                </Row>
              </Form>
              
            </div>
          </Card.Body>
        </Card>

    </Container>
  )
}

export default Test