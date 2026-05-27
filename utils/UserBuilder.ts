export interface User {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  zipCode?: string;
}

export class UserBuilder {
  private user: User = {
    username: 'standard_user',
    password: 'secret_sauce',
  };

  withUsername(username: string): this {
    this.user.username = username;
    return this;
  }

  withPassword(password: string): this {
    this.user.password = password;
    return this;
  }

  withFirstName(firstName: string): this {
    this.user.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): this {
    this.user.lastName = lastName;
    return this;
  }

  withZipCode(zipCode: string): this {
    this.user.zipCode = zipCode;
    return this;
  }

  asLockedOut(): this {
    this.user.username = 'locked_out_user';
    return this;
  }

  asProblemUser(): this {
    this.user.username = 'problem_user';
    return this;
  }

  build(): User {
    return { ...this.user };
  }
}
