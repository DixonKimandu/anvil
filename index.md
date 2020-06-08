<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Anvil</title>
    <link rel="stylesheet" href="css/master.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
  </head>
  <body onload="myFunction()">

    <!--Loader Start-->
    <div id="preloader">
      <div id="loader"></div>
    </div>
    <!--Loader Start-->

    <section style="display:none;" id="myDiv" class="animate-bottom">
    <!--Menu-->
    <div class="menuIcon">
      <div class="open">
        <span class="line1"></span>
        <span class="line2"></span>
        <span class="line5"></span>
      </div>
      <div class="close">
        <span class="line3"></span>
        <span class="line4"></span>
      </div>
    </div>
    <!--Menu-->

    <!--Header-->
    <section id="home">
    <header>
      <div  id="header">
        <h2 class="line-1 anim-typewriter">	&ltAnvil\&gt</h2>
        <a href="#back"><p class="scroll"><i class="arrow down"></i><br><br><br><br>Scroll Down</p></a>
      </div>
    </header>
    <div id="back" style="margin-bottom:15%;">
      <h1 id="about_h">Who we are</h1>
      <p id="about">Anvil is a technology company founded by young budding developers and designers who are
        enthusiastic about all things tech. We specialize in the making of websites and webapps
        with a mobile first approach and we aim to create visually stunning designs with high
        performance and accessibility.
      </p>
    </div>
    </section>
    <!--Header-->

    <!--Expertise Start-->
    <section id="expertise">
    <div class="expertise">
      <div style=" margin-top:50%;margin-bottom:5%;">
      <h1>Expertise</h1>
      <div class="animation-element bounce-up">
        <div class="subject">
          <div class="icon"><i class="fa fa-cogs"></i></div>
          <h3 class="title">Development</h3>
          <div class="content">
            We create innovative projects that change and greatly improve our clients organizations to help them
            achieve their goals.
          </div>
      </div>
      </div>
      <div class="animation-element bounce-up">
        <div class="subject">
          <div class="icon"><i class="fa fa-pencil"></i></div>
          <h3 class="title">Design </h3>
          <div class="content">
            Intuitive design is our top priority. We create products that utilize great design as performance
            feature.
          </div>
      </div>
      </div>
      <div class="animation-element bounce-up">
        <div class="subject">
          <div class="icon"><i class="fa fa-camera"></i></div>
          <h3 class="title">Marketing</h3>
          <div class="content">
            We aim to ensure our client's products are at the forefront and the top of the competition in their various
            industries.
          </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    <!--Expertise End-->

    <!--Portfolio-->
    <section id="portfolio">
      <div class="portfolio">
          <div style=" margin-top:5%;">
            <h1>Portfolio</h1>
           <div class="animation-p bounce-up2">
             <div id="p1" class="port">
               <div class="overlay">
                 <div class="content-o">
                   <h3 class="title">Landing Page</h3>
                   <p>Vanilla JS/HTML/CSS</p>
                 </div>
               </div>
             </div>
           </div>

           <div class="animation-p bounce-up2">
             <div id="p2" class="port">
               <div class="overlay">
                 <div class="content-o">
                   <h3 class="title">Photography Website</h3>
                   <p>Vanilla JS/HTML/CSS</p>
                 </div>
               </div>
             </div>
           </div>

           <div class="animation-p bounce-up2">
             <div id="p3" class="port">
               <div class="overlay">
                 <div class="content-o">
                   <h3 class="title">Flame Loading Icon</h3>
                   <p>Vanilla JS/HTML/CSS</p>
                 </div>
               </div>
             </div>
           </div>

          <div class="animation-p bounce-up2">
            <div id="p4"class="port">
              <div class="overlay">
                <div class="content-o">
                  <h3 class="title">Art Website</h3>
                  <p>Vanilla JS/HTML/CSS</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <!--Portfolio-->

    <!--Footer-->
    <section class="footer">
        <footer>
          <div class="footer-wrapper">
            <div class="single-footer">
              <h2>Address</h2>
              <p>Nairobi, Kenya<br><br>
                +254 700 000 000<br><br>
                PO Box 0100 0000<br><br>
              </p>
            </div>
            <div class="single-footer">
              <img src="img/logo.jpg" alt="" height="70px" width="80px">
            </div>
            <div class="single-footer">
              <h2>Social Media</h2>
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><img src="img/036-facebook.png" alt="" height="20px" width="20px"></a></li><br>
                <li><a href="https://www.twitter.com/" target="_blank"><img src="img/008-twitter.png" alt="" height="20px" width="20px"></a></li><br>
                <li><a href="https://www.instagram.com/" target="_blank"><img src="img/029-instagram.png" alt="" height="20px" width="20px"></a></li><br>
                <li><a href="https://www.youtube.com/" target="_blank"><img src="img/001-youtube.png" alt="" height="20px" width="20px"></a></li>
              </ul>
            </div>
          </div>
        </footer>
    </section>
    <!--Footer-->

    <!--Menu Items-->
    <div class="main">
      <div class="menu">
        <span class="menuItem" data="HOME"><a href="#home">HOME</a></span>
        <span class="menuItem" data="ABOUT"><a href="#about">ABOUT</a></span>
        <span class="menuItem" data="PORTFOLIO"><a href="#portfolio">PORTFOLIO</a></span>
        <span class="menuItem" data="PROJECTS"><a href="#projects">PROJECTS</a></span>
      </div>
      <!--Menu Items-->


    </section>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
  </body>
</html>