import { AdapterUser } from "next-auth/adapters";

// Étend le type AdapterUser pour inclure les champs personnalisés
export interface ExtendedUser extends AdapterUser {
  id: string;
  bio?: string;
  projet?: string;
  haveCompetence?: string[];
  askCompetence?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  ownSite?: string;
  skill1?: string;
  skill2?: string;
  skill3?: string;
  resetPasswordToken?: string;
  resetPasswordTokenExpiry?: Date;
}
