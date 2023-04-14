import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import Social from "./components/Social.jsx";
import Timer from "./components/Timer";
import { arrProducts } from "./constants/constants.js";
import logo from "./assets/logo/logo.jpeg";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto relative">
      <Social />
      <Button />
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo del sito" />
      </div>
      <div className="text-center px-10">
        <h1 className="uppercase text-5xl font-bold text-primary my-5">
          Approfitta delle nostre offerte del mese su questi prodotti!
        </h1>
        <div className="lg:w-2/3 mx-auto py-5">
          {/* <p className="text-blue-900 text-2xl">
            Se hai bisogno di aiuto, chatta con noi: uno dei nostri{" "}
            <span className="font-bold text-primary">👨‍💻 tecnici</span> sarà a
            tua disposizione per offrirti il{" "}
            <span className="font-bold text-primary">🛡️ supporto</span> di cui
            hai bisogno e{" "}
            <span className="font-bold text-primary">🤝 facilitare</span> le tue
            scelte.
          </p> */}
          <p className="text-blue-900 text-2xl">
            Se hai bisogno di aiuto, chatta con noi. Uno dei nostri{" "}
            <span className="font-bold text-primary">👨‍💻 tecnici</span> sarà a
            tua disposizione per offrirti il{" "}
            <span className="font-bold text-primary">🛡️ supporto</span> di cui
            hai bisogno e{" "}
            <span className="font-bold text-primary">🤝 facilitare</span> le tue
            scelte.
          </p>
          <p className="text-blue-900 text-2xl">
            Non perdere l'{" "}
            <span className="font-bold text-primary">💡 occasione</span> di
            approfittare delle nostre offerte speciali!
          </p>
        </div>
        {arrProducts.length > 0 && <Timer />}
        <div className="flex flex-wrap justify-center gap-12 pt-10">
          {arrProducts.map((product, i) => (
            <div
              className="card"
              key={i}
              style={{ animationDelay: `${i * 400}ms` }}
            >
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
