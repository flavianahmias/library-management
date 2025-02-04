export interface UserDTO {
  id: number;
  name: string;
  email: string;
  cpf?: string;
  rg?: string;
  gender?: string;
  birthdate?: string;
  photoUrl?: string;
  isActive: boolean;
  role: number;
  loginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
