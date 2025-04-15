// Generated by scripts/lib/code-synthesizer.mjs

// - - - - - - - - - - - - - - - - - - - -
//            @method {get}
// - - - - - - - - - - - - - - - - - - - -
/*!
 * ESI endpoint: get:/characters/{character_id}/mail/
 */
/**
 * recipient_type string
 */
type GetCharactersCharacterIdMailRecipientType = "alliance" | "character" | "corporation" | "mailing_list";
/**
 * Recipients of the mail
 *
 * @minItems 0
 * @maxItems 52
 */
type GetCharactersCharacterIdMailRecipients = GetCharactersCharacterIdMailRecipient[];
/**
 * 200 ok array
 *
 * @maxItems 50
 */
type GetCharactersCharacterIdMailOk = GetCharactersCharacterIdMail_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMail_200Ok {
  /**
   * From whom the mail was sent
   */
  from?: number;
  /**
   * is_read boolean
   */
  is_read?: boolean;
  /**
   * labels array
   *
   * @maxItems 25
   */
  labels?: number[];
  /**
   * mail_id integer
   */
  mail_id?: number;
  recipients?: GetCharactersCharacterIdMailRecipients;
  /**
   * Mail subject
   */
  subject?: string;
  /**
   * When the mail was sent
   */
  timestamp?: string;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface GetCharactersCharacterIdMailRecipient {
  /**
   * recipient_id integer
   */
  recipient_id: number;
  recipient_type: GetCharactersCharacterIdMailRecipientType;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/mail/labels/
 */
/**
 * color string
 */
type GetCharactersCharacterIdMailLabelsColor =
  | "#0000fe"
  | "#006634"
  | "#0099ff"
  | "#00ff33"
  | "#01ffff"
  | "#349800"
  | "#660066"
  | "#666666"
  | "#999999"
  | "#99ffff"
  | "#9a0000"
  | "#ccff9a"
  | "#e6e6e6"
  | "#fe0000"
  | "#ff6600"
  | "#ffff01"
  | "#ffffcd"
  | "#ffffff";
/**
 * labels array
 *
 * @maxItems 30
 */
type GetCharactersCharacterIdMailLabelsLabels = GetCharactersCharacterIdMailLabelsLabel[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailLabelsOk {
  labels?: GetCharactersCharacterIdMailLabelsLabels;
  /**
   * total_unread_count integer
   */
  total_unread_count?: number;
  [k: string]: unknown | undefined;
}
/**
 * label object
 */
interface GetCharactersCharacterIdMailLabelsLabel {
  color?: GetCharactersCharacterIdMailLabelsColor;
  /**
   * label_id integer
   */
  label_id?: number;
  /**
   * name string
   */
  name?: string;
  /**
   * unread_count integer
   */
  unread_count?: number;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/mail/lists/
 */
/**
 * 200 ok array
 *
 * @maxItems 1000
 */
type GetCharactersCharacterIdMailListsOk = GetCharactersCharacterIdMailLists_200Ok[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailLists_200Ok {
  /**
   * Mailing list ID
   */
  mailing_list_id: number;
  /**
   * name string
   */
  name: string;
  [k: string]: unknown | undefined;
}

/*!
 * ESI endpoint: get:/characters/{character_id}/mail/{mail_id}/
 */
/**
 * recipient_type string
 */
type GetCharactersCharacterIdMailMailIdRecipientType = "alliance" | "character" | "corporation" | "mailing_list";
/**
 * Recipients of the mail
 *
 * @minItems 0
 * @maxItems 52
 */
type GetCharactersCharacterIdMailMailIdRecipients = GetCharactersCharacterIdMailMailIdRecipient[];

/**
 * 200 ok object
 */
interface GetCharactersCharacterIdMailMailIdOk {
  /**
   * Mail's body
   */
  body?: string;
  /**
   * From whom the mail was sent
   */
  from?: number;
  /**
   * Labels attached to the mail
   *
   * @maxItems 25
   */
  labels?: number[];
  /**
   * Whether the mail is flagged as read
   */
  read?: boolean;
  recipients?: GetCharactersCharacterIdMailMailIdRecipients;
  /**
   * Mail subject
   */
  subject?: string;
  /**
   * When the mail was sent
   */
  timestamp?: string;
  [k: string]: unknown | undefined;
}
/**
 * recipient object
 */
interface GetCharactersCharacterIdMailMailIdRecipient {
  /**
   * recipient_id integer
   */
  recipient_id: number;
  recipient_type: GetCharactersCharacterIdMailMailIdRecipientType;
  [k: string]: unknown | undefined;
}

// - - - - - - - - - - - - - - - - - - - -
//            @method {post}
// - - - - - - - - - - - - - - - - - - - -
/*!
 * ESI endpoint: post:/characters/{character_id}/mail/
 */
/**
 * Mail ID
 */
type PostCharactersCharacterIdMailCreated = number;

/*!
 * ESI endpoint: post:/characters/{character_id}/mail/labels/
 */
/**
 * Label ID
 */
type PostCharactersCharacterIdMailLabelsCreated = number;
