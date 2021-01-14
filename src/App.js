
import React from 'react'
import './App.css';
import Grid from "@material-ui/core/Grid";

const Header = (
  <img className="logo" src="logo.png" />
);


function App() {
  const locations = ["at home", "in a classroom", "in a garage", "at your lab", "in outer space", "in your luggage", "at your desk", "with your friends", "at your friends"]
  const [ID, setID] = React.useState(0)

  return (
    <Grid container spacing={2}>
      <Grid item xs={false} md={2}/>
      <Grid item xs={12} md={8}>
        {Header}
      </Grid>
      <Grid item xs={false} md={2}/>

      <Grid item xs={false} md={2}/>
      <Grid item xs={12} md={4}>
        <div id="content" style={{marginTop: "100px"}}>
          <h1 className="title"> Build biology, without the price tag.</h1>
          <p className="desc"> The Pioreactor is a bioreactor, reimagined for today's curious hacker. </p>

          <p className="desc">Built to be low-cost, extensible, and
          using modern hardware and software technologies.</p>

          <p className="desc"> Scale from one to dozens, in your garage or in your lab,
          teaching biology to children up to graduate students.</p>
          <div id="mc_embed_signup">
          <form style={{padding: "15px", marginTop: "20px", width: "400px"}} action="https://github.us18.list-manage.com/subscribe/post?u=2314215b756d01a83ce867c28&amp;id=f126210965" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">

              <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
              <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_2314215b756d01a83ce867c28_f126210965" tabIndex="-1"/></div>
              <div className="clear"><input style={{backgroundColor: "#ff6684"}} type="submit" value="Get notified" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
              </div>
          </form>
          </div>
        </div>

      </Grid>

      <Grid item xs={12} md={4}>
        <img src="hero.png" width="500px"/>
      </Grid>
      <Grid item xs={false} md={2}/>

    </Grid>
  );
}

export default App;
