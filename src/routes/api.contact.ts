import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(20).regex(/^[+\d\s\-()]+$/),
  email: z.string().trim().email().max(255),
  inquiryType: z.enum(["partnership", "distribution", "investment", "media", "general"]),
  message: z.string().trim().min(10).max(1000),
});

export const Route = createFileRoute("/api/contact")({
  // @ts-expect-error - server route handlers typed via generated tree
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = await request.json();
          const parsed = contactSchema.safeParse(body);
          if (!parsed.success) {
            return Response.json(
              { success: false, error: "Invalid input", issues: parsed.error.issues },
              { status: 400 },
            );
          }

          // Server-side handling. In production: send email / store in DB.
          // For now we log and acknowledge.
          console.log("[contact] new submission:", {
            ...parsed.data,
            receivedAt: new Date().toISOString(),
          });

          return Response.json({ success: true, message: "Thank you, we'll be in touch." });
        } catch (err) {
          return Response.json(
            { success: false, error: err instanceof Error ? err.message : "Server error" },
            { status: 500 },
          );
        }
      },
    },
  },
});
