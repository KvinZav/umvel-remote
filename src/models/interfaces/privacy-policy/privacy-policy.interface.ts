export interface PrivacyPolicyResponse {
  data: PrivacyPolicyData;
}

export interface PrivacyPolicyAttributes {
  attribute: PrivacyPolicyData;
}

export interface PrivacyPolicyData {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  info: string;
  items: PrivacyPolicyItems[];
}

export interface PrivacyPolicyItems {
  id: number;
  title: string;
  body: string;
}
