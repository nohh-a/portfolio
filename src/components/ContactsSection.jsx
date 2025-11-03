import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description:
          "Thanks for the message. I'll get back to you as soon as possible!",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to collaborate or have an idea in mind? Please feel free to reach
          out. I'm always open to discussing new opportunities.
        </p>
        <div className="gap-12 text-center">
          <div className="space-y-16">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              , Contact Information
            </h3>
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:nrod5432@hotmail.com"
                    className="text-muted-foreground hover:text-priamry transition-colors"
                  >
                    nrod5432@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium pl-6"> Phone</h4>
                  <a
                    href="tel:+0405585674"
                    className="text-muted-foreground hover:text-priamry transition-colors"
                  >
                    (+61) 405 585 674
                  </a>
                </div>
              </div>
              <div className="flex justify-start space-x-4=">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-priamry transition-colors">
                    Melbourne, Victoria, AU
                  </a>
                </div>
              </div>
              {/* <div className="flex justify-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a className="text-muted-foreground hover:text-priamry transition-colors">
                    Connect With Me
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
