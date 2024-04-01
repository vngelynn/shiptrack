import { Typography } from "../components/Typography"
import "./LandingPage.css"

export const LandingPage = () => {
  return (
    <div>
      <div id="landing-welcome-container">
        <p style={{marginBottom:'0px'}}>
          <Typography type="h1">
            Welcome to<span className="logo-text"> Ordernize</span>
          </Typography>
        </p>
        <p style={{marginTop:'0px'}}>
          <Typography type="h3">
            – your hassle-free solution for seamlessly managing incoming mail!
          </Typography>
        </p>
        <button className="landing-page-button">Demo User</button>
      </div>
      <div id="landing-header-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography type="page-header">Personal Order Organizer</Typography>
          <br></br>
          <Typography type="page-description">
            Are you tired of losing track of incoming orders or juggling
            multiple platforms to keep tabs on your purchases? Say goodbye to
            the stress of wondering what&apos;s coming your way.
          </Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography type="page-header">
            Never Miss an Incoming Order Again
          </Typography>
          <br></br>
          <Typography type="page-description">
            Ordernize is your ultimate solution for keeping tabs on all your
            pending orders and incoming items, without the hassle of tracking
            their shipping status. Whether it's a pre-order for the latest
            gadget, a surprise package from a loved one, or that unique find
            from social media, Ordernize ensures you're always in the know.
          </Typography>
        </div>
        <div>
          <Typography type="page-header">Stay Organized, Stay Ahead</Typography>
          <br></br>
          <Typography type="page-description">
            Say goodbye to scattered order confirmations and forgotten
            purchases. With Ordernize, everything is neatly organized in one
            place, making it effortless to recall what's on its way and when to
            expect it. Keep your order history at your fingertips, eliminating
            the stress of forgetting or overlooking important deliveries.
          </Typography>
        </div>
        <div>
          <Typography type="page-header">
            Simple. Streamlined. Seamless.
          </Typography>
          <br></br>
          <Typography type="page-description">
            Our clean and intuitive interface makes navigating your orders a
            breeze. No more sifting through emails or messages to find order
            details. Ordernize provides a minimalist user experience,
            prioritizing clarity and convenience, so you can focus on
            anticipating your next delivery with ease.
          </Typography>
        </div>
      </div>
    </div>
  )
}
