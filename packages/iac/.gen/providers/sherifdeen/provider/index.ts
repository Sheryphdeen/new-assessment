// https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SherifdeenProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs#host SherifdeenProvider#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs#password SherifdeenProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs#username SherifdeenProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs#alias SherifdeenProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs sherifdeen}
*/
export class SherifdeenProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sherifdeen";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs sherifdeen} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SherifdeenProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SherifdeenProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sherifdeen',
      terraformGeneratorMetadata: {
        providerName: 'sherifdeen',
        providerVersion: '0.4.4'
      },
      terraformProviderSource: 'Sheryphdeen/sherifdeen'
    });
    this._host = config.host;
    this._password = config.password;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
