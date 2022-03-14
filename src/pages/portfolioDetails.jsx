import React, { useEffect, useRef, useState } from "react";
import Jumbotron from '../components/jumbotron';
import { Projects } from '../data/projects';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function PortfolioDetails() {
    const { id } = useParams()
    const contentRef = useRef();
    const [refVisible, setRefVisible] = useState(false);
    const buildList = (headings) => {
        const rtnList = [];
        if (headings.length > 0) {
            headings.forEach((heading, index) => {
                rtnList.push(<li key={index}><Link to={`#${heading.id}`}>{heading.innerText}</Link></li>);
            })
        }
        return rtnList;
    };
    const contentList = () => {
        const returnList = [];
        if (contentRef.current) {
            const contentSections = contentRef.current.querySelectorAll("section");
            if (contentSections.length > 0) {
                contentSections.forEach((section, index) => {
                    const heading2 = section.querySelectorAll("h2");
                    const heading3 = section.querySelectorAll("h3");
                    if (heading2.length > 0) {
                        heading2.forEach(h2 => {
                            returnList.push(
                                <li key={index}><Link to={`#${h2.id}`}>{h2.innerText}</Link>
                                    <ul>{buildList(heading3)}</ul>
                                </li>
                            );
                        })
                    }
                })
            }
        }
        return returnList;
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [refVisible])
    const project = Projects.find(prj => prj.id === Number(id));
    return project && (
        <>
            <Jumbotron
                topElement={<h1>{project.title}</h1>}
                bottomElement={
                    <p>{project.description}</p>
                } />
            <article className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4 color-light-hover order-md-1 p-4 mb-4 rounded">
                        <div className="sticky-top ms-2">
                            <h2>Contents</h2>
                            <ul className="my-2">
                                {contentList()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 order-md-0" ref={el => { contentRef.current = el; setRefVisible(!!el); }}>
                        <div className="container-fluid">
                            <section className="text-center">
                                <iframe className="rounded" width="100%" height="400px" src="https://www.youtube.com/embed/hK7LNB1Eg6U"
                                    title="Atari - Mini Documentary" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <em>Atari - Mini Documentary</em>
                            </section>
                            <section className="row py-3">
                                <div className="col-12">
                                    <h2 className="text-heading" id="anchor-background">Background</h2>
                                </div>
                                <div className="col-12 col-lg-7">
                                    <h3 id="anchor-inspiration">Inspiration</h3>
                                    <p>Growing up, some of my fondest memories are hanging out with my friends after school to play some arcade games. These screens are probably parts of our childhood. And if you notice on the top of those screens, older arcade games like 'Space Invaders' and 'Pac-Man' used these bit-map fonts to display information to keep scores or guide players through the games. This is why I want to take a deeper look at arcade game design to uncover the skillfulness and originality it took to create out-and-out characters by just a few pixels.
                                        This typeface is often called “Atari” font, or the “Namco” font in japan. It not only needs to balance legibility and creativity, but it also had to do it while taking up as little computer memory as possible. It’s an excellent example of how video game designers and developers used just bits and bytes to communicate to players.
                                    </p>
                                </div>
                                <div className="col-12 col-lg-5 text-center pt-5">
                                    <img src="https://flyers.arcade-museum.com/flyers_video/taito/28031001.jpg" className="img-responsive w-100 rounded" alt="Space Invaders flyer" />
                                    <em>Space Invaders - Promotional flyer</em>
                                </div>
                                <div>
                                    <h3 id="anchor-technicalLimitations">Technical limitations</h3>
                                    <p>Most of the fonts that were used in arcade games were designed within this 8x8 grid. Why is it an 8x8 grid? Well, The TV monitor display was divided into a 32 by 28 tile grid. Each tile represents 1 byte of data, that’s 8 bits. And when you zoom in, each tile is also divided into an 8x8 grid. Each cell can be turned on and off. The more cell that is turned on, the more computer power that is required which was very limited back then. These games exercise efficiency, the developers had to conserve computer memory while making the most readable graphic for the players.
                                        To save the amount of data, it was necessary to consider readability as well as the constraint that it must be designed within 8 × 8 squares.</p>
                                </div>
                            </section>
                            <section className="row py-3">
                                <div className="col-12">
                                    <h2 className="text-heading" id="anchor-typography">Typography</h2>
                                </div>
                                <div className="col-12 col-lg-7 order-lg-1">
                                    <h3 id="anchor-toshiOmagari">Toshi Omagari</h3>
                                    <p><a href="https://thamesandhudson.com/authors/toshi-omagari-71840" target="_blank" rel="noreferrer">Toshi Omagari</a> is a type designer at Monotype UK. He graduated from Musashino Art University in Tokyo. He has just published his book called <a href="https://thamesandhudson.com/authors/toshi-omagari-71840" target="_blank" rel="noreferrer">“Arcade Game Typography"</a>, which traces the evolution of arcade game fonts. In this book, he presented a variety of arcade game fonts using the constraints of an 8x8-pixel grid. While early games were mostly black and white, the complexity and color range started to accelerate in the late '80s. In the Arcade Game Typography, Toshi Omigari explained how it all started with a typeface from Atari which first showed up in the Sprint 2 and Quiz Show games. </p>
                                </div>
                                <div className="col-12 col-lg-5 text-center order-lg-0 pt-2">
                                    <img src="https://thamesandhudson-965c.kxcdn.com/media/catalog/product/cache/13d0fbd8236dd788446384c400571bbc/9/7/9780500021743_arcade-game-typography.jpg" className="img-responsive w-100 rounded" alt="Arcade Game Typography" />
                                    <em>Arcade Game Typography</em>
                                </div>
                                <div className="col-12 order-lg-2">
                                    <h3 id="anchor-arcadeGameTypography">Arcade Game Typography</h3>
                                    <p>In these games, all 26 letters and 10 numbers were created. Each letter and number must fit into the grid of 8x8 which is why this type of font - like most arcade fonts are MONOSPACED. As the name suggests, each letter fits within the same width. And because all the tiles on the screen are locked together, the 8x8 grid also must account for the gap between characters.
                                        Each letter in the Quiz Show and Sprint 2 has one pixel of horizontal thickness and two pixels of vertical thickness. Each 8x8 grid also leaves 1 vertical and 1 horizontal row for spacing between letters. The designer of this font also wants to follow the calligraphic tradition of typography. That is why some of the numbers like 0 and 8 don’t necessarily follow the vertical and horizontal thickness rules. This is also how you distinguish the letter O and the number zero. The left O (o) has a line-symmetric and point-symmetric design, and the right 0 (zero) has a point-symmetric design.
                                    </p>
                                </div>
                            </section>
                            <section className="row py-3">
                                <div className="col-12">
                                    <h2 className="text-heading" id="anchor-conclusion">Conclusion</h2>
                                </div>
                                <p>The quiz show game was designed in the US and the Atari font was used largely by Japanese developers who were not familiar with the alphabetical letters, so they put their own twist on it especially when it comes to lowercase letters. The design of the lowercase first appeared in 1983, in a game called Pho-zon. However, the lowercase letters in this game don’t follow the spacing rule. Some of the letters like g, j, p, q, and y violated the vertical and horizontal spacing rules causing them to touch other characters.
                                    Since the 1980s, the performance of arcade games has gradually evolved. The number of fonts with multiple colors and the number of expression methods has increased. In addition, those features like shadows and frames have also been introduced
                                    Atari is a shining example of how video game designers used an 8x8 grid to communicate to players despite the technical limitations in the arcade games of the 70s and 80s.
                                    “It's a very small grid, but the possibilities are endless”. Toshi Omigari said.
                                </p>
                            </section>
                            <section className="row py-3">
                                <div className="col-12">
                                    <h2 className="text-heading" id="anchor-reference">Reference</h2>
                                </div>
                                <div className="col-12">
                                    <ul>
                                        <li><a href="https://www.vox.com/videos/2020/4/6/21207471/atari-8-bit-arcade-font" target="_blank" rel="noreferrer">https://www.vox.com/videos/2020/4/6/21207471/atari-8-bit-arcade-font</a></li>
                                        <li><a href=" https://readonlymemory.vg/shop/book/arcade-game-typography" target="_blank" rel="noreferrer"> https://readonlymemory.vg/shop/book/arcade-game-typography</a></li>
                                        <li><a href="https://typography.network/2020/02/05/8x8-a-day-of-arcade-game-typography-with-toshi-omagari" target="_blank" rel="noreferrer">https://typography.network/2020/02/05/8x8-a-day-of-arcade-game-typography-with-toshi-omagari</a></li>
                                        <li><a href="https://www.youtube.com/watch?v=P3sqUrX83Yg" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=P3sqUrX83Yg</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default PortfolioDetails;