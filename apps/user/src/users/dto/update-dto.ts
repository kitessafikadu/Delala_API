export class UpdateUserDto {
  fullName?: string;
  phoneNumber?: string;
  userStatus?: 'ACTIVE' | 'INACTIVE' | 'DEACTIVATED';
  address?: string;
  profilePicture?: string;
}
