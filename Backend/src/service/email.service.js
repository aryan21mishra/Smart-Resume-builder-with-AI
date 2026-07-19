import { resend } from "../config/resend.confing.js";

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  const { data, error } = await resend.emails.send({
    from: `Ai Resume <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });

  if (error) {
    return console.error("email send error", error);
  }
  return data

};

export async function sendRegistrationEmail(username, email) {
  const subject = "Welcome to AI Resume — Let's Build Something Great";

  const text = `Hi ${username}, welcome to AI Resume! Your journey to a standout resume starts now.`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to AI Resume</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1400 0%,#0a0a0a 100%);border:1px solid #c9a84c33;border-radius:16px 16px 0 0;padding:48px 48px 32px;text-align:center;">
              <div style="display:inline-block;background:linear-gradient(135deg,#c9a84c,#f5d98b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:13px;font-family:'Courier New',monospace;letter-spacing:4px;text-transform:uppercase;margin-bottom:24px;">
                ✦ AI RESUME ✦
              </div>
              <h1 style="margin:0;font-size:42px;font-weight:400;color:#f5f0e8;line-height:1.2;letter-spacing:-1px;">
                Welcome,<br/>
                <span style="background:linear-gradient(135deg,#c9a84c,#f5d98b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
                  ${username}.
                </span>
              </h1>
            </td>
          </tr>

          <!-- Gold Divider -->
          <tr>
            <td style="background:#0f0d08;border-left:1px solid #c9a84c33;border-right:1px solid #c9a84c33;padding:0 48px;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0f0d08;border-left:1px solid #c9a84c33;border-right:1px solid #c9a84c33;padding:40px 48px;">
              <p style="margin:0 0 16px;font-size:17px;color:#a89880;line-height:1.8;">
                Your account is live. You're now one step closer to a resume that doesn't just get read — it gets remembered.
              </p>
              <p style="margin:0 0 32px;font-size:17px;color:#a89880;line-height:1.8;">
                Use AI-powered feedback, premium templates, and smart suggestions to craft something truly yours.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#c9a84c,#a07828);border-radius:8px;padding:1px;">
                    <a href="${process.env.CLIENT_URL || "#"}"
                       style="display:block;padding:16px 40px;background:linear-gradient(135deg,#c9a84c,#a07828);border-radius:7px;font-family:'Courier New',monospace;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#0a0a0a;text-decoration:none;">
                      Build My Resume →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Feature Pills -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="32%" style="padding:4px;">
                    <div style="background:#1a1600;border:1px solid #c9a84c22;border-radius:8px;padding:16px;text-align:center;">
                      <div style="font-size:20px;margin-bottom:6px;">✦</div>
                      <div style="font-size:11px;color:#c9a84c;letter-spacing:2px;text-transform:uppercase;font-family:'Courier New',monospace;">AI Feedback</div>
                    </div>
                  </td>
                  <td width="32%" style="padding:4px;">
                    <div style="background:#1a1600;border:1px solid #c9a84c22;border-radius:8px;padding:16px;text-align:center;">
                      <div style="font-size:20px;margin-bottom:6px;">◈</div>
                      <div style="font-size:11px;color:#c9a84c;letter-spacing:2px;text-transform:uppercase;font-family:'Courier New',monospace;">6 Templates</div>
                    </div>
                  </td>
                  <td width="32%" style="padding:4px;">
                    <div style="background:#1a1600;border:1px solid #c9a84c22;border-radius:8px;padding:16px;text-align:center;">
                      <div style="font-size:20px;margin-bottom:6px;">⬡</div>
                      <div style="font-size:11px;color:#c9a84c;letter-spacing:2px;text-transform:uppercase;font-family:'Courier New',monospace;">PDF Export</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#080700;border:1px solid #c9a84c33;border-top:none;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#4a4030;font-family:'Courier New',monospace;letter-spacing:1px;">
                © ${new Date().getFullYear()} AI RESUME · You're receiving this because you just registered.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  await sendEmail(email, subject, text, html);
}

export async function sendOTPMail(email, otp) {
  const subject = "Your Verification Code — AI Resume";

  const text = `Your OTP is ${otp}. It expires in 10 minutes. Do not share it with anyone.`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your OTP</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1400 0%,#0a0a0a 100%);border:1px solid #c9a84c33;border-radius:16px 16px 0 0;padding:48px 48px 32px;text-align:center;">
              <div style="font-size:13px;font-family:'Courier New',monospace;letter-spacing:4px;text-transform:uppercase;color:#c9a84c;margin-bottom:24px;">
                ✦ AI RESUME ✦
              </div>
              <h1 style="margin:0;font-size:36px;font-weight:400;color:#f5f0e8;letter-spacing:-1px;">
                Verification<br/>
                <span style="background:linear-gradient(135deg,#c9a84c,#f5d98b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
                  Required.
                </span>
              </h1>
            </td>
          </tr>

          <!-- Gold Divider -->
          <tr>
            <td style="background:#0f0d08;border-left:1px solid #c9a84c33;border-right:1px solid #c9a84c33;padding:0 48px;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0f0d08;border-left:1px solid #c9a84c33;border-right:1px solid #c9a84c33;padding:40px 48px;text-align:center;">
              <p style="margin:0 0 32px;font-size:16px;color:#a89880;line-height:1.8;text-align:left;">
                Use the code below to complete your verification. This code is valid for <span style="color:#c9a84c;">10 minutes</span> only.
              </p>

              <!-- OTP Box -->
              <div style="background:#1a1600;border:1px solid #c9a84c44;border-radius:12px;padding:32px;margin-bottom:32px;">
                <div style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:4px;color:#4a4030;text-transform:uppercase;margin-bottom:16px;">
                  One Time Password
                </div>
                <div style="font-family:'Courier New',monospace;font-size:48px;font-weight:700;letter-spacing:12px;background:linear-gradient(135deg,#c9a84c,#f5d98b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
                  ${otp}
                </div>
              </div>

              <!-- Warning -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1a0a00;border:1px solid #c9a84c22;border-left:3px solid #c9a84c;border-radius:0 8px 8px 0;padding:14px 18px;text-align:left;">
                    <span style="font-size:12px;color:#a89880;font-family:'Courier New',monospace;letter-spacing:1px;">
                      ⚠ Never share this code with anyone. AI Resume will never ask for your OTP.
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#080700;border:1px solid #c9a84c33;border-top:none;border-radius:0 0 16px 16px;padding:24px 48px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#4a4030;font-family:'Courier New',monospace;letter-spacing:1px;">
                © ${new Date().getFullYear()} AI RESUME · If you didn't request this, ignore this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  await sendEmail(email, subject, text, html);
}
