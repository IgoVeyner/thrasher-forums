import DummyForm from '../forms/dummyForm';

export default function Dummy({ renderForm = false, styles }) {

  const [navClassName] = styles

  return (
    <nav className={navClassName} >
      <span className="dummy" id="mail">m</span>
      <span className="dummy" id="facebook">f</span>
      <span className="dummy" id="instagram">i</span>
      <span className="dummy" id="twitter">t</span>
      <span className="dummy" id="youtube">y</span>
      { renderForm ? <DummyForm /> : null }
    </nav>
  )
}