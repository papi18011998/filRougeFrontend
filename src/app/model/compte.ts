export interface Compte {
  id?: number;
  numeroCompte?: string;
  solde: number;
  createdAt?: any;
  partenaire: {
    ninea?: string;
    rc?: string;
  };
  user: {
    prenom?: string;
    nom?: string;
    email?: string;
    isActive?: boolean;
    tel?: string;
  };
}
