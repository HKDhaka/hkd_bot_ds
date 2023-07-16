import { DiscordRequest } from "../utils";

export default async function handle(data) {
    let endpoint = `guilds/${data.guild_id}/channels`

      let respuesta = await DiscordRequest(endpoint, {
        method: "POST",
        body: {
          name: "VC_TEMP_1",
          type: 2
        }
      })

    return respuesta;
}