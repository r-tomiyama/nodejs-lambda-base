import { ParsedUrlQuery } from 'querystring'

export interface RequestBody {
  token: string
  team_id: string
  api_app_id: string
  type: string
  event_id: string
  event_time: number
  event: {
    type: 'message' | 'reaction_added' | 'app_home_opened'
    user: string
    username: string
  }
  authed_users: string[]
  isBase64Encoded: boolean
  challenge?: string // for verification
}

export interface MessageRequest extends RequestBody {
  event: RequestBody['event'] & {
    type: 'message'
    subtype?: string
    client_msg_id: string
    text: string
    ts: string
    channel_type: string
    channel: string
    event_ts: string
    thread_ts?: string
    bot_id?: string
  }
}

export interface ReactionRequest extends RequestBody {
  event: RequestBody['event'] & {
    type: 'reaction_added'
    item: {
      type: string
      channel: string
      ts: string
    }
    reaction: string
    event_ts: string
  }
}

export interface SlashCommandQuery extends ParsedUrlQuery {
  token: string
  team_id: string
  team_domain: string
  channel_id: string
  channel_name: string
  user_id: string
  user_name: string
  command: string
  text: string
  response_url: string
  trigger_id: string
}
