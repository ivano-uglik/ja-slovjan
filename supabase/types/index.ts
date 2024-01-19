interface ErrorType {
  message: string;
  details?: any;
  error: any;
};

interface Language {
  id?: number;   /* primary key */
  created_at?: string;
  name: string;
  flag_url?: string;
}

interface User {
  auth_user_id?: string;   /* primary key */
  total_xp?: number;
  streak?: number;
}

interface Level_group {
  id?: number;   /* primary key */
  created_at?: string;
  name: string;
  author_user?: string;   /* foreign key to users.auth_user_id */
  is_community?: boolean;
  foreign_language?: string;
  native_language?: string;
  language_id?: number;   /* foreign key to languages.id */
  user?: User;
  language?: Language;
}

interface Level {
  id?: number;   /* primary key */
  created_at?: string;
  level_group_id?: number;   /* foreign key to level_groups.id */
  order: number;
  description?: string;
  level_group?: Level_group;
}

interface Level_step {
  id?: number;   /* primary key */
  created_at?: string;
  level_id?: number;   /* foreign key to levels.id */
  order: number;
  component: string;
  level?: Level;
}

interface Completed_level {
  id?: number;   /* primary key */
  created_at?: string;
  completed_level_id?: number;   /* foreign key to levels.id */
  user_id?: string;   /* foreign key to users.auth_user_id */
  level?: Level;
  user?: User;
}

interface Text_completion_param {
  id?: number;   /* primary key */
  created_at?: string;
  level_step_id?: number;   /* foreign key to level_steps.id */
  title: string;
  title_translated: string;
  level_step?: Level_step;
}

interface Translate_sentence_param {
  id?: number;   /* primary key */
  created_at?: string;
  level_step_id?: number;   /* foreign key to level_steps.id */
  title: string;
  level_step?: Level_step;
}

interface Guess_latin_letter_param {
  id?: number;   /* primary key */
  created_at?: string;
  level_step_id?: number;   /* foreign key to level_steps.id */
  latin_letter: string;
  level_step?: Level_step;
}

interface Translate_sentence_param_option {
  id?: number;   /* primary key */
  created_at?: string;
  text: string;
  is_correct: boolean;
  translate_sentence_params_id?: number;   /* foreign key to translate_sentence_params.id */
  translate_sentence_param?: Translate_sentence_param;
}

interface Guess_cyrillic_letter_param {
  id?: number;   /* primary key */
  created_at?: string;
  level_step_id?: number;   /* foreign key to level_steps.id */
  cyrillic_letter: string;
  level_step?: Level_step;
}

interface Guess_latin_letter_param_option {
  id?: number;   /* primary key */
  created_at?: string;
  text: string;
  is_correct: boolean;
  guess_latin_letter_params_id?: number;   /* foreign key to guess_latin_letter_params.id */
  guess_latin_letter_param?: Guess_latin_letter_param;
}

interface Guess_cyrillic_letter_param_option {
  id?: number;   /* primary key */
  created_at?: string;
  text: string;
  is_correct: boolean;
  guess_cyrillic_letter_params_id?: number;   /* foreign key to guess_cyrillic_letter_params.id */
  guess_cyrillic_letter_param?: Guess_cyrillic_letter_param;
}

interface Image_select_param {
  id?: number;   /* primary key */
  created_at?: string;
  level_step_id?: number;   /* foreign key to level_steps.id */
  word: string;
  level_step?: Level_step;
}

interface Image_select_param_option {
  id?: number;   /* primary key */
  created_at?: string;
  imageURL: string;
  is_correct: boolean;
  image_select_params_id?: number;   /* foreign key to image_select_params.id */
  image_select_param?: Image_select_param;
}

export type {
  Completed_level,
  Guess_cyrillic_letter_param,
  Guess_cyrillic_letter_param_option,
  Guess_latin_letter_param,
  Guess_latin_letter_param_option,
  Image_select_param,
  Image_select_param_option,
  Language,
  Level_group,
  Level_step,
  Level,
  Text_completion_param,
  Translate_sentence_param,
  Translate_sentence_param_option,
  User,
  ErrorType,
}
