import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { IUser } from '../models/User';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendVerificationEmail = async (user: IUser, verificationToken: string) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Verify Your Email - Bald Eagle Tactical',
    html: `
      <h1>Welcome to Bald Eagle Tactical</h1>
      <p>Please verify your email address by clicking the link below:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
      <p>If you did not create this account, please ignore this email.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (user: IUser, resetToken: string) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Password Reset Request - Bald Eagle Tactical',
    html: `
      <h1>Password Reset Request</h1>
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
      <p>If you did not request this reset, please ignore this email.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const generateVerificationToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const generatePasswordResetToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
}; 