import '../styles/App.scss';

function App() {
  return (
    <div>
      <main>
        <h1 className="page__title">Harry Potter</h1>
        <section className="section__form">
          <form className="form">
            <label className="form__label" htmlFor="name">
              Busca por personaje:
            </label>
            <input
              className="form__input-text"
              type="text"
              name="name"
              id="text"
            />
            <label className="form__label" htmlFor="house">
              Seleccciona la casa:
            </label>
            <select className="form__input-text" name="house" id="house">
              <option value="gryffindor">Gryffindor</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
              <option value="slytherin">Slytherin</option>
            </select>
          </form>
        </section>
        <section className="section_cards">
          <ul className="cards">
            <li className="card">aqui va la info del personaje</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>texto para el footer</p>
      </footer>
    </div>
  );
}

export default App;
