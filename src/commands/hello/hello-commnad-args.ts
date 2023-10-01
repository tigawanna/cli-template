import { printHelpers } from "@/utils/helpers/print-tools";
import { z } from "zod";


// const hello_args_enum = ["plural","yellow"] as const;
// const HelloArgsShema = z.array(z.enum(hello_args_enum));
// export type ThelloArgs = z.infer<typeof HelloArgsShema>;
// export async function hello_command_args(options: any) {
//   try {
//     const parsed_options = await HelloArgsShema.parse(options);
//     return parsed_options;
//   } catch (error: any) {
//     printHelpers.error("invalid arguments: " + error.message);
//     return
//     // process.exit(1);
//   }
// }



const HelloOptionsShema = z.object({
  yes:z.boolean().default(false),
  name: z.string().optional(),
});
export type ThelloOptions = z.infer<typeof HelloOptionsShema>;
export async function hello_command_options(options: any) {
  try {
    const parsed_options = await HelloOptionsShema.parse(options);
    return parsed_options;
  } catch (error: any) {
    printHelpers.error("invalid arguments: " + error.message);
    return
    // process.exit(1);
  }
}
