export interface PrivacyPolicyResponse {
  data: PrivacyPolicyData;
}

export interface PrivacyPolicyData {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  info: string;
  items: PrivacyPolicyItems[];
  footer: null;
}

export interface PrivacyPolicyItems {
  id: number;
  title: string;
  subtitle: string;
}
