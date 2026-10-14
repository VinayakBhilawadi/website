
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layout,
  Palette,
  Search,
  Sparkles,
  Star,
  Zap,
  Menu,
  MonitorSmartphone,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Design",
    description:
      "Beautiful, modern website designs that make your brand stand out.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites built with modern technology.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Simple, intuitive experiences that keep your visitors engaged.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Search-friendly websites designed to improve visibility and reach.",
    color: "bg-rose-100 text-rose-600",
  },
];

const projects = [
  {
    title: "Creative Studio",
    category: "Branding & Web Design",
    bg: "bg-violet-100",
    accent: "bg-violet-600",
    heading: "Make it bold.",
    description: "Creative ideas deserve a beautiful home.",
  },
  {
    title: "Modern Commerce",
    category: "E-commerce Website",
    bg: "bg-rose-100",
    accent: "bg-rose-500",
    heading: "Shop differently.",
    description: "A smarter shopping experience.",
  },
  {
    title: "Personal Portfolio",
    category: "UI/UX Design",
    bg: "bg-indigo-100",
    accent: "bg-indigo-600",
    heading: "Hello, creator.",
    description: "Show the world what you do best.",
  },
];

const benefits = [
  "Designs tailored to your brand and goals",
  "Responsive across mobile, tablet, and desktop",
  "Modern, scalable development",
  "Performance-focused and SEO-conscious websites",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white font-sans text-[#43395d]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-violet-100 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#home" className="text-xl italic tracking-tight">
            YOUR <span className="font-extrabold">WEBSITE</span>
            <span className="text-violet-600">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm text-gray-600 transition hover:text-violet-600">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-600 transition hover:text-violet-600">
              About Us
            </a>
            <a href="#services" className="text-sm text-gray-600 transition hover:text-violet-600">
              Services
            </a>
            <a href="#work" className="text-sm text-gray-600 transition hover:text-violet-600">
              Our Work
            </a>
            <a href="#contact" className="text-sm text-gray-600 transition hover:text-violet-600">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700 sm:flex"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </a>

          <a
            href="#services"
            aria-label="Browse services"
            className="flex size-10 items-center justify-center rounded-full bg-violet-50 text-violet-700 md:hidden"
          >
            <Menu size={21} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate bg-[#edebf9]">
        <div className="pointer-events-none absolute -left-24 -top-28 -z-10 size-72 rounded-full bg-[#df5c70]" />
        <div className="pointer-events-none absolute -right-24 -top-40 -z-10 size-96 rounded-full bg-[#6955d8]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 size-96 rounded-full bg-[#3820b9]" />
        <div className="pointer-events-none absolute -bottom-10 right-0 -z-10 size-40 rounded-full bg-[#e78291]" />

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 rounded-3xl bg-white p-6 shadow-[0_25px_60px_rgba(48,35,85,0.15)] sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-700">
                <Sparkles size={15} />
                Creative Digital Agency
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                We Design.
                <br />
                We Develop.
                <br />
                <span className="text-violet-600">We Deliver.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-gray-500 sm:text-lg">
                We create beautiful, modern, and user-friendly websites that
                help businesses build their online presence and turn visitors
                into customers.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  Get Started <ArrowRight size={18} />
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-7 py-4 font-semibold transition hover:border-violet-300 hover:bg-violet-50"
                >
                  View Our Work
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Check size={17} className="text-violet-600" />
                  Responsive Design
                </span>
                <span className="flex items-center gap-2">
                  <Check size={17} className="text-violet-600" />
                  Modern Technology
                </span>
              </div>
            </div>

            {/* CSS ILLUSTRATION */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute inset-10 rounded-full bg-violet-200/70 blur-3xl" />

              <div className="relative rounded-3xl border border-violet-100 bg-[#f8f5ff] p-4 shadow-xl sm:p-6">
                <div className="flex items-center gap-2 border-b border-violet-100 pb-4">
                  <span className="size-3 rounded-full bg-rose-400" />
                  <span className="size-3 rounded-full bg-amber-300" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                  <span className="ml-auto rounded-full bg-white px-4 py-2 text-xs text-gray-400">
                    yourwebsite.com
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center gap-4 py-8">
                  <div>
                    <div className="mb-4 h-2 w-16 rounded-full bg-violet-300" />
                    <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                      Design
                      <br />
                      your future.
                    </h2>
                    <div className="mt-4 h-2 w-full rounded-full bg-violet-100" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-violet-100" />
                    <div className="mt-6 inline-flex rounded-full bg-violet-600 px-4 py-2 text-xs font-bold text-white">
                      Explore more
                    </div>
                  </div>

                  <div className="relative flex aspect-[4/5] items-center justify-center rounded-t-full rounded-b-2xl bg-gradient-to-br from-rose-200 via-pink-100 to-violet-200">
                    <div className="absolute right-4 top-5 size-8 rounded-full bg-white/70" />
                    <div className="absolute bottom-5 left-3 size-6 rounded-full bg-violet-300" />

                    <div className="relative flex flex-col items-center pt-5">
                      <div className="z-10 size-14 rounded-full bg-[#f1c8b9] sm:size-16" />
                      <div className="-mt-1 h-6 w-14 rounded-t-xl bg-[#27224c]" />
                      <div className="relative flex h-24 w-24 justify-center rounded-t-[28px] bg-rose-500 sm:h-28 sm:w-28">
                        <div className="mt-4 h-12 w-1 rounded-full bg-rose-300" />
                        <div className="absolute -left-4 top-5 h-14 w-5 rotate-12 rounded-full bg-[#f1c8b9]" />
                        <div className="absolute -right-4 top-5 h-14 w-5 -rotate-12 rounded-full bg-[#f1c8b9]" />
                      </div>
                      <div className="flex gap-5">
                        <div className="h-16 w-8 rounded-b-xl bg-indigo-700 sm:h-20" />
                        <div className="h-16 w-8 rounded-b-xl bg-violet-700 sm:h-20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                      <Palette size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Creative Design</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Made with purpose
                      </p>
                    </div>
                  </div>
                  <Sparkles className="text-violet-500" size={22} />
                </div>
              </div>

              <div className="absolute -left-4 top-1/3 hidden rounded-2xl bg-white p-4 shadow-xl sm:block">
                <Zap className="text-amber-400" size={24} />
                <p className="mt-2 text-xs font-bold">Fast & Modern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="rounded-3xl bg-[#edebf9] p-6 sm:p-10">
            <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <MonitorSmartphone size={32} />
              </div>
              <h3 className="mt-7 text-3xl font-extrabold sm:text-4xl">
                Good design.
                <br />
                Great experiences.
              </h3>
              <div className="mt-7 flex gap-3">
                <div className="h-20 flex-1 rounded-2xl bg-violet-200" />
                <div className="h-20 flex-1 rounded-2xl bg-rose-200" />
                <div className="h-20 flex-1 rounded-2xl bg-indigo-200" />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-600">
              About Us
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Turning Ideas Into Digital Experiences
            </h2>
            <p className="mt-6 leading-8 text-gray-500">
              We are a creative web design agency passionate about helping
              businesses succeed online. We combine creativity, technology,
              and strategy to build websites that look amazing, work seamlessly,
              and communicate your brand&apos;s value.
            </p>
            <p className="mt-4 leading-8 text-gray-500">
              From startups to established businesses, we transform ideas into
              engaging digital experiences that connect with audiences.
            </p>
            <a href="#services" className="mt-7 inline-flex items-center gap-2 font-bold text-violet-700">
              Discover Our Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 bg-[#f8f7fc] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-600">
              What We Do
            </p>
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Everything You Need to Grow Online
            </h2>
            <p className="mt-5 leading-8 text-gray-500">
              From your first idea to your final launch, we create digital
              solutions designed around your business.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex size-14 items-center justify-center rounded-2xl ${service.color}`}>
                      <Icon size={26} />
                    </div>
                    <span className="text-sm font-bold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`Ask about ${service.title}`}
                    className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-gray-200 transition group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-600">
            Selected Projects
          </p>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Work That Speaks for Itself
              </h2>
              <p className="mt-5 leading-8 text-gray-500">
                Explore creative concepts that demonstrate our approach to
                digital design and development.
              </p>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 px-6 py-3 font-semibold hover:bg-violet-50">
              Start a Project <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 ${project.bg}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#43395d]">
                      {project.category}
                    </span>
                    <span className={`flex size-10 items-center justify-center rounded-full text-white ${project.accent}`}>
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div>
                    <div className={`mb-5 flex size-16 items-center justify-center rounded-2xl text-white ${project.accent}`}>
                      {project.title === "Creative Studio" ? (
                        <Palette size={30} />
                      ) : project.title === "Modern Commerce" ? (
                        <Layout size={30} />
                      ) : (
                        <MonitorSmartphone size={30} />
                      )}
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#43395d] sm:text-3xl">
                      {project.heading}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{project.category}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">
            Replace these sample concepts with your real projects.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-[#43395d] p-7 text-white sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-violet-300">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Your Vision.
              <br />
              Our Creativity.
              <br />
              <span className="text-violet-300">One Great Result.</span>
            </h2>
            <p className="mt-6 leading-8 text-violet-100/75">
              A great website should do more than look good. It should make
              your brand memorable, help your customers, and support your
              business goals.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-violet-800 hover:bg-violet-100">
              Work With Us <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-3xl bg-white/5 p-5 sm:p-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 border-b border-white/10 py-5 last:border-0">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-400/20 text-violet-200">
                  <Check size={20} />
                </div>
                <p className="pt-1 leading-7 text-white/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#f8f7fc] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-violet-600">
            Client Feedback
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Good Work Builds Great Relationships
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            We believe great results come from listening, collaborating, and
            caring about every detail.
          </p>

          <div className="mt-10 rounded-3xl border border-violet-100 bg-white p-7 shadow-sm sm:p-12">
            <div className="flex justify-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} size={19} fill="currentColor" />
              ))}
            </div>
            <blockquote className="mt-7 text-xl font-medium leading-9 sm:text-2xl sm:leading-10">
              “The team understood our vision and helped turn our ideas into a
              beautiful, easy-to-use website. The process was collaborative
              and thoughtful from start to finish.”
            </blockquote>
            <p className="mt-7 font-bold">Client testimonial placeholder</p>
            <p className="mt-1 text-sm text-gray-500">
              Replace with a real client name and company
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#edebf9] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-violet-200/70" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 size-56 rounded-full bg-rose-200/70" />

          <div className="relative mx-auto max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-violet-700">
              Have a Project in Mind?
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              Let&apos;s bring your ideas to life with a website that reflects
              your brand and connects with your audience.
            </p>
            <a
              href="mailto:hello@yourwebsite.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
            >
              Let&apos;s Talk About Your Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#27213c] px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#home" className="text-xl italic">
              YOUR <span className="font-extrabold">WEBSITE</span>
              <span className="text-violet-400">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
              Creative ideas, thoughtful design, and modern development to
              help your business make its mark online.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/60">
              <a href="/homepage" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About Us</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#work" className="hover:text-white">Our Work</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Get in Touch</h3>
            <div className="mt-4 flex flex-col gap-4 text-sm text-white/60">
              <a href="mailto:hello@yourwebsite.com" className="flex items-center gap-3 hover:text-white">
                <Mail size={17} /> vinayak@website.com
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-3 hover:text-white">
                <Phone size={17} /> +91 88803 29437
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={17} /> Bangalore, India
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {/* © {new Date().getFullYear()} Your Website. All rights reserved. */}
            © 2026 Your Website. All rights reserved.
          </p>
          <a href="#home" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}