
import { Command } from "commander";
import { printHelpers } from "#/src/utils/helpers/print-tools";
import { hello_command_options } from "./hello-commnad-args";


const program = new Command();

export const helloCommand = program
  .command("hello")
  .description("sample command that says hello")
  .argument("[inputs...]", "arguments to say hello")
  .option('-y, --yes', 'Accept all defaults', false)
  .option('-n, --name', 'name to say hello')
  .action(async (args,options) => {
    const parsed_options=await hello_command_options(options);
    printHelpers.success("add command with options",`Hello ${parsed_options?.name}`)
  // printHelpers.debug("add command with options", options)
});



