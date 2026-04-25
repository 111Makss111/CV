import { services } from "../../data/about";

export function ServicesSection() {
  return (
    <section className="services" aria-labelledby="services-title">
      <h3 id="services-title">Why Work With Me</h3>
      <div className="service-grid">
        {services.map(({ Icon, title, description }) => (
          <article className="service-card" key={title}>
            <Icon />
            <div>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
