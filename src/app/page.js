"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    profession: "",
    onlineShopping: "",
    shoppingFrequency: "",
    budget: "",
    products: [],
    techInterests: [],
    techProducts: [],
    hobbies: [],
    devices: [],
  });

  const sections = [
    { title: "Información General", icon: "👤" },
    { title: "Área de Trabajo", icon: "💼" },
    { title: "Hábitos de Compra en Línea", icon: "🛒" },
    { title: "Preferencias Tecnológicas", icon: "💻" },
    { title: "Actividades de Tiempo Libre", icon: "⏳" },
    { title: "Dispositivos que Usas", icon: "📱" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          ¡Ayúdanos a conocerte mejor!
        </h1>
        <p className="text-gray-600 mt-2">
          Comparte tus intereses y preferencias de compra en este breve
          formulario.
        </p>
        {currentSection === 0 && (
          <button
            className="mt-4 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCurrentSection(1)}
          >
            Iniciar encuesta
          </button>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {currentSection > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-black h-2.5 rounded-full"
                style={{
                  width: `${(currentSection / sections.length) * 100}%`,
                }}
              ></div>
            </div>
            <h2 className="text-xl text-black font-semibold mb-4">
              {sections[currentSection - 1].title}
            </h2>

            {currentSection === 1 && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="age"
                    className="block text-md font-medium text-gray-700"
                  >
                    Edad
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-black border-black focus:outline-none focus:ring-black focus:border-black sm:text-xs rounded-md"
                  >
                    <option className="" value="">
                      Selecciona tu rango de edad
                    </option>
                    <option value="18-25">18-22</option>
                    <option value="26-35">23-30</option>
                    <option value="36-45">31-35</option>
                    <option value="46+">36+</option>
                  </select>
                </div>
                <div>
                  <span className="block text-md font-medium text-gray-700">
                    Género
                  </span>
                  <div className="mt-2 space-y-2">
                    {["masculino", "femenino", "otro"].map((gender) => (
                      <div key={gender} className="flex items-center">
                        <input
                          id={gender}
                          name="gender"
                          type="radio"
                          value={gender}
                          checked={formData.gender === gender}
                          onChange={handleInputChange}
                          className="focus:ring-red-500 h-4 w-4 text-red-500 border-gray-300"
                        />
                        <label
                          htmlFor={gender}
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {gender.charAt(0).toUpperCase() + gender.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 2 && (
              <div>
                <label
                  htmlFor="profession"
                  className="block text-md font-medium text-gray-700"
                >
                  Profesión
                </label>
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-black border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Selecciona tu profesión</option>
                  <option value="medico">Médico</option>
                  <option value="enfermeria">Enfermería</option>
                  <option value="odontologia">Odontología</option>
                  <option value="informatica">Informática</option>
                  <option value="zonas-francas">Zonas Francas</option>
                  <option value="cocina">Cocina</option>
                  <option value="turismo">Turismo</option>
                  <option value="educacion">Educación</option>
                  <option value="construccion">Construcción</option>
                  <option value="finanzas">Finanzas</option>
                  <option value="banca">Banca</option>
                  <option value="administracion">Administración</option>
                  <option value="recursos-humanos">Recursos Humanos</option>
                  <option value="ingenieria">Ingeniería</option>
                  <option value="logistica">Logística</option>
                  <option value="agricultura">Agricultura</option>
                  <option value="ganaderia">Ganadería</option>
                  <option value="biotecnologia">Biotecnología</option>
                  <option value="quimica">Química</option>
                  <option value="mecanica">Mecánica</option>
                  <option value="electronica">Electrónica</option>
                  <option value="ventas">Ventas</option>
                  <option value="marketing">Marketing</option>
                  <option value="diseño-grafico">Diseño Gráfico</option>
                  <option value="redaccion">Redacción</option>
                  <option value="comunicacion">Comunicación</option>
                  <option value="trabajo-social">Trabajo Social</option>
                  <option value="derecho">Derecho</option>
                  <option value="ambiental">Ciencias Ambientales</option>
                  <option value="investigacion">Investigación</option>
                  <option value="psicologia">Psicología</option>
                  <option value="atencion-al-cliente">
                    Atención al Cliente
                  </option>
                  <option value="transporte">Transporte</option>
                  <option value="seguridad">Seguridad</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="artes">Artes</option>
                  <option value="musica">Música</option>
                  <option value="fotografia">Fotografía</option>
                  <option value="deportes">Deportes</option>
                  <option value="bienestar">Bienestar</option>
                  <option value="gastronomia">Gastronomía</option>
                  <option value="comercio">Comercio</option>
                  <option value="arquitectura">Arquitectura</option>
                  <option value="otro">Otro</option>
                </select>
                {formData.profession === "otro" && (
                  <input
                    type="text"
                    placeholder="Especifica tu profesión"
                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                )}
              </div>
            )}

            {currentSection === 3 && (
              <div className="space-y-4">
                <div>
                  <span className="block text-md font-medium text-gray-700">
                    ¿Compras en línea?
                  </span>
                  <div className="mt-2 space-x-4">
                    {["si", "no"].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="onlineShopping"
                          value={option}
                          checked={formData.onlineShopping === option}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {formData.onlineShopping === "si" && (
                  <>
                    <div>
                      <label
                        htmlFor="shoppingFrequency"
                        className="block text-sm font-medium text-black"
                      >
                        Frecuencia de compras en línea
                      </label>
                      <select
                        id="shoppingFrequency"
                        name="shoppingFrequency"
                        value={formData.shoppingFrequency}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-black border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="">Selecciona la frecuencia</option>
                        <option value="mensual">2 a 4 Dias</option>
                        <option value="mensual">Semanalmente</option>
                        <option value="2-3meses">Mensualmente</option>
                        <option value="ocasional">Ocasionalmente</option>
                        <option value="ocasional">Nunca</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Presupuesto promedio en compras en línea
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-black border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option value="">Selecciona el presupuesto</option>
                        <option value="menos50">Menos de ₡10 000</option>
                        <option value="50-100">₡10 000 - ₡20 000</option>
                        <option value="100-200">₡20 000 - ₡50 000</option>
                        <option value="mas200">Más de ₡50 000</option>
                      </select>
                    </div>
                    <div>
                      <span className="block text-md font-medium text-gray-700">
                        Productos que compras con más frecuencia
                      </span>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {[
                          "Electrodomésticos",
                          "Ropa-Zapatos",
                          "Accesorios",
                          "Computación",
                          "Comida",
                        ].map((product) => (
                          <label
                            key={product}
                            className="inline-flex items-center"
                          >
                            <input
                              type="checkbox"
                              checked={formData.products.includes(product)}
                              onChange={() =>
                                handleCheckboxChange("products", product)
                              }
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              {product}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {currentSection === 4 && (
              <div className="space-y-4">
                <div>
                  <span className="block text-md font-medium text-gray-700">
                    Intereses en productos tecnológicos
                  </span>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[
                      "Gaming",
                      "Fotografía",
                      "Trabajo en oficina",
                      "Productividad",
                    ].map((interest) => (
                      <label
                        key={interest}
                        className="inline-flex items-center"
                      >
                        <input
                          type="checkbox"
                          checked={formData.techInterests.includes(interest)}
                          onChange={() =>
                            handleCheckboxChange("techInterests", interest)
                          }
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-md font-medium text-gray-700">
                    Productos tecnológicos de interés
                  </span>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[
                      "Mouses",
                      "Monitores",
                      "Trípodes de luz",
                      "Luces LED",
                      "Laptops",
                      "Telefonos",
                      "Otros",
                    ].map((product) => (
                      <label key={product} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.techProducts.includes(product)}
                          onChange={() =>
                            handleCheckboxChange("techProducts", product)
                          }
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {product}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 5 && (
              <div className="space-y-4">
                <div>
                  <span className="block text-md font-medium text-gray-700">
                    Actividades de tiempo libre
                  </span>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {[
                      "Series-Novelas-Anime",
                      "Redes sociales",
                      "Lectura",
                      "Cocinar",
                      "Ninguna",
                    ].map((hobby) => (
                      <label key={hobby} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.hobbies.includes(hobby)}
                          onChange={() =>
                            handleCheckboxChange("hobbies", hobby)
                          }
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {hobby}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="block text-md font-medium text-gray-700">
                    ¿Usas dispositivos tecnológicos para estas actividades?
                  </span>
                  <div className="mt-2 space-x-4">
                    {["si", "no"].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="usesTechForHobbies"
                          value={option}
                          onChange={handleInputChange}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentSection === 6 && (
              <div>
                <span className="block text-sm font-medium text-gray-700">
                  Dispositivos que usas regularmente
                </span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["Computadoras", "Laptops", "Tablets", "Smartphones"].map(
                    (device) => (
                      <label key={device} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.devices.includes(device)}
                          onChange={() =>
                            handleCheckboxChange("devices", device)
                          }
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {device}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <button
                onClick={prevSection}
                disabled={currentSection === 1}
                className="inline-flex font-bold items-center px-4 py-2 border-2 border-black shadow-sm text-sm rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="mr-2 h-6 w-6" /> Anterior
              </button>
              <button
                onClick={nextSection}
                disabled={currentSection === sections.length}
                className="inline-flex font-bold items-center px-4 py-2 border border-transparent text-sm  rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentSection === sections.length ? (
                  <>
                    <Check className="mr-2 h-6 w-6" /> Finalizar
                  </>
                ) : (
                  <>
                    Siguiente <ArrowRight className="ml-2 h-6 w-6" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-black text-white p-4 text-center">
        <p>¡Gracias por participar en nuestra encuesta!</p>
        <p className="mt-2 text-sm text-gray-400">
          Sus datos se usarán exclusivamente para ofrecer mejores productos.
        </p>
      </footer>
    </div>
  );
}
