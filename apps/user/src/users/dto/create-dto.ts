export class CreateUserDto {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  userType: 'MERCHANT' | 'USER' | 'ADMIN';
  userStatus: 'ACTIVE' | 'INACTIVE' | 'DEACTIVATED';
  address?: string;
  profilePicture?: string;
}
