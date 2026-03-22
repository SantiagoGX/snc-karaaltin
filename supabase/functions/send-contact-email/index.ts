import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  height?: string;
  weight?: string;
  areaOfInterest: string;
  consultationType?: string;
  concerns: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormData = await req.json();

    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.areaOfInterest || !data.concerns) {
      throw new Error("Missing required fields");
    }

    const emailResponse = await resend.emails.send({
      from: "Dr. Karaaltın Website <onboarding@resend.dev>",
      to: ["drkaraaltinclinic@gmail.com"],
      subject: `New Consultation Request - ${data.firstName} ${data.lastName}`,
      replyTo: data.email,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #5a5653; padding-bottom: 10px;">
            New Consultation Request
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 40%;">Name</td>
              <td style="padding: 8px 12px;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 8px 12px;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            ${data.height ? `<tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Height</td><td style="padding: 8px 12px;">${data.height}</td></tr>` : ''}
            ${data.weight ? `<tr><td style="padding: 8px 12px; font-weight: bold; color: #555;">Weight</td><td style="padding: 8px 12px;">${data.weight}</td></tr>` : ''}
            ${data.consultationType ? `<tr style="background: #f9f9f9;"><td style="padding: 8px 12px; font-weight: bold; color: #555;">Type of Consultation</td><td style="padding: 8px 12px;">${data.consultationType === 'online' ? 'Online' : 'In-Person London, Maida Vale'}</td></tr>` : ''}
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Area of Interest</td>
              <td style="padding: 8px 12px;">${data.areaOfInterest}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 4px solid #5a5653;">
            <h3 style="margin: 0 0 10px; color: #333;">Patient Concerns</h3>
            <p style="margin: 0; color: #555; line-height: 1.6;">${data.concerns}</p>
          </div>

          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            This message was sent from the Dr. Karaaltın website contact form.
          </p>
        </div>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
