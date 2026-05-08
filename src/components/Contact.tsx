import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Twitter, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_raam96/", handle: "@_raam96" },
    { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com/raam_records", handle: "@raam_records" },
    { icon: Mail, label: "Email", href: "mailto:contact@raamrecords.com", handle: "contact@raamrecords.com" },
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom max-w-4xl">
        <h2
          className="text-4xl md:text-5xl font-extralight mb-4 text-center text-white"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em' }}
        >
          LET’S COLLABORATE
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-6"></div>
        <p className="text-gray-400 text-base md:text-lg text-center font-light mb-16 max-w-xl mx-auto">
          Have a project in mind? Let’s bring your sonic vision to life.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="bg-transparent border border-white/10 rounded-none animate-fade-in">
            <CardHeader className="pb-4">
              <CardTitle
                className="text-sm font-extralight uppercase text-white"
                style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.25em' }}
              >
                Send a Message
              </CardTitle>
              <CardDescription className="text-gray-400 font-light">
                Fill out the form and I’ll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-extralight uppercase tracking-[0.25em] text-xs h-12 rounded-none"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="flex flex-col justify-center animate-fade-in-slow">
            <h3
              className="text-sm font-extralight uppercase mb-8 text-white"
              style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.25em' }}
            >
              Connect With Me
            </h3>

            {/* Social Links — minimal divider rows */}
            <div className="border-t border-white/10">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-5 py-5 border-b border-white/10 hover:bg-white/[0.03] hover:text-primary transition-colors duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5 flex-shrink-0 text-white/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  <div className="flex flex-col">
                    <span
                      className="text-xs font-extralight uppercase text-white"
                      style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.2em' }}
                    >
                      {social.label}
                    </span>
                    <span className="text-sm text-gray-400 font-light">{social.handle}</span>
                  </div>
                </a>
              ))}

              {/* Phone/WhatsApp */}
              <a
                href="https://wa.me/919952025098"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 py-5 border-b border-white/10 hover:bg-white/[0.03] hover:text-primary transition-colors duration-300 group"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 text-white/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span
                    className="text-xs font-extralight uppercase text-white"
                    style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.2em' }}
                  >
                    WhatsApp
                  </span>
                  <span className="text-sm text-gray-400 font-light">+91 99520 25098</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
