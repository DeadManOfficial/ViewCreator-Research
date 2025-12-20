/**
 * ViewCreator.AI - Billing Service
 * Handles all billing, subscription, and payment API calls
 */

import { api } from "@/lib/api";
import type {
  Subscription,
  Invoice,
  CreditTransaction,
  UserPlan,
} from "../types/index";

export const billingService = {
  /**
   * Get current subscription
   */
  async getSubscription(): Promise<Subscription> {
    return api.get<Subscription>("/billing/subscription");
  },

  /**
   * Update subscription plan
   */
  async updateSubscription(plan: UserPlan): Promise<Subscription> {
    return api.post<Subscription>("/billing/subscription", { plan });
  },

  /**
   * Cancel subscription
   */
  async cancelSubscription(): Promise<void> {
    await api.post("/billing/subscription/cancel");
  },

  /**
   * Pause subscription
   */
  async pauseSubscription(months: number): Promise<Subscription> {
    return api.post<Subscription>("/billing/subscription/pause", { months });
  },

  /**
   * Resume subscription
   */
  async resumeSubscription(): Promise<Subscription> {
    return api.post<Subscription>("/billing/subscription/resume");
  },

  /**
   * Get billing history
   */
  async getBillingHistory(limit?: number): Promise<Invoice[]> {
    return api.get("/billing/history", { params: { limit } });
  },

  /**
   * Get specific invoice
   */
  async getInvoice(invoiceId: string): Promise<Invoice> {
    return api.get<Invoice>(`/billing/invoices/${invoiceId}`);
  },

  /**
   * Download invoice PDF
   */
  async downloadInvoice(invoiceId: string): Promise<Blob> {
    return api.get(`/billing/invoices/${invoiceId}/download`);
  },

  /**
   * Get credit balance
   */
  async getCredits(): Promise<{ balance: number; used: number; available: number }> {
    return api.get("/billing/credits");
  },

  /**
   * Get credit transactions
   */
  async getCreditTransactions(limit?: number): Promise<CreditTransaction[]> {
    return api.get("/billing/credit-transactions", { params: { limit } });
  },

  /**
   * Purchase additional credits
   */
  async purchaseCredits(amount: number): Promise<{ transactionId: string }> {
    return api.post("/billing/purchase-credits", { amount });
  },

  /**
   * Get credit packages
   */
  async getCreditPackages(): Promise<any[]> {
    return api.get("/billing/credit-packages");
  },

  /**
   * Get pricing plans
   */
  async getPricingPlans(): Promise<any[]> {
    return api.get("/billing/plans");
  },

  /**
   * Get plan details
   */
  async getPlanDetails(plan: UserPlan): Promise<any> {
    return api.get(`/billing/plans/${plan}`);
  },

  /**
   * Get payment methods
   */
  async getPaymentMethods(): Promise<any[]> {
    return api.get("/billing/payment-methods");
  },

  /**
   * Add payment method
   */
  async addPaymentMethod(paymentMethodId: string): Promise<any> {
    return api.post("/billing/payment-methods", { paymentMethodId });
  },

  /**
   * Update default payment method
   */
  async setDefaultPaymentMethod(paymentMethodId: string): Promise<void> {
    await api.post("/billing/payment-methods/default", { paymentMethodId });
  },

  /**
   * Delete payment method
   */
  async deletePaymentMethod(paymentMethodId: string): Promise<void> {
    await api.delete(`/billing/payment-methods/${paymentMethodId}`);
  },

  /**
   * Get billing information
   */
  async getBillingInfo(): Promise<any> {
    return api.get("/billing/info");
  },

  /**
   * Update billing information
   */
  async updateBillingInfo(data: any): Promise<any> {
    return api.put("/billing/info", data);
  },

  /**
   * Get tax information
   */
  async getTaxInfo(): Promise<any> {
    return api.get("/billing/tax");
  },

  /**
   * Update tax information
   */
  async updateTaxInfo(data: any): Promise<any> {
    return api.put("/billing/tax", data);
  },

  /**
   * Get usage statistics
   */
  async getUsageStats(): Promise<any> {
    return api.get("/billing/usage");
  },

  /**
   * Get cost breakdown
   */
  async getCostBreakdown(): Promise<any> {
    return api.get("/billing/cost-breakdown");
  },

  /**
   * Get upcoming charges
   */
  async getUpcomingCharges(): Promise<any[]> {
    return api.get("/billing/upcoming-charges");
  },

  /**
   * Apply coupon code
   */
  async applyCoupon(code: string): Promise<any> {
    return api.post("/billing/coupons/apply", { code });
  },

  /**
   * Get available coupons
   */
  async getAvailableCoupons(): Promise<any[]> {
    return api.get("/billing/coupons");
  },

  /**
   * Get referral information
   */
  async getReferralInfo(): Promise<any> {
    return api.get("/billing/referrals");
  },

  /**
   * Get referral earnings
   */
  async getReferralEarnings(): Promise<any> {
    return api.get("/billing/referrals/earnings");
  },

  /**
   * Generate referral link
   */
  async generateReferralLink(): Promise<{ link: string }> {
    return api.post("/billing/referrals/generate-link");
  },

  /**
   * Get invoice settings
   */
  async getInvoiceSettings(): Promise<any> {
    return api.get("/billing/invoice-settings");
  },

  /**
   * Update invoice settings
   */
  async updateInvoiceSettings(data: any): Promise<any> {
    return api.put("/billing/invoice-settings", data);
  },

  /**
   * Request refund
   */
  async requestRefund(invoiceId: string, reason: string): Promise<any> {
    return api.post("/billing/refunds", { invoiceId, reason });
  },

  /**
   * Get refund status
   */
  async getRefundStatus(refundId: string): Promise<any> {
    return api.get(`/billing/refunds/${refundId}`);
  },

  /**
   * Get billing support
   */
  async getBillingSupport(): Promise<any> {
    return api.get("/billing/support");
  },

  /**
   * Create Stripe checkout session
   */
  async createCheckoutSession(plan: UserPlan): Promise<{ sessionId: string; url: string }> {
    return api.post("/billing/checkout", { plan });
  },

  /**
   * Get Stripe customer portal URL
   */
  async getCustomerPortalUrl(): Promise<{ url: string }> {
    return api.post("/billing/customer-portal");
  },
};
