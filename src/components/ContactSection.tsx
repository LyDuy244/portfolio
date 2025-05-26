import React from 'react';
import {Facebook, Github, Linkedin, Mail, Send, Twitter} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {

    }, 5000)
  }
  return (
    <section id={"#contact"} className={"py-24 px-4 relative bg-secondary/30"}>
      <div className={"container mx-auto max-w-5xl"}>
        <h2 className={"text-3xl md:text-4xl font-bold mb-4 text-center"}>Get In <span
          className={"text-primary"}>Touch</span></h2>
        <p className={"text-center text-muted-foreground mb-12 max-w-2xl mx-auto"}>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-12"}>
          <div className={"space-y-8"}>
            <h3 className={"text-2xl font-semibold mb-6"}>Contact information</h3>
            <div className={"space-y-6 justify-center"}>
              <div className={"flex items-start space-x-4"}>
                <div className={"p-3 rounded-full bg-primary/10"}>
                  <Mail className={"w-6 h-6 text-primary"}/>
                </div>
                <div className={""}>
                  <h4 className={"font-medium"}>Email</h4>
                  <Link href={"mailto:lynguyenngocduy123@gmail.com"}
                        className={"text-muted-foreground hover:text-primary transition-colors"}>lynguyenngocduy123@gmail.com</Link>
                </div>
              </div>
              <div className={"flex items-start space-x-4"}>
                <div className={"p-3 rounded-full bg-primary/10"}>
                  <Mail className={"w-6 h-6 text-primary"}/>
                </div>
                <div className={""}>
                  <h4 className={"font-medium"}>Phone</h4>
                  <Link href={"tel:+840935229705"}
                        className={"text-muted-foreground hover:text-primary transition-colors"}>+84 0935-229-705</Link>
                </div>
              </div>
              <div className={"flex items-start space-x-4"}>
                <div className={"p-3 rounded-full bg-primary/10"}>
                  <Mail className={"w-6 h-6 text-primary"}/>
                </div>
                <div className={""}>
                  <h4 className={"font-medium"}>Location</h4>
                  <Link href={"#"} className={"text-muted-foreground hover:text-primary transition-colors"}>Bình Hung,
                    Binh Chanh, Ho Chi Minh city</Link>
                </div>
              </div>
            </div>
            <div className={"pt-8"}>
              <h4 className={"font-medium mb-4"}>Connect with me</h4>
              <div className={"flex space-x-4 justify-center"}>
                <Link href={"#"} target={"_blank"}>
                  <Linkedin/>
                </Link>
                <Link href={"#"} target={"_blank"}>
                  <Facebook/>
                </Link>
                <Link href={"#"} target={"_blank"}>
                  <Github/>
                </Link>
              </div>
            </div>

          </div>
          <div className={"bg-card p-8 rounded-lg shadow-xs"}>
            <h3 className={"text-2xl font-semibold mb-6"}>Send a Message</h3>
            <form className={"space-y-6"} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={"block text-sm font-medium mb-2"}>Your Name</label>
                <input type="text" id={"name"} name={"name"}
                       className={"w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2"}
                       placeholder={"Ngoc Duy..."}/>
              </div>
              <div>
                <label htmlFor="email" className={"block text-sm font-medium mb-2"}>Your Email</label>
                <input type="email" id={"email"} name={"email"}
                       className={"w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2"}
                       placeholder={"ngocduy@gmail.com"}/>
              </div>
              <div>
                <label htmlFor="message" className={"block text-sm font-medium mb-2"}>Your Message</label>
                <textarea id={"message"} name={"message"}
                          className={"resize-none w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2"}
                          placeholder={"Hello, I'd like to talk about..."}></textarea>
              </div>
              <button type={"submit"} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                Send Message
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;