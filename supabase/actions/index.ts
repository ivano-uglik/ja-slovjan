import { Language, ErrorType, Completed_level, Guess_cyrillic_letter_param, Guess_cyrillic_letter_param_option, Guess_latin_letter_param, Guess_latin_letter_param_option, Image_select_param, Image_select_param_option, Level_group, Level_step, Text_completion_param, Translate_sentence_param, Translate_sentence_param_option, User, Level } from "../types";
import supabase from "../supabase.config";

const handleError = (error: any): ErrorType => {
  console.error('Supabase error:', error);
  return { message: 'An error occurred with Supabase.', error };
};

// TO-DO: rewrite all functions to return data on insert, upsert or delete using the select() function

/* --------------- CRUD functions for Language table --------------- */

export const createLanguage = async (languageData: Language): Promise<Language | ErrorType> => {
  try {

    const { data, error } = await supabase
      .from('languages')
      .insert(languageData)
      .select()
      .single();
    if (error) throw error;
    return data!;

  } catch (error) {
    return handleError(error);
  }
};

export const getLanguage = async (languageId: number): Promise<Language | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .select('*')
      .eq('id', languageId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLanguage = async (languageId: number, updates: Partial<Language>): Promise<Language | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .update(updates)
      .eq('id', languageId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLanguage = async (languageId: number): Promise<Language | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .delete()
      .eq('id', languageId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLanguages = async (): Promise<Language[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Level_group table

export const createLevelGroup = async (groupData: Level_group): Promise<Level_group | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .insert(groupData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevelGroup = async (groupId: number): Promise<Level_group | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .select('*')
      .eq('id', groupId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLevelGroup = async (groupId: number, updates: Partial<Level_group>): Promise<Level_group | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .update(updates)
      .eq('id', groupId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevelGroup = async (groupId: number): Promise<Level_group | ErrorType> => {
  try {
    const { data, error, status } = await supabase
      .from('level_groups')
      .delete()
      .eq('id', groupId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevelGroups = async (): Promise<Level_group[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Level table

export const createLevel = async (levelData: Level): Promise<Level | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .insert(levelData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevel = async (levelId: number): Promise<Level | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .select('*')
      .eq('id', levelId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLevel = async (levelId: number, updates: Partial<Level>): Promise<Level | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .update(updates)
      .eq('id', levelId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevel = async (levelId: number): Promise<void | ErrorType> => {
  try {
    const { error, data } = await supabase
      .from('levels')
      .delete()
      .eq('id', levelId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevels = async (): Promise<Level[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for level_steps table

export const createLevelStep = async (stepData: Level_step): Promise<Level_step | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .insert(stepData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevelStep = async (stepId: number): Promise<Level_step | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .select('*')
      .eq('id', stepId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLevelStep = async (stepId: number, updates: Partial<Level_step>): Promise<Level_step | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .update(updates)
      .eq('id', stepId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevelStep = async (stepId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .delete()
      .eq('id', stepId)
      .select()
      .single()
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevelSteps = async (): Promise<Level_step[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for completed_levels table

export const createCompletedLevel = async (completedData: Completed_level): Promise<Completed_level | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .insert(completedData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getCompletedLevel = async (completedId: number): Promise<Completed_level | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .select('*')
      .eq('id', completedId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateCompletedLevel = async (completedId: number, updates: Partial<Completed_level>): Promise<Completed_level | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .update(updates)
      .eq('id', completedId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteCompletedLevel = async (completedId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .delete()
      .eq('id', completedId)
      .select()
      .single()
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllCompletedLevels = async (): Promise<Completed_level[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for text_completion_params table

export const createTextCompletionParam = async (paramData: Text_completion_param): Promise<Text_completion_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .insert(paramData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getTextCompletionParam = async (paramId: number): Promise<Text_completion_param | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .select('*')
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTextCompletionParam = async (paramId: number, updates: Partial<Text_completion_param>): Promise<Text_completion_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTextCompletionParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .delete()
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllTextCompletionParams = async (): Promise<Text_completion_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};


// CRUD functions for Guess_latin_letter_params table

export const createGuessLatinLetterParam = async (paramData: Guess_latin_letter_param): Promise<Guess_latin_letter_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .insert(paramData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessLatinLetterParam = async (paramId: number): Promise<Guess_latin_letter_param | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .select('*')
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessLatinLetterParam = async (paramId: number, updates: Partial<Guess_latin_letter_param>): Promise<Guess_latin_letter_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessLatinLetterParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .delete()
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessLatinLetterParams = async (): Promise<Guess_latin_letter_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for image_select_params table

export const createImageSelectParam = async (paramData: Image_select_param): Promise<Image_select_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .insert(paramData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getImageSelectParam = async (paramId: number): Promise<Image_select_param | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .select('*')
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateImageSelectParam = async (paramId: number, updates: Partial<Image_select_param>): Promise<Image_select_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteImageSelectParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .delete()
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllImageSelectParams = async (): Promise<Image_select_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for image_select_params_options table

export const createImageSelectParamOption = async (optionData: Image_select_param_option): Promise<Image_select_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .insert(optionData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getImageSelectParamOption = async (optionId: number): Promise<Image_select_param_option | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .select('*')
      .eq('id', optionId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateImageSelectParamOption = async (optionId: number, updates: Partial<Image_select_param_option>): Promise<Image_select_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .update(updates)
      .eq('id', optionId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteImageSelectParamOption = async (optionId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .delete()
      .eq('id', optionId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllImageSelectParamOptions = async (): Promise<Image_select_param_option[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};


// CRUD functions for translate_sentence_params table

export const createTranslateSentenceParam = async (paramData: Translate_sentence_param): Promise<Translate_sentence_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .insert(paramData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getTranslateSentenceParam = async (paramId: number): Promise<Translate_sentence_param | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .select('*')
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTranslateSentenceParam = async (paramId: number, updates: Partial<Translate_sentence_param>): Promise<Translate_sentence_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTranslateSentenceParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .delete()
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllTranslateSentenceParams = async (): Promise<Translate_sentence_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for guess_cyrillic_letter_params table

export const createGuessCyrillicLetterParam = async (paramData: Guess_cyrillic_letter_param): Promise<Guess_cyrillic_letter_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .insert(paramData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessCyrillicLetterParam = async (paramId: number): Promise<Guess_cyrillic_letter_param | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .select('*')
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessCyrillicLetterParam = async (paramId: number, updates: Partial<Guess_cyrillic_letter_param>): Promise<Guess_cyrillic_letter_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessCyrillicLetterParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .delete()
      .eq('id', paramId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessCyrillicLetterParams = async (): Promise<Guess_cyrillic_letter_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// Create a new translate sentence parameter option
export const createTranslateSentenceParamOption = async (
  optionData: Translate_sentence_param_option
): Promise<Translate_sentence_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .upsert([optionData])
      .select()
      .single();

    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

// Retrieve a translate sentence parameter option by ID
export const getTranslateSentenceParamOption = async (
  optionId: number
): Promise<Translate_sentence_param_option | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .select("*")
      .eq("id", optionId)
      .single();

    if (error) throw error;

    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

// Update an existing translate sentence parameter option
export const updateTranslateSentenceParamOption = async (
  optionId: number,
  updates: Partial<Translate_sentence_param_option>
): Promise<Translate_sentence_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .upsert([{ id: optionId, ...updates }])
      .select()
      .single();

    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

// Delete an existing translate sentence parameter option
export const deleteTranslateSentenceParamOption = async (
  optionId: number
): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .delete()
      .eq("id", optionId)
      .select()
      .single();

    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

// Retrieve all translate sentence parameter options
export const getAllTranslateSentenceParamOptions = async (): Promise<
  Translate_sentence_param_option[] | ErrorType
> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .select("*");

    if (error) throw error;

    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

export const createGuessCyrillicLetterParamOption = async (
  optionData: Guess_cyrillic_letter_param_option
): Promise<Guess_cyrillic_letter_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .insert(optionData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessCyrillicLetterParamOption = async (
  optionId: number
): Promise<Guess_cyrillic_letter_param_option | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .select('*')
      .eq('id', optionId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessCyrillicLetterParamOption = async (
  optionId: number,
  updates: Partial<Guess_cyrillic_letter_param_option>
): Promise<Guess_cyrillic_letter_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .update(updates)
      .eq('id', optionId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessCyrillicLetterParamOption = async (
  optionId: number
): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .delete()
      .eq('id', optionId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessCyrillicLetterParamOptions = async (): Promise<Guess_cyrillic_letter_param_option[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

export const createGuessLatinLetterParamOption = async (
  optionData: Guess_latin_letter_param_option
): Promise<Guess_latin_letter_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .insert(optionData)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessLatinLetterParamOption = async (
  optionId: number
): Promise<Guess_latin_letter_param_option | null | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .select("*")
      .eq("id", optionId)
      .single();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessLatinLetterParamOption = async (
  optionId: number,
  updates: Partial<Guess_latin_letter_param_option>
): Promise<Guess_latin_letter_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .update(updates)
      .eq("id", optionId)
      .select()
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessLatinLetterParamOption = async (
  optionId: number
): Promise<void | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .delete()
      .eq("id", optionId)
      .select()
      .single();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessLatinLetterParamOptions = async (): Promise<
  Guess_latin_letter_param_option[] | ErrorType
> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .select("*");
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};
