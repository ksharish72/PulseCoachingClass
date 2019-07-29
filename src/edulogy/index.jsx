import React, { Component } from "react";
import Modal from 'react-modal';
import LoginApp from "./LoginApp";
import Contact from "./Contact";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRegisterUserWindow: false,
            showContactSection: false
        }
    }
    openRegisterWindow = () => {
        this.setState({
            showRegisterUserWindow: true
        })
    }
    showContactSection = () => {
        this.setState({
            showContactSection: true
        })
    }
    closeRegisterWindow = () => {
        this.setState({
            showRegisterUserWindow: false
        })
    }
    render() {
        const customStyles = {
            overlay: { zIndex: 1000 },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        };
        const { showRegisterUserWindow, showContactSection } = this.state
        return (
            <div>

                <Modal
                    isOpen={showRegisterUserWindow}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeRegisterWindow}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button onClick={this.closeRegisterWindow}>close</button>
                    <LoginApp />
                </Modal>
                <div id="preloader">
                    <img class="preloader" src="images/loader.gif" alt="" />
                </div>


                <div id="wrapper">

                    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-hidden="true" style={{ display: 'none' }}>
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div id="div-forms">
                                    <form id="login-form">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span class="flaticon-add" aria-hidden="true"></span>
                                        </button>
                                        <div class="modal-body">
                                            <input class="form-control" type="text" placeholder="What you are looking for?" required />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <header class="header">
                        <div class="topbar clearfix">
                            <div class="container">
                                <div class="row-fluid">
                                    <div class="col-md-6 col-sm-6 text-left">
                                        <p>
                                            <strong><i class="fa fa-phone"></i></strong> +91 9353680989 &nbsp;&nbsp;
                                <strong><i class="fa fa-envelope"></i></strong> <a href="mailto:#">info@yoursite.com</a>
                                        </p>
                                    </div>
                                    <div class="col-md-6 col-sm-6 hidden-xs text-right">
                                        <div class="social">
                                            <a class="facebook" href="#" data-tooltip="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                            <a class="twitter" href="#" data-tooltip="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                            <a class="google" href="#" data-tooltip="tooltip" data-placement="bottom" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                                            <a class="linkedin" href="#" data-tooltip="tooltip" data-placement="bottom" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                                            <a class="pinterest" href="#" data-tooltip="tooltip" data-placement="bottom" title="Pinterest"><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <nav class="navbar navbar-default yamm">
                                <div class="navbar-header" style={{ margin: "20px 0px 0px -120px" }}>
                                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <div class="logo-normal">
                                        <a class="navbar-brand" href="index.html"><img src="images/logo.png" style={{ width: "200px" }} alt="" /></a>
                                    </div>
                                </div>

                                <div id="navbar" class="navbar-collapse collapse">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li><a href="index.html">Home</a></li>
                                        <li class="dropdown yamm-fw yamm-half"><a href="#" data-toggle="dropdown" class="dropdown-toggle active">Courses <b class="fa fa-angle-down"></b></a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <div class="yamm-content clearfix">
                                                        <div class="row-fluid">
                                                            <div class="col-md-12 col-sm-12">
                                                                <h4>Course Pages</h4>
                                                                <ul>
                                                                    <li><a href="#">MATHS</a></li>
                                                                    <li><a href="#">PHYSICS</a></li>
                                                                    <li><a href="#">CHEMISTRY</a></li>
                                                                    <li><a href="#">BIOLOGY</a></li>
                                                                    <li><a href="#">B.E (All Branches, All Semester)</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a onClick={this.openRegisterWindow}>Login</a></li>
                                        <li><a onClick={this.showContactSection}>Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <section id="home" class="video-section js-height-full">
                        <div class="overlay"></div>
                        <div class="home-text-wrapper relative container">
                            <div class="home-message">
                                <p>Expert Coaching. Guaranteed success</p>
                                <small>Offers professional quality education to all students pursuing the courses</small>
                            </div>
                        </div>
                    </section>

                    {showContactSection ? <Contact /> :
                        <div>

                            <section class="section">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4 hidden-sm hidden-xs">
                                            <div class="custom-module">
                                                <img src="images/coaching.jpg" alt="" class="img-responsive wow slideInLeft" />
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="custom-module p40l">
                                                <h2>Exceeding your expectations</h2>

                                                <p style={{ fontSize: "large" }}>Pulse Classes has earned its positive reputation because we go out of our way to provide truly exceptional
                                                 service to each of our customers. We understand that your needs can change last minute, and we're ready to adapt our services quickly to ensure your success.
                                        </p><br />

                                                <p style={{ fontSize: "large" }}>Since being established in 2018, Pulse Classes has been known for an unparalleled commitment to customer satisfaction. It's this standard of excellence that has provided the impetus for us to grow into the business we are today</p>

                                                <hr class="invis" />

                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 first">
                                                        <ul class="check">
                                                            <li>Custom Shortcodes</li>
                                                            <li>Visual Page Builder</li>
                                                            <li>Unlimited Shortcodes</li>
                                                            <li>Responsive Theme</li>
                                                            <li>Tons of Layouts</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <ul class="check">
                                                            <li>Font Awesome Icons</li>
                                                            <li>Pre-Defined Colors</li>
                                                            <li>AJAX Transitions</li>
                                                            <li>High Quality Support</li>
                                                            <li>Unlimited Options</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 last">
                                                        <ul class="check">
                                                            <li>Shopping Layouts</li>
                                                            <li>Pre-Defined Fonts</li>
                                                            <li>Style Changers</li>
                                                            <li>Footer Styles</li>
                                                            <li>Header Styles</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <hr class="invis" />

                                                <div class="btn-wrapper">
                                                    <a href="#" class="btn btn-primary">Learn More About us</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="section gb">
                                <div class="container">
                                    <div class="section-title text-center">
                                        <h3>Courses</h3>
                                        <p style={{ fontSize: "large" }}>We want all our customers to experience the impressive level of professionalism when working with Pulse Classes. All of our services, especially this one, exist to make your life easier and stress free. You can trust us to provide you with the best and top quality coaching.</p>
                                    </div>

                                    <div id="owl-01" class="owl-carousel owl-theme owl-theme-01">
                                        <div class="caro-item">
                                            <div class="course-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/course_01.jpg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="#" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>
                                                <div class="course-details">
                                                    <h4>
                                                        <small>Javascript</small>
                                                        <a href="#" title="">Modern JavaScript Linting With ESLint</a>
                                                    </h4>
                                                    <p>Fusce interdum, elit sit amet vehicula malesuada, eros libero elementum orci.</p>
                                                </div>
                                                <div class="course-footer clearfix">
                                                    <div class="pull-left">
                                                        <ul class="list-inline">
                                                            <li><a href="#"><i class="fa fa-user"></i> 21</a></li>
                                                            <li><a href="#"><i class="fa fa-clock-o"></i> 15 Min.</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="pull-right">
                                                        <ul class="list-inline">
                                                            <li><a href="#">$22.00</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="caro-item">
                                            <div class="course-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/course_02.jpg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="#" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>
                                                <div class="course-details">
                                                    <h4>
                                                        <small>Design</small>
                                                        <a href="#" title="">Designing Game UI Assets in Adobe Illustrator</a>
                                                    </h4>
                                                    <p>Curabitur condimentum velit non odio mattis tristique. Nam vitae orci aliquam. </p>
                                                </div>
                                                <div class="course-footer clearfix">
                                                    <div class="pull-left">
                                                        <ul class="list-inline">
                                                            <li><a href="#"><i class="fa fa-user"></i> 41</a></li>
                                                            <li><a href="#"><i class="fa fa-clock-o"></i> 33 Min.</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="pull-right">
                                                        <ul class="list-inline">
                                                            <li><a href="#">$55.00</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="caro-item">
                                            <div class="course-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/course_03.jpg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="#" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>
                                                <div class="course-details">
                                                    <h4>
                                                        <small>PHP Coding</small>
                                                        <a href="#" title="">How to Become a Web Developer: Learn PHP</a>
                                                    </h4>
                                                    <p>Donec auctor nec nibh sit amet pulvinar. Mauris nulla elit, lacinia ac facilisis mattis.</p>
                                                </div>
                                                <div class="course-footer clearfix">
                                                    <div class="pull-left">
                                                        <ul class="list-inline">
                                                            <li><a href="#"><i class="fa fa-user"></i> 35</a></li>
                                                            <li><a href="#"><i class="fa fa-clock-o"></i> 1 Hrs.</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="pull-right">
                                                        <ul class="list-inline">
                                                            <li><a href="#">$51.00</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="caro-item">
                                            <div class="course-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/course_04.jpg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="#" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>
                                                <div class="course-details">
                                                    <h4>
                                                        <small>PHP Coding</small>
                                                        <a href="#" title="">How to Build a Custom Theme for Drupal 8</a>
                                                    </h4>
                                                    <p>Pellentesque ut enim dictum, interdum lorem eget, vulputate eros sed felis euismod.</p>
                                                </div>
                                                <div class="course-footer clearfix">
                                                    <div class="pull-left">
                                                        <ul class="list-inline">
                                                            <li><a href="#"><i class="fa fa-user"></i> 35</a></li>
                                                            <li><a href="#"><i class="fa fa-clock-o"></i> 45 Min.</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="pull-right">
                                                        <ul class="list-inline">
                                                            <li><a href="#">$51.00</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="caro-item">
                                            <div class="course-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/course_01.jpg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="#" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>
                                                <div class="course-details">
                                                    <h4>
                                                        <small>Javascript</small>
                                                        <a href="#" title="">Modern JavaScript Linting With ESLint</a>
                                                    </h4>
                                                    <p>Fusce interdum, elit sit amet vehicula malesuada, eros libero elementum orci.</p>
                                                </div>
                                                <div class="course-footer clearfix">
                                                    <div class="pull-left">
                                                        <ul class="list-inline">
                                                            <li><a href="#"><i class="fa fa-user"></i> 21</a></li>
                                                            <li><a href="#"><i class="fa fa-clock-o"></i> 15 Min.</a></li>
                                                        </ul>
                                                    </div>

                                                    <div class="pull-right">
                                                        <ul class="list-inline">
                                                            <li><a href="#">$22.00</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="invis" />

                                    <div class="section-button text-center">
                                        <a href="#" class="btn btn-primary">View All Courses</a>
                                    </div>
                                </div>
                            </section>

                            <section class="section db">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4">
                                            <div class="stat-count">
                                                <h4 class="stat-timer">1230</h4>
                                                <h3><i class="flaticon-black-graduation-cap-tool-of-university-student-for-head"></i> Happy Students</h3>
                                                <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. </p>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-4">
                                            <div class="stat-count">
                                                <h4 class="stat-timer">331</h4>
                                                <h3><i class="flaticon-online-course"></i> Course Done</h3>
                                                <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. </p>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-4">
                                            <div class="stat-count">
                                                <h4 class="stat-timer">8901</h4>
                                                <h3><i class="flaticon-coffee-cup"></i> Ordered Coffe's</h3>
                                                <p>Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <section class="section gb">
                                <div class="container">
                                    <div class="section-title text-center">
                                        <h3>Recent News</h3>
                                        <p>Maecenas sit amet tristique turpis. Quisque porttitor eros quis leo pulvinar, at hendrerit sapien iaculis. Donec consectetur accumsan arcu, sit amet fringilla ex ultricies.</p>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-4 col-md-12">
                                            <div class="blog-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/blog_01.jpeg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="blog-single.html" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>

                                                <div class="blog-desc">
                                                    <h4><a href="blog-single.html">How to learn perfect code with Javascript</a></h4>
                                                    <p>Praesent at suscipit ligula. Suspendisse pre neque, quis suscipit enim. sed maximus, mia auctor.</p>
                                                </div>

                                                <div class="post-meta">
                                                    <ul class="list-inline">
                                                        <li><a href="#">21 March 2017</a></li>
                                                        <li><a href="#">by WP Destek</a></li>
                                                        <li><a href="#">14 Share</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-12">
                                            <div class="blog-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/blog_02.jpeg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="blog-single.html" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>

                                                <div class="blog-desc">
                                                    <h4><a href="blog-single.html">The most suitable web design & development tutorials</a></h4>
                                                    <p>Sed suscipit neque in erat posuere tristique aliquam porta vestibulum. Cras placerat tincidunt. </p>
                                                </div>

                                                <div class="post-meta">
                                                    <ul class="list-inline">
                                                        <li><a href="#">20 March 2017</a></li>
                                                        <li><a href="#">by WP Destek</a></li>
                                                        <li><a href="#">11 Share</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-12">
                                            <div class="blog-box">
                                                <div class="image-wrap entry">
                                                    <img src="upload/blog_03.jpeg" alt="" class="img-responsive" />
                                                    <div class="magnifier">
                                                        <a href="blog-single.html" title=""><i class="flaticon-add"></i></a>
                                                    </div>
                                                </div>

                                                <div class="blog-desc">
                                                    <h4><a href="blog-single.html">Design for all mobile devices! This is name "responsive"</a></h4>
                                                    <p>Suspendisse scelerisque ex ac mattis molestie vel enim ut massa placerat faucibus sed ut dui vivamus. </p>
                                                </div>

                                                <div class="post-meta">
                                                    <ul class="list-inline">
                                                        <li><a href="#">19 March 2017</a></li>
                                                        <li><a href="#">by WP Destek</a></li>
                                                        <li><a href="#">44 Share</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                    <footer class="section footer noover">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-md-4">
                                    <div class="widget clearfix">
                                        <h3 class="widget-title">Subscribe Our Newsletter</h3>
                                        <div class="newsletter-widget">
                                            <p>You can opt out of our newsletters at any time.<br /> See our <a href="#">privacy policy</a>.</p>
                                            <form class="form-inline" role="search">
                                                <div class="form-1">
                                                    <input type="text" class="form-control" placeholder="Enter email here.." />
                                                    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane-o"></i></button>
                                                </div>
                                            </form>
                                            <img src="images/payments.png" alt="" class="img-responsive" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-3">
                                    <div class="widget clearfix">
                                        <h3 class="widget-title">Join us today</h3>
                                        <p>Would you like to earn your profits by joining our team? Join us without losing time.</p>
                                        <a href="#" class="readmore">Became a Teacher</a>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-3">
                                    <div class="widget clearfix">
                                        <h3 class="widget-title">Popular Tags</h3>
                                        <div class="tags-widget">
                                            <ul class="list-inline">
                                                <li><a href="#">course</a></li>
                                                <li><a href="#">web design</a></li>
                                                <li><a href="#">development</a></li>
                                                <li><a href="#">language</a></li>
                                                <li><a href="#">teacher</a></li>
                                                <li><a href="#">speaking</a></li>
                                                <li><a href="#">material</a></li>
                                                <li><a href="#">css3</a></li>
                                                <li><a href="#">html</a></li>
                                                <li><a href="#">learning</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-md-2">
                                    <div class="widget clearfix">
                                        <h3 class="widget-title">Support</h3>
                                        <div class="list-widget">
                                            <ul>
                                                <li><a href="#">Terms of Use</a></li>
                                                <li><a href="#">Copyrights</a></li>
                                                <li><a href="#">Create a Ticket</a></li>
                                                <li><a href="#">Pricing & Plans</a></li>
                                                <li><a href="#">Carrier</a></li>
                                                <li><a href="#">Trademark</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <div class="copyrights">
                        <div class="container">
                            <div class="clearfix">
                                <div class="pull-right">
                                    <div class="footer-links">
                                        <ul class="list-inline">
                                            <li>Design : <a href="https://html.design">HTML.Design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;


