import './App.css';
import Button from './components/button';
import Card from './components/card';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import Paragraph from './components/paragraphs';
import SkillTile from './components/skillTile';
import Timeline from './components/timeLine';

function App() {
  const cards = ['one', 'two', 'three'];
  return (
    <>
      <Navbar />
      <div className='container'>
        <Button type="default" text="Default Button" />
        <Button text="Default Button" />
        <div className="container-fluid">
          <div className="row">
            {cards.map(_ => {
              return (
                <div className="p-2 col-12 col-md-6 col-lg-4">
                  <Card />
                </div>)
            })}
          </div>
        </div>

        <article className="container">
          {cards.map(_ => {
            return (
              <Paragraph />)
          })}
        </article>

        <Jumbotron />

        <div className="col-12 col-md-12 col-lg-6">
          <div className="container">
            <div className="row">
              {cards.map(_ => {
                return (
                  <SkillTile />)
              })}
            </div>
          </div>
        </div>

        <article className="timeline">
          {cards.map(_ => {
            return (
              <Timeline />)
          })}
        </article>
      </div>
      <Footer />
    </>
  );
}

export default App;
