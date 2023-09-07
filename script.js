// 1. Ask for account
// 2. If account does not exist, ask to create account
// 3. Ask what they want to do
// 4. Execute command: view, withdraw, deposit

// Account Object

const Account = require("./Account")
const CommandLine = require("./CommandLine")
const readline = require("readline")

async function main() {
	const accountName = await CommandLine.ask(
		"Which account would you like to access?"
	)
    const account = Account.find(accountName)
}

main()
