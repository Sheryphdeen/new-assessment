
Coffee Ordering Platform Documentation

Pre-requisites
Before getting started with the Coffee Ordering Platform, ensure that you have the following pre-requisites installed:

pnpm
Docker CLI
Node.js
Terraform
Axios
cdktf

Initialize Package
Open your terminal or Visual Studio Code.
Run the command "pnpm install" to install the required dependencies.

Running Hashicups API Locally
To execute the Coffee Ordering Platform, you need to run Hashicups API locally, which creates a PostgreSQL database and API for CRUD operations.

Open a new terminal.
Run the command "pnpm run app-start" to start the Hashicups API. Keep this terminal running.

Initial Setup
Create a new .env file with the following variables and their corresponding values:
HASHICUPS_USERNAME
HASHICUPS_PASSWORD
HASHICUPS_HOST
HASHICUPS_ORDERS_FOLDER_NAME

Once the Docker app is up and running and the .env file is created, run the following command to perform the initial setup:
"pnpm run setup"
The HASHICUPS_TOKEN will be set automatically. You can verify it with the command echo $HASHICUPS_TOKEN.

If the HASHICUPS_TOKEN is not set automatically, copy the token from the setup command output and set it manually:

On macOS, I use mac, run: export HASHICUPS_TOKEN={copied_token}

Terraform Setup
To generate the Terraform providers, run the following command:
"pnpm run get"

To create the Terraform state, run the following command:
"pnpm run deploy"

CRUD Setup
Create a New Order
Create a new folder with the format order-{number} under HASHICUPS_ORDERS_FOLDER_NAME.

Update an Order
Change the {number} of an existing order folder name: HASHICUPS_ORDERS_FOLDER_NAME/{order-{number}}.

Delete an Order
Delete the folder {order-{number}} under HASHICUPS_ORDERS_FOLDER_NAME.

Create a New Coffee
Create a new file with the format {id}.json under HASHICUPS_ORDERS_FOLDER_NAME/{order-{number}}.
The file should contain the following content:
{
  "quantity": {some_number}
}

Update a Coffee
Update the content of the file {id}.json under HASHICUPS_ORDERS_FOLDER_NAME/{order-{number}} with a new number value:
{
  "quantity": {some_number}
}

Delete a Coffee
Delete the file {id}.json under HASHICUPS_ORDERS_FOLDER_NAME/{order-{number}}.

Perform CRUD Operations
To perform CRUD operations, run the command:
"cdktf deploy --auto-approve"

Automatic CRUD Setup and Operation
The watch folder script detects changes and runs the deploy command automatically. Make sure to save your changes once all data setup is done.
Open a new terminal and run the command npm run watch-orders. Keep this terminal running.
I provisioned a custom provider named Sheryphdeen/sherifdeen because HashiCorp does not support M2 Mac.

Final Cleanup
Press Ctrl+C to exit the running Hashicups Docker