import {h, render} from 'preact';
import style from './style.scss';
// import Markdown from "markdown-to-jsx";
// import About from './about.md';
import WelcomeExperience from "../../components/welcome";

// TODO: FIX THIS FESTERING PILE OF SHIT. I tried to use markdown-to-jsx but it explodes.
// todo: see bug ticket here: https://github.com/probablyup/markdown-to-jsx/issues/273

function about_problem() {
    return (
        <div>
            <div className="mdc-typography--headline4" id="problem">Problem:</div>
            <p>
                One of the most annoying things in 3D printing is ordering filament,
                waiting for it to arrive, and then finding out that it's completely the
                wrong color for the project you wanted it for. Some manufacturers try to
                get around this by putting Pantone colors on their spools, but certainly
                not everyone does this. (If they did, this website probably wouldn't exist.)
            </p>
            <p>
                Every filament manufacturer has pictures of their product online. It's always
                super easy to compare and contrast different filament colors to make sure
                they'll work for whatever you're planning... as long as you're buying
                everything from the same manufacturer. What do you do if you want to buy
                from two different places?
            </p>
        </div>
    )
}

function about_solution() {
    return (
        <div>
            <div className="mdc-typography--headline4" id="solution">Solution:</div>
            <p>
                Get filaments from lots of different manufacturers, print with them, and
                photograph the results under similar conditions. The point of this website
                is not to show the "true color" of any given filament -- that requires far
                more equipment than I have the budget for. What this site does is allow you
                to compare and contrast different filament colors from different manufacturers
                using pictures taken under similar lighting conditions and similar equipment.
                It's an easy way to find that <i>perfect</i> blue you've been looking for
                that looks great with your favorite brand of gold filament.
            </p>
            <p>
                Looking for the file I use? Find it here: <u>
                <a href="https://www.thingiverse.com/thing:664377"
                   target="_blank">https://www.thingiverse.com/thing:664377</a></u>
            </p>
        </div>
    )
}

function about_how_does_it_work() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="how-does-it-work">How does it work?</div>
            <p>
                All the images are taken in the same basic way using the same setup and same
                equipment. For every swatch, the image of the front is cropped, then the average
                color in the image (called the 'dominant color') is extracted from the image.
                This is used to create the "pure" hex color, and the hex color is what's used
                to compare to other swatches and help you figure out which filaments you like.
            </p>
            <p>
                If you're interested in seeing how all this comes together into a website (and
                some of the crazy awesome math that I learned while putting this together), all
                of the source code for the site is publicly available on Github. Just click the
                link in the sidebar on any page.
            </p>
        </div>
    )
}

function about_why_not_pantone() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="why-not-pantone">Why not Pantone?</div>
            <p>
                Not everyone's monitor is calibrated and not everyone has access to a recent
                print of the Pantone color book. With an uncalibrated monitor, I could provide
                all the Pantone IDs in the world but they would all look wrong. By using
                relational color instead of real-world color, we still end up with a good result
                regardless of technological or physical color perception.
            </p>
        </div>
    )
}

function about_dear_god_why() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="dear-god-why">Dear God, why?</div>
            <p>
                It was very frustrating to me that I couldn't tell ahead of time how different
                filaments would look when I was getting ready to purchase something specifically
                for a project. After all, like most of us, I'm not made of money and 3D printing
                is not a cheap hobby. Buying a color that defies expectations is not fun, so I
                designed this site to help out my own projects and also help others with planning
                their upcoming projects.
            </p>
        </div>
    )
}

function about_why_is_color_hard() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="why-is-color-hard">Why are the complement sections sometimes
                hilariously wrong?
            </div>
            <p>
                Computers don't see color the same way humans do; there are many very long and
                very involved research papers on the subject, none of which I'm qualified to
                speak on. It may also come down to the fact that my collection is still growing
                and I may not have the right plastic already photographed in the right color.
                <a href="https://www.ludd.ltu.se/~vk/docs/about_colours.shtml"><u> Some </u></a>
                <a href="https://www.compuphase.com/cmetric.htm"><u>resources </u></a>
                <a href="http://hanzratech.in/2015/01/16/color-difference-between-2-colors-using-python.html"><u>that </u></a>
                <a href="https://stackoverflow.com/questions/8863810/python-find-similar-colors-best-way"><u>might </u></a>
                <a href="http://answers.opencv.org/question/127885/how-can-i-best-compare-two-bgr-colors-to-determine-how-similardifferent-they-are/"><u>be </u></a>
                <a href="https://www.alanzucconi.com/2015/09/30/colour-sorting/"><u>interesting</u></a>.
            </p>
        </div>
    )
}

function about_where_do_samples_come_from() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="where-do-the-samples-come-from">Where do the samples come
                from?
            </div>
            <p>
                All the samples on this site are printed by me and the vast majority are from
                subscription services like Maker Box and Mondo Box. Others are from spools that
                I've purchased over the years and others are spools or color samples that were
                gifted to me. I try to not recommend or disparage any specific filament here
                (with one notable exception); other places can do a far better job of reviewing
                filament than I ever could.
            </p>
        </div>
    )
}

function about_i_want_to_help() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="what-runs-this-site">What runs this site?</div>
            <p>
                This site is served on Digital Ocean, the backend is written in Python's Django
                framework, and the HTML / CSS is lovingly hand-written using Bootstrap as a guide.
                Cost wise, it doesn't take much -- just a few dollars every now and again. To offset
                that, I'm a member of the Amazon Affiliate program. As an Amazon Associate I earn from
                qualifying purchases. This doesn't cost you anything; clicking on any of the "Buy on
                Amazon" links scattered throughout the site will provide a small kickback that I
                use solely for keeping the site running and occasionally buying sample packs to
                add new materials to the site.
            </p>
        </div>
    )
}

function about_licensing() {
    return (
        <div className={style.bumpDown}>
            <div className="mdc-typography--headline4" id="licensing">Licensing Information</div>
            <p>
                All of the source code for this website, <u>
                <a href="https://github.com/itsthejoker/filamentcolors.xyz">found on Github</a></u>,
                is licensed under the <u><a href="https://opensource.org/licenses/MIT">MIT license</a></u>.
                All images, text, and data found on the production version of this site is licensed
                under <u><a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0</a></u>.
            </p>
        </div>
    )
}

export default function AboutPage() {
    console.log("The type of the About block is: ", typeof(About));
    return (
        <div className={`${style.home} page`}>
            <div className={style.giantBlockOfText}>
                <p/>
                {about_problem()}
                {about_solution()}
                <div className={`mdc-typography--headline3 ${style.bumpDown}`}>FAQ</div>
                <hr/>
                {about_how_does_it_work()}
                {about_why_not_pantone()}
                {about_dear_god_why()}
                {about_why_is_color_hard()}
                {about_where_do_samples_come_from()}
                {about_i_want_to_help()}
                {about_licensing()}
                <WelcomeExperience/>
            </div>
        </div>
    )
}
