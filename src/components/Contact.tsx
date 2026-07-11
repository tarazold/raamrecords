import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram, SiX, SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/fx/SectionHeading";
import Reveal from "@/hooks/use-reveal";
import Magnetic from "@/components/fx/Magnetic";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:contact@raamrecords.com", handle: "contact@raamrecords.com" },
    { icon: SiWhatsapp, label: "WhatsApp", href: "https://wa.me/919952025098", handle: "+91 99520 25098" },
    { icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/_raam96/", handle: "@_raam96" },
    { icon: SiX, label: "X (Twitter)", href: "https://twitter.com/raam_records", handle: "@raam_records" },
  ];

  const fieldClass =
    "w-full bg-transparent border-0 border-b border-white/[0.12] rounded-none px-0 py-5 text-base font-light text-[var(--bone)] placeholder:text-[hsl(35_8%_38%)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-500";

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading index="06" label="Get in Touch" title="Let's Make Noise" />

        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-14">
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1"
                >
                  The Project
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your film, your track, your idea..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <Magnetic>
                <button
                  type="submit"
                  data-cursor="hover"
                  className="group relative overflow-hidden border border-[var(--gold)] text-gold px-12 h-16 text-[11px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 hover:text-[var(--ink)] flex items-center gap-3"
                >
                  <span className="absolute inset-0 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <span className="relative">Send Message</span>
                  <ArrowUpRight className="relative w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
                </button>
              </Magnetic>
            </form>
          </Reveal>

          {/* Channels */}
          <Reveal delay={150} className="md:col-span-5">
            <p className="font-serif-italic text-xl md:text-2xl text-[hsl(40_18%_92%/0.7)] leading-[1.7] mb-14">
              Films, singles, ads, or something no one has tried yet — if it needs sound, I want to hear about it.
            </p>
            <div className="border-t border-white/10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="group flex items-center justify-between py-7 border-b border-white/[0.07] transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-5">
                    <social.icon className="w-[18px] h-[18px] text-white/40 group-hover:text-gold transition-colors" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {social.label}
                      </div>
                      <div className="text-sm text-[var(--bone)]">{social.handle}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-gold group-hover:rotate-45 transition-all duration-300" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
