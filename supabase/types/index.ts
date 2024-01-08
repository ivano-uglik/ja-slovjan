interface Languages {
  id: number   /* primary key */;
  created_at: string;
  name: string;
  flag_url?: string;
};

interface Users {
  auth_user_id: string   /* primary key */;
  total_xp?: number;
  streak?: number;
};

interface Level_groups {
  id: number   /* primary key */;
  created_at: string;
  name: string;
  author_user?: string   /* foreign key to users.auth_user_id */;
  is_community?: boolean;
  foreign_language?: string;
  native_language?: string;
  language_id: number   /* foreign key to languages.id */;
  users?: Users;
  languages?: Languages;
};

interface Levels {
  id: number   /* primary key */;
  created_at: string;
  level_group_id: number   /* foreign key to level_groups.id */;
  order: number;
  description?: string;
  level_groups?: Level_groups;
};

interface Level_steps {
  id: number   /* primary key */;
  created_at: string;
  level_id: number   /* foreign key to levels.id */;
  order: number;
  component: string;
  levels?: Levels;
};

interface Completed_levels {
  id: number   /* primary key */;
  created_at: string;
  completed_level_id: number   /* foreign key to levels.id */;
  user_id: string   /* foreign key to users.auth_user_id */;
  levels?: Levels;
  users?: Users;
};

interface Text_completion_params {
  id: number   /* primary key */;
  created_at: string;
  level_step_id: number   /* foreign key to level_steps.id */;
  title: string;
  title_translated: string;
  level_steps?: Level_steps;
};

interface Translate_sentence_params {
  id: number   /* primary key */;
  created_at: string;
  level_step_id?: number   /* foreign key to level_steps.id */;
  title: string;
  level_steps?: Level_steps;
};

interface Guess_latin_letter_params {
  id: number   /* primary key */;
  created_at: string;
  level_step_id: number   /* foreign key to level_steps.id */;
  latin_letter: string;
  level_steps?: Level_steps;
};

interface Translate_sentence_params_options {
  id: number   /* primary key */;
  created_at: string;
  text: string;
  is_correct: boolean;
  translate_sentence_params_id: number   /* foreign key to translate_sentence_params.id */;
  translate_sentence_params?: Translate_sentence_params;
};

interface Guess_cyrillic_letter_params {
  id: number   /* primary key */;
  created_at: string;
  level_step_id: number   /* foreign key to level_steps.id */;
  cyrillic_letter: string;
  level_steps?: Level_steps;
};

interface Guess_latin_letter_params_options {
  id: number   /* primary key */;
  created_at: string;
  text: string;
  is_correct: boolean;
  guess_latin_letter_params_id: number   /* foreign key to guess_latin_letter_params.id */;
  guess_latin_letter_params?: Guess_latin_letter_params;
};

interface Guess_cyrillic_letter_params_options {
  id: number   /* primary key */;
  created_at: string;
  text: string;
  is_correct: boolean;
  guess_cyrillic_letter_params_id: number   /* foreign key to guess_cyrillic_letter_params.id */;
  guess_cyrillic_letter_params?: Guess_cyrillic_letter_params;
};

interface Image_select_params {
  id: number   /* primary key */;
  created_at: string;
  level_step_id: number   /* foreign key to level_steps.id */;
  word: string;
  level_steps?: Level_steps;
};

interface Image_select_params_options {
  id: number   /* primary key */;
  created_at: string;
  imageURL: string;
  is_correct: boolean;
  image_select_params_id: number   /* foreign key to image_select_params.id */;
  image_select_params?: Image_select_params;
};

export type {
  Completed_levels,
  Guess_cyrillic_letter_params,
  Guess_cyrillic_letter_params_options,
  Guess_latin_letter_params,
  Guess_latin_letter_params_options,
  Image_select_params,
  Image_select_params_options,
  Languages,
  Level_groups,
  Level_steps,
  Levels,
  Text_completion_params,
  Translate_sentence_params,
  Translate_sentence_params_options,
  Users
}

