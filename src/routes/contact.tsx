import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_MAPS_EMBED_URL,
  SITE_PHONE_DISPLAY,
} from "@/lib/site-contact";
import breadcrumbContact from "@/assets/breadcrumb-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jagdamba Poultry Farms" },
      { name: "description", content: "Reach out for partnerships, distribution, careers or investor relations." },
      { property: "og:title", content: "Contact — Jagdamba Poultry Farms" },
      { property: "og:description", content: "Reach out for partnerships, distribution, careers or investor relations." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[+\d\s\-()]+$/, "Invalid phone format"),
  email: z.string().trim().email("Enter a valid email").max(255),
  inquiryType: z.enum(["partnership", "distribution", "investment", "media", "general"]),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactValues = z.infer<typeof contactSchema>;

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: "general" },
  });

  const onSubmit = async (data: ContactValues) => {
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Failed to send");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  const inputCls = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <SiteLayout>
      <PageHero
        title="Let's Talk."
        subtitle="Whether you're a farmer, distributor, investor or curious soul — we'd love to hear from you."
        crumbs={[{ label: "Contact" }]}
        image={breadcrumbContact}
      />

      <section className="container-x py-16 sm:py-20 md:py-24">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          {/* Left: Info + Map */}
          <Reveal className="min-w-0">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Reach Us Directly</h2>
            <p className="mt-3 text-muted-foreground">
              Our team responds to every inquiry within 24 hours.
            </p>

            <ul className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
              {[
                { Icon: MapPin, title: "Head Office", text: SITE_ADDRESS },
                { Icon: Phone, title: "Phone", text: SITE_PHONE_DISPLAY },
                { Icon: Mail, title: "Email", text: SITE_EMAIL },
              ].map((c) => (
                <li key={c.title} className="flex gap-3 sm:gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <c.Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold">{c.title}</div>
                    <div className="mt-0.5 break-words text-sm text-muted-foreground">{c.text}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 h-56 overflow-hidden rounded-2xl border border-border shadow-soft sm:mt-8 sm:h-72">
              <iframe
                title="Jagdamba Poultry Farms location"
                src={SITE_MAPS_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-elegant sm:p-6 md:p-8 xl:p-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">Send a Message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fill in the form and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-5 sm:mt-8" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                    <input {...register("name")} className={inputCls} placeholder="Your name" />
                    {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input {...register("phone")} className={inputCls} placeholder={SITE_PHONE_DISPLAY} />
                    {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Email</label>
                  <input type="email" {...register("email")} className={inputCls} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Inquiry Type</label>
                  <select {...register("inquiryType")} className={inputCls}>
                    <option value="partnership">Farmer Partnership</option>
                    <option value="distribution">Distribution</option>
                    <option value="investment">Investment</option>
                    <option value="media">Media / Press</option>
                    <option value="general">General</option>
                  </select>
                  {errors.inquiryType && <p className="text-xs text-destructive mt-1.5">{errors.inquiryType.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea {...register("message")} rows={5} className={inputCls} placeholder="Tell us a bit about your inquiry..." />
                  {errors.message && <p className="text-xs text-destructive mt-1.5">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-glow transition-all disabled:opacity-60"
                >
                  {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-primary/10 text-primary px-4 py-3 text-sm">
                    <CheckCircle2 className="h-5 w-5" /> Thank you! We'll be in touch within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-lg bg-destructive/10 text-destructive px-4 py-3 text-sm">
                    {errorMsg || "Something went wrong. Please try again."}
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
