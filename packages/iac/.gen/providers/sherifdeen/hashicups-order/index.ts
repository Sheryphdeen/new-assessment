// https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HashicupsOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order#id HashicupsOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order#last_updated HashicupsOrder#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order#items HashicupsOrder#items}
  */
  readonly items: HashicupsOrderItems[] | cdktf.IResolvable;
}
export interface HashicupsOrderItemsCoffee {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order#id HashicupsOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function hashicupsOrderItemsCoffeeToTerraform(struct?: HashicupsOrderItemsCoffeeOutputReference | HashicupsOrderItemsCoffee): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}

export class HashicupsOrderItemsCoffeeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HashicupsOrderItemsCoffee | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HashicupsOrderItemsCoffee | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // teaser - computed: true, optional: false, required: false
  public get teaser() {
    return this.getStringAttribute('teaser');
  }
}
export interface HashicupsOrderItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order#quantity HashicupsOrder#quantity}
  */
  readonly quantity: number;
  /**
  * coffee block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order#coffee HashicupsOrder#coffee}
  */
  readonly coffee: HashicupsOrderItemsCoffee;
}

export function hashicupsOrderItemsToTerraform(struct?: HashicupsOrderItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity: cdktf.numberToTerraform(struct!.quantity),
    coffee: hashicupsOrderItemsCoffeeToTerraform(struct!.coffee),
  }
}

export class HashicupsOrderItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HashicupsOrderItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._coffee?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coffee = this._coffee?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HashicupsOrderItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantity = undefined;
      this._coffee.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantity = value.quantity;
      this._coffee.internalValue = value.coffee;
    }
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // coffee - computed: false, optional: false, required: true
  private _coffee = new HashicupsOrderItemsCoffeeOutputReference(this, "coffee");
  public get coffee() {
    return this._coffee;
  }
  public putCoffee(value: HashicupsOrderItemsCoffee) {
    this._coffee.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coffeeInput() {
    return this._coffee.internalValue;
  }
}

export class HashicupsOrderItemsList extends cdktf.ComplexList {
  public internalValue? : HashicupsOrderItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HashicupsOrderItemsOutputReference {
    return new HashicupsOrderItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order hashicups_order}
*/
export class HashicupsOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hashicups_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sheryphdeen/sherifdeen/0.4.4/docs/resources/hashicups_order hashicups_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HashicupsOrderConfig
  */
  public constructor(scope: Construct, id: string, config: HashicupsOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'hashicups_order',
      terraformGeneratorMetadata: {
        providerName: 'sherifdeen',
        providerVersion: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._items.internalValue = config.items;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // items - computed: false, optional: false, required: true
  private _items = new HashicupsOrderItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: HashicupsOrderItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      items: cdktf.listMapper(hashicupsOrderItemsToTerraform, true)(this._items.internalValue),
    };
  }
}
