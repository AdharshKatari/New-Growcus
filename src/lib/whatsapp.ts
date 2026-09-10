const GRAPH_API_VERSION = "v20.0";
const BASE_URL = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

interface SendOTPResult {
  messageId: string | null;
  error?: string;
}

/**
 * Send 4-digit or 6-digit passwordless OTP via WhatsApp Cloud API
 */
export async function sendWhatsAppOTP(
  phone: string,
  otp: string
): Promise<SendOTPResult> {
  const isDevMode = process.env.DEV_MODE_OTP === "true";
  
  if (isDevMode || !process.env.WHATSAPP_ACCESS_TOKEN) {
    console.log(`[WHATSAPP DEV BYPASS] OTP for ${phone}: ${otp}`);
    return { messageId: `dev-msg-${Date.now()}` };
  }

  const url = `${BASE_URL}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: phone.startsWith("+") ? phone : `+91${phone}`,
    type: "template",
    template: {
      name: process.env.WHATSAPP_OTP_TEMPLATE_NAME || "growcus_otp",
      language: { code: "en_US" },
      components: [
        {
          type: "body",
          parameters: [{ type: "text", text: otp }],
        },
        {
          type: "button",
          sub_type: "url",
          index: "0",
          parameters: [{ type: "text", text: otp }],
        },
      ],
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      return { messageId: null, error: data?.error?.message || "WhatsApp API Error" };
    }
    return { messageId: data?.messages?.[0]?.id ?? null };
  } catch (error) {
    return { messageId: null, error: String(error) };
  }
}

/**
 * Send automated absence/fee notification via Meta WhatsApp API
 */
export async function sendWhatsAppNotification(
  phone: string,
  message: string
): Promise<{ success: boolean; messageId?: string }> {
  if (process.env.DEV_MODE_OTP === "true" || !process.env.WHATSAPP_ACCESS_TOKEN) {
    console.log(`[WHATSAPP NOTIF DEV] To ${phone}: ${message}`);
    return { success: true, messageId: `dev-notif-${Date.now()}` };
  }

  const url = `${BASE_URL}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: phone.startsWith("+") ? phone : `+91${phone}`,
        type: "text",
        text: { body: message },
      }),
    });
    const data = await res.json();
    return { success: res.ok, messageId: data?.messages?.[0]?.id };
  } catch (err) {
    console.error("WhatsApp notification error:", err);
    return { success: false };
  }
}
