import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"

export default function Component () {
  const siteTitle = "Sabrina's Blog";
  const location = {pathname: 'portfolio'};
  return <>
    <Layout location={location} title={siteTitle}>
      <div className="portfolio-container">
        <h2>Design</h2>
        <p>Browse some of my designs on <a href="https://dribbble.com/sabrinastangler">Dribbble</a></p>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/design-dailyui-008.png"
          // width={200}
          height={300}
          quality={100}
          alt="DailyUI 008: 404 Page"
        />
        <p>Here's a particular design from one of the DailyUI prompts: 404 page</p>

        <div className="flex-row">
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/design-slide-tas-problem.png"
            width={350}
            // height={300}
            quality={100}
            alt="Tip a ScRxipt Pitch Slide: The Problem"
          />
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/design-slide-tas-solution.png"
            width={350}
            // height={300}
            quality={100}
            alt="Tip a ScRxipt Pitch Slide: The Solution"
          />
        </div>
        <p>Here's a <a href="https://drive.google.com/file/d/1PgbiZwU46LEYmUfYprW7vM-bv9t1PXAa/view?usp=sharing">pitch deck</a> I created for Milwaukee Startup, Tip a ScRxipt, back in 2020. All visuals were created within Google Drawings.</p>
        {/* <iframe? */}

        <h3>Logos</h3>

        
        <div className="flex-row">
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/design-logo-msoeai-1.png"
            // width={200}
            height={100}
            quality={100}
            alt="MSOE Ai Club Logo #1"
          />
          <StaticImage
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/design-logo-msoeai-2.png"
            // width={200}
            height={100}
            quality={100}
            alt="MSOE Ai Club Logo #2"
          />
        </div>
        <p>MSOE Artificial Intelligence Club (MSOE Ai Club, MAiC)</p>

        
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/design-logo-polyfill.png"
          // width={200}
          height={100}
          quality={100}
          alt="Team Polyfill Logo"
        />
        <p>Team logo for engineering team at Direct Supply: Team Polyfill</p>
        
        <h2>Development</h2>
        <p><a href="https://github.com/sabrina-stangler">Github</a></p>

        <h3>Noteworthy Projects</h3>

        <h4>Pong Game in Javascript</h4>
        <p><a href="https://github.com/sabrina-stangler/pong">Project Link</a></p>
        <p>The context here is that I received this as a coding challenge for an interview, and while I didn't end up pursuing that job, I ended up completing it as part of a hackathon while I worked at Direct Supply just to prove to myself that I could do it.</p>
        <p>I titled it "Work Appropriate Pong (WAP)", and I ended up winning the hackathon!</p>
      </div>
    </Layout>
  </>
}