import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Twitter, Music } from "lucide-react";
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
    // Form submission logic would go here
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_raam96/", handle: "@_raam96", color: "hover:text-pink-500" },
    { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com/raam_records", handle: "@raam_records", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", href: "mailto:Raam19.music@gmail.com", handle: "Raam19.music@gmail.com", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's bring your sonic vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-border animate-fade-in">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll respond within 24 hours.</CardDescription>
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
                <Button type="submit" className="w-full" variant="hero">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <div className="flex flex-col justify-center animate-fade-in-slow space-y-6">
            <h3 className="text-2xl font-bold mb-2">Connect With Me</h3>
            
            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300 ${social.color} group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6 transition-transform group-hover:scale-110 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">{social.label}</span>
                    <span className="text-sm text-muted-foreground">{social.handle}</span>
                  </div>
                </a>
              ))}
              
              {/* Phone/WhatsApp */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium">Phone (WhatsApp)</span>
                  <span className="text-sm text-muted-foreground">9952025098</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
