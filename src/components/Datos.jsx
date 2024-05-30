import CardDatos from "./CardDatos";

const Datos = () => {
  const data = [
    {
      Title: "Ceremonia Religiosa",
      image:
        "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1717027706/Invitame%20ya/iglesia_rs3oix.jpg",
      where: "Parroquia de San José Patriarca",
      when: "31 de agosto de 2024, 14:00 horas",
      addres: "C.Chopo s/n Col.San José, Chicoloapan, Méx. C.P. 56377",
      link: "https://maps.app.goo.gl/kNoZyUtf4uWspKfRA",
    },
    {
      Title: "Recepción",
      image:
        "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1716488647/Invitame%20ya/salon_dnhsow.jpg",
      where: "Salón Punta Azul",
      when: "31 de agosto de 2024, 18:00 horas",
      addres:
        "Carr. Federal México-Cuautla No.1162, Col. Casco de San Juan, Chalco de Díaz Covarrubias, Méx. C.P. 56600",
      link: "https://maps.app.goo.gl/cnuj7BnjVZSbDNHV9",
    },
  ];

  return (
    <div className="bg-yellow-100 min-h-screen md:mx-24 lg:mx-32 flex flex-col items-center">
      <h2 className="text-center p-4 lg:text-6xl text-4xl font-playfair text-shadow">
        ¿Dónde y cuándo?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {data.map((e, i) => (
          <div className="flex justify-center " key={i}>
            <CardDatos
              Title={e.Title}
              image={e.image}
              where={e.where}
              when={e.when}
              addres={e.addres}
              link={e.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datos;
