import "./App.css";
import Form from "./components/Form";
import CardAdvantages from "./components/CardAdvantages";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { TrendingUp, Target, Users } from "lucide-react";
import CaseStudyCard from "./components/CaseStudyCard";
import NotFound from "./assets/notFound.png"

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-500 p-6">
        <Button text="Buscar" variant="primary" />
        <Button text="Buscar" variant="secondary" />
        <Button text="Buscar" variant="details" />
      </div>

      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <CardAdvantages
              icon={TrendingUp}
              title="Estrategias Personalizadas"
              description="Desarrollamos planes de marketing únicos adaptados a tus objetivos y audiencia específica."
            />
            <CardAdvantages
              icon={Target}
              title="Resultados Medibles"
              description="Utilizamos análisis avanzados para medir y optimizar constantemente el rendimiento de tus campañas."
            />
            <CardAdvantages
              icon={Users}
              title="Equipo de Expertos"
              description="Nuestro equipo está formado por profesionales con años de experiencia en marketing digital y tradicional."
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Casos de Éxito
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
               image={NotFound}
              title="Aumento de Ventas Online"
              description="Incrementamos las ventas en línea de nuestro cliente en un tiempo récord."
              stats={[
                { label: "Incremento en Ventas", value: "150%" },
                { label: "Tiempo", value: "3 meses" },
              ]}
            />
            <CaseStudyCard
               image={NotFound}
              title="Campaña Viral en Redes Sociales"
              description="Nuestra campaña alcanzó a millones y generó un gran número de seguidores."
              stats={[
                { label: "Alcance", value: "1M+" },
                { label: "Nuevos Seguidores", value: "50k" },
              ]}
            />
            <CaseStudyCard
              image={NotFound}
              title="Optimización de Conversiones"
              description="Mejoramos significativamente la tasa de conversión del sitio web de nuestro cliente."
              stats={[
                { label: "Aumento en Conversiones", value: "75%" },
                { label: "ROI", value: "300%" },
              ]}
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-100">
        <div className="w-96 mx-auto bg-gray-800 p-4 rounded-md shadow-md my-3">
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
