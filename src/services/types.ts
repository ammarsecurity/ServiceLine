//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface AcademicAchievementDto {
  /**
   *
   * - minLength: 1
   */
  academicAchievement: string;
  /**
   *
   * - Format: date-time
   */
  edCycleDateFrom?: string;
  /**
   *
   * - Format: date-time
   */
  edCycleDateTo?: string;
  /**
   *
   * - Format: date-time
   */
  mccDateFrom?: string;
  /**
   *
   * - Format: date-time
   */
  mccDateTo?: string;
  /**
   *
   * - Format: date-time
   */
  otcDateFrom?: string;
  /**
   *
   * - Format: date-time
   */
  otcDateTo?: string;
}

export interface AcademicAchievements {
  /**
   *
   * - minLength: 1
   */
  academicAchievement: string;
  /**
   *
   * - Format: date-time
   */
  createdAt?: string;
  /**
   *
   * - Format: date-time
   */
  edCycleDateFrom?: string;
  /**
   *
   * - Format: date-time
   */
  edCycleDateTo?: string;
  /**
   *
   * - Format: uuid
   */
  id?: string;
  /**
   *
   * - Format: date-time
   */
  mccDateFrom?: string;
  /**
   *
   * - Format: date-time
   */
  mccDateTo?: string;
  /**
   *
   * - Format: date-time
   */
  otcDateFrom?: string;
  /**
   *
   * - Format: date-time
   */
  otcDateTo?: string;
  personalInformation?: PersonalInformation;
  /**
   *
   * - Format: uuid
   */
  personalInformationId?: string;
  /**
   *
   * - Format: date-time
   */
  updatedAt?: string;
}

export interface Courses {
  /**
   *
   * - Format: date-time
   */
  courseDateFrom: string;
  /**
   *
   * - Format: date-time
   */
  courseDateTo: string;
  /**
   *
   * - minLength: 1
   */
  courseName: string;
  /**
   *
   * - Format: date-time
   */
  createdAt?: string;
  /**
   *
   * - Format: uuid
   */
  id?: string;
  personalInformation?: PersonalInformation;
  /**
   *
   * - Format: uuid
   */
  personalInformationId?: string;
  /**
   *
   * - Format: date-time
   */
  updatedAt?: string;
}

export interface CoursesDto {
  /**
   *
   * - Format: date-time
   */
  courseDateFrom: string;
  /**
   *
   * - Format: date-time
   */
  courseDateTo: string;
  /**
   *
   * - minLength: 1
   */
  courseName: string;
}

export interface GetAdminGetAllUsersQueryParams {
  /**
   *
   * - Format: int32
   */
  Page?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  email?: string;
  name?: string;
  role?: Roles;
}

export interface GetFormGetManyFormsQueryParams {
  /**
   *
   * - Format: int32
   */
  Page?: number;
  /**
   *
   * - Format: int32
   */
  PageSize?: number;
  /**
   *
   * - Format: date-time
   */
  birthDate?: string;
  /**
   *
   * - Format: int32
   */
  course?: number;
  /**
   *
   * - Format: date-time
   */
  dateOfJoiningBadr?: string;
  fullName?: string;
  notes?: string;
  rank?: string;
  /**
   *
   * - Format: int64
   */
  statisticalNumber?: number;
}

export interface LoginForm {
  password?: string;
  usernameOrEmail?: string;
}

export interface PersonalInformation {
  /**
   *
   * - Format: date-time
   */
  birthDate: string;
  /**
   *
   * - Format: int32
   */
  course: number;
  /**
   *
   * - Format: date-time
   */
  courseDate: string;
  /**
   *
   * - Format: date-time
   */
  dateOfJoiningBadr: string;
  /**
   *
   * - minLength: 1
   */
  fullName: string;
  /**
   *
   * - minLength: 1
   */
  rank: string;
  /**
   *
   * - Format: int64
   */
  statisticalNumber: number;
  academicAchievement?: AcademicAchievements;
  courses?: Courses[];
  /**
   *
   * - Format: date-time
   */
  createdAt?: string;
  /**
   *
   * - Format: uuid
   */
  id?: string;
  notes?: string;
  promotions?: Promotions[];
  /**
   *
   * - Format: date-time
   */
  updatedAt?: string;
}

export interface PersonalInformationForm {
  /**
   *
   * - Format: date-time
   */
  birthDate: string;
  /**
   *
   * - Format: int32
   */
  course: number;
  /**
   *
   * - Format: date-time
   */
  courseDate: string;
  /**
   *
   * - Format: date-time
   */
  dateOfJoiningBadr: string;
  /**
   *
   * - minLength: 1
   */
  fullName: string;
  /**
   *
   * - minLength: 1
   */
  rank: string;
  /**
   *
   * - Format: int64
   */
  statisticalNumber: number;
  academicAchievement?: AcademicAchievementDto;
  courses?: CoursesDto[];
  notes?: string;
  promotions?: PromotionsDto[];
}

export interface PersonalInformationGlobalResponse {
  data?: PersonalInformation;
  error?: boolean;
  message?: string;
}

export interface PersonalInformationListPaginationResponse {
  data?: PersonalInformation[];
  error?: boolean;
  message?: string;
  /**
   *
   * - Format: int32
   */
  page?: number;
  /**
   *
   * - Format: int32
   */
  pageSize?: number;
  /**
   *
   * - Format: int32
   */
  total?: number;
}

export interface Promotions {
  /**
   *
   * - Format: date-time
   */
  promotionDate: string;
  /**
   *
   * - minLength: 1
   */
  promotionName: string;
  /**
   *
   * - Format: date-time
   */
  createdAt?: string;
  /**
   *
   * - Format: uuid
   */
  id?: string;
  personalInformation?: PersonalInformation;
  /**
   *
   * - Format: uuid
   */
  personalInformationId?: string;
  /**
   *
   * - Format: date-time
   */
  updatedAt?: string;
}

export interface PromotionsDto {
  /**
   *
   * - Format: date-time
   */
  promotionDate: string;
  /**
   *
   * - minLength: 1
   */
  promotionName: string;
}

export interface RegisterUserForm {
  email?: string;
  name?: string;
  password?: string;
  role?: Roles;
}

/**
 *
 * - Format: int32
 */

export enum Roles {
  Admin = 0,
  DataEntry = 1,
  Viewer = 2,
}

export interface UserDto {
  email?: string;
  /**
   *
   * - Format: uuid
   */
  id?: string;
  name?: string;
  role?: string;
  token?: string;
}

export interface UserDtoGlobalResponse {
  data?: UserDto;
  error?: boolean;
  message?: string;
}

export interface UserDtoListPaginationResponse {
  data?: UserDto[];
  error?: boolean;
  message?: string;
  /**
   *
   * - Format: int32
   */
  page?: number;
  /**
   *
   * - Format: int32
   */
  pageSize?: number;
  /**
   *
   * - Format: int32
   */
  total?: number;
}
