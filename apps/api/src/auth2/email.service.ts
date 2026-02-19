// apps/api/src/auth2/email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendOtpEmail(to: string, otp: string) {
    const mailOptions = {
      from: `"CivicLoop System" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: 'Your CivicLoop Login Verification Code',
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #18181b; text-align: center;">CivicLoop Authentication</h2>
          <p style="color: #52525b; font-size: 16px;">Hello,</p>
          <p style="color: #52525b; font-size: 16px;">Your verification code to access the portal is:</p>
          <div style="background-color: #f4f4f5; padding: 16px; border-radius: 8px; text-align: center; margin: 24px 0;">
            <h1 style="letter-spacing: 8px; color: #2563eb; margin: 0; font-size: 32px;">${otp}</h1>
          </div>
          <p style="color: #71717a; font-size: 14px; text-align: center;">This code will expire in 5 minutes. Do not share it with anyone.</p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}