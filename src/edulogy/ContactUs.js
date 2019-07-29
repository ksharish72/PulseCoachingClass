import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./ContactUs.css";
import { Row, Col } from "react-bootstrap";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }
  /* <div>
        <h3 id="CONTACTH3_1">Contact Form</h3>
        <Row>
          <Col md={4}>
            <h6 style={{ margin: "30px" }}>Name</h6>
          </Col>
          <Col md={8}>
            <TextField
              required
              style={{ width: "500px" }}
              id="CONTACToutlined-required"
              label="Required"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h6 style={{ margin: "30px" }}>Email</h6>
          </Col>
          <Col md={8}>
            <TextField
              required
              style={{ width: "500px" }}
              id="CONTACToutlined-required"
              label="Required"
              margin="normal"
              variant="outlined"
            />
          </Col>
        </Row>
      </div>*/
  render() {
    return (
      <section id="CONTACTSECTION_1">
        <div id="CONTACTDIV_2">
          <div id="CONTACTDIV_3">
            <h2 id="CONTACTH2_4">Our Location</h2>

            <div id="CONTACTDIV_5" />
            <hr id="CONTACTHR_7" />
            <h3 id="CONTACTH3_8">Contact Form</h3>

            <form action="contact.php" method="post" id="CONTACTFORM_9">
              <div id="CONTACTDIV_10">
                <label for="inputPassword3" id="CONTACTLABEL_11">
                  <strong id="CONTACTSTRONG_12">Name</strong>
                </label>
                <div id="CONTACTDIV_13">
                  <input
                    type="text"
                    name="conname"
                    id="CONTACTINPUT_14"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div id="CONTACTDIV_15">
                <label for="inputEmail3" id="CONTACTLABEL_16">
                  <strong id="CONTACTSTRONG_17">Email</strong>
                </label>
                <div id="CONTACTDIV_18">
                  <input
                    type="email"
                    name="conemail"
                    id="CONTACTINPUT_19"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div id="CONTACTDIV_20">
                <label for="inputEmail3" id="CONTACTLABEL_21">
                  <strong id="CONTACTSTRONG_22">Contact No</strong>
                </label>
                <div id="CONTACTDIV_23">
                  <input
                    type="text"
                    name="concontact"
                    id="CONTACTINPUT_24"
                    placeholder="contact Number"
                  />
                </div>
              </div>
              <div id="CONTACTDIV_25">
                <label for="inputEmail3" id="CONTACTLABEL_26">
                  <strong id="CONTACTSTRONG_27">Subject</strong>
                </label>
                <div id="CONTACTDIV_28">
                  <input
                    type="text"
                    name="consubject"
                    id="CONTACTINPUT_29"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div id="CONTACTDIV_30">
                <label for="inputEmail3" id="CONTACTLABEL_31">
                  <strong id="CONTACTSTRONG_32">Message</strong>
                </label>
                <div id="CONTACTDIV_33">
                  <textarea
                    name="conmessage"
                    rows="3"
                    placeholder="Message"
                    id="CONTACTTEXTAREA_34"
                  />
                </div>
              </div>
              <div id="CONTACTDIV_35">
                <div id="CONTACTDIV_36">
                  <button
                    type="submit"
                    name="contactform"
                    id="CONTACTBUTTON_37"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div id="CONTACTDIV_38">
            <h3 id="CONTACTH3_39">PULSE COACHING CLASS</h3>
            <ul id="CONTACTUL_40">
              <li id="CONTACTLI_41">
                <strong id="CONTACTSTRONG_42">Address:</strong>
                <br id="CONTACTBR_43" />
                #5, 27th Main Road, 2nd Cross, VGS Layout, 
                <br id="CONTACTBR_44" /> Ejipura,
                Bangalore 560047, Karnataka
                <br id="CONTACTBR_45" />
              </li>
              <li id="CONTACTLI_50">
                <strong id="CONTACTSTRONG_51">Mobile:</strong> +919353680989 <br/> +919060923518 <br/> +919353678821
              </li>
              <br/>
              <li id="CONTACTLI_52">
                <strong id="CONTACTSTRONG_53">Email:</strong>{" "}
              </li>
            </ul>
            <hr id="CONTACTHR_54" />
            <h3 id="CONTACTH3_55">Center Opening Hours</h3>
            <h3 id="CONTACTH3_56">24 / 7</h3>
            <hr id="CONTACTHR_57" />
            <h3 id="CONTACTH3_58">Services:</h3>
            <ul id="CONTACTUL_59">
              <li id="CONTACTLI_60"></li>
              <li id="CONTACTLI_61"></li>
              <li id="CONTACTLI_62"></li>
              <li id="CONTACTLI_63">
              </li>
            </ul>
            <hr id="CONTACTHR_64" />
            <h3 id="CONTACTH3_65">Amenities:</h3>
            <ul id="CONTACTUL_66">
              <li id="CONTACTLI_67"></li>
              <li id="CONTACTLI_68"></li>
              <li id="CONTACTLI_69"></li>
              <li id="CONTACTLI_70"></li>
              <li id="CONTACTLI_71"></li>
            </ul>{" "}
            <strong id="CONTACTSTRONG_72">
            </strong>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;
