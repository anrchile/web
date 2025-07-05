export default function Footer() {
  const today = new Date();
  return (
    <footer
      className="bg-gray-800 text-gray-300 py-8"
      style={{
        viewTransitionName: "footer",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contacto</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:contacto@anrchile.cl"
                className="hover:text-yellow-200"
              >
                contacto@anrchile.cl
              </a>
            </p>
          </div>
          <div>
            {/*  <h3 className="text-xl font-bold text-yellow-400 mb-4">Enlaces Rápidos</h3>
        <ul>
          <li>
            <a href="#" className="hover:text-yellow-200"> Programas </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-200"> Eventos </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-200"> Recursos </a>
          </li>
        </ul>  */}
          </div>
          <div>
            {/*  <h3 className="text-xl font-bold text-yellow-400 mb-4">Boletín</h3>
        <p className="mb-4">Suscríbete para recibir noticias y actualizaciones.</p>
        <div className="flex">
          <Input classNameName="mr-2" placeholder="Tu email" type="email" />
          <Button classNameName="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
            Suscribir
          </Button>
        </div> */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            © {today.getFullYear()} Academia Nacional de Robótica. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
