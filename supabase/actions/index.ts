import { Language, ErrorType, Completed_level, Guess_cyrillic_letter_param, Guess_cyrillic_letter_param_option, Guess_latin_letter_param, Guess_latin_letter_param_option, Image_select_param, Image_select_param_option, Level_group, Level_step, Text_completion_param, Translate_sentence_param, Translate_sentence_param_option, User, Level, Level_with_steps } from "../types";
import supabase from "@/supabase/supabase-client";

const handleError = (error: any): null => {
  console.error('Supabase error:', error);
  return null;
};

// TO-DO: rewrite all functions to return data on insert, upsert or delete using the select() function

/* --------------- CRUD functions for Language table --------------- */

export const createLanguage = async (languageData: Language): Promise<Language | null> => {
  try {

    const { data, error } = await supabase
      .from('languages')
      .insert(languageData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;

  } catch (error) {
    return handleError(error);
  }
};

export const getLanguage = async (languageId: number): Promise<Language | null> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .select('*')
      .eq('id', languageId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const getLanguageByName = async (name: string): Promise<Language | null> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .select('*')
      .eq('name', name)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLanguage = async (languageId: number, updates: Partial<Language>): Promise<Language | null> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .update(updates)
      .eq('id', languageId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLanguage = async (languageId: number): Promise<Language | null> => {
  try {
    const { data, error } = await supabase
      .from('languages')
      .delete()
      .eq('id', languageId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLanguages = async (): Promise<Language[] | null> => {
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

export const createLevelGroup = async (groupData: Level_group): Promise<Level_group | null> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .insert(groupData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevelGroup = async (groupId: number): Promise<Level_group | null> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .select('*')
      .eq('id', groupId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevelGroupByName = async (
  groupName: string
): Promise<Level_group | null> => {
  try {
    const { data, error } = await supabase
      .from("level_groups")
      .select("*")
      .eq("name", groupName)
      .maybeSingle();

    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};


export const updateLevelGroup = async (groupId: number, updates: Partial<Level_group>): Promise<Level_group | null> => {
  try {
    const { data, error } = await supabase
      .from('level_groups')
      .update(updates)
      .eq('id', groupId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevelGroup = async (groupId: number): Promise<Level_group | null> => {
  try {
    const { data, error, status } = await supabase
      .from('level_groups')
      .delete()
      .eq('id', groupId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevelGroups = async (): Promise<Level_group[] | null> => {
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

export const createLevel = async (levelData: Level): Promise<Level | null> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .insert(levelData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevel = async (levelId: number): Promise<Level | null> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .select('*')
      .eq('id', levelId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLevel = async (levelId: number, updates: Partial<Level>): Promise<Level | null> => {
  try {
    const { data, error } = await supabase
      .from('levels')
      .update(updates)
      .eq('id', levelId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevel = async (levelId: number): Promise<void | null> => {
  try {
    const { error, data } = await supabase
      .from('levels')
      .delete()
      .eq('id', levelId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevels = async (): Promise<Level[] | null> => {
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

export const createLevelStep = async (stepData: Level_step): Promise<Level_step | null> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .insert(stepData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getLevelStep = async (stepId: number): Promise<Level_step | null> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .select('*')
      .eq('id', stepId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateLevelStep = async (stepId: number, updates: Partial<Level_step>): Promise<Level_step | null> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .update(updates)
      .eq('id', stepId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevelStep = async (stepId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('level_steps')
      .delete()
      .eq('id', stepId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevelSteps = async (): Promise<Level_step[] | null> => {
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

export const createCompletedLevel = async (completedData: Completed_level): Promise<Completed_level | null> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .insert(completedData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getCompletedLevel = async (completedId: number): Promise<Completed_level | null> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .select('*')
      .eq('id', completedId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateCompletedLevel = async (completedId: number, updates: Partial<Completed_level>): Promise<Completed_level | null> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .update(updates)
      .eq('id', completedId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteCompletedLevel = async (completedId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('completed_levels')
      .delete()
      .eq('id', completedId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllCompletedLevels = async (): Promise<Completed_level[] | null> => {
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

export const createTextCompletionParam = async (paramData: Text_completion_param): Promise<Text_completion_param | null> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .insert(paramData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getTextCompletionParam = async (paramId: number): Promise<Text_completion_param | null> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .select('*')
      .eq('id', paramId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTextCompletionParam = async (paramId: number, updates: Partial<Text_completion_param>): Promise<Text_completion_param | null> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTextCompletionParam = async (paramId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('text_completion_params')
      .delete()
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllTextCompletionParams = async (): Promise<Text_completion_param[] | null> => {
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

export const createGuessLatinLetterParam = async (paramData: Guess_latin_letter_param): Promise<Guess_latin_letter_param | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .insert(paramData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessLatinLetterParam = async (paramId: number): Promise<Guess_latin_letter_param | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .select('*')
      .eq('id', paramId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessLatinLetterParam = async (paramId: number, updates: Partial<Guess_latin_letter_param>): Promise<Guess_latin_letter_param | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessLatinLetterParam = async (paramId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_latin_letter_params')
      .delete()
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessLatinLetterParams = async (): Promise<Guess_latin_letter_param[] | null> => {
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

export const createImageSelectParam = async (paramData: Image_select_param): Promise<Image_select_param | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .insert(paramData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getImageSelectParam = async (paramId: number): Promise<Image_select_param | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .select('*')
      .eq('id', paramId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateImageSelectParam = async (paramId: number, updates: Partial<Image_select_param>): Promise<Image_select_param | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteImageSelectParam = async (paramId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params')
      .delete()
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllImageSelectParams = async (): Promise<Image_select_param[] | null> => {
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

export const createImageSelectParamOption = async (optionData: Image_select_param_option): Promise<Image_select_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .insert(optionData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getImageSelectParamOption = async (optionId: number): Promise<Image_select_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .select('*')
      .eq('id', optionId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateImageSelectParamOption = async (optionId: number, updates: Partial<Image_select_param_option>): Promise<Image_select_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .update(updates)
      .eq('id', optionId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteImageSelectParamOption = async (optionId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('image_select_params_options')
      .delete()
      .eq('id', optionId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllImageSelectParamOptions = async (): Promise<Image_select_param_option[] | null> => {
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

export const createTranslateSentenceParam = async (paramData: Translate_sentence_param): Promise<Translate_sentence_param | null> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .insert(paramData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getTranslateSentenceParam = async (paramId: number): Promise<Translate_sentence_param | null> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .select('*')
      .eq('id', paramId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateTranslateSentenceParam = async (paramId: number, updates: Partial<Translate_sentence_param>): Promise<Translate_sentence_param | null> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTranslateSentenceParam = async (paramId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('translate_sentence_params')
      .delete()
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllTranslateSentenceParams = async (): Promise<Translate_sentence_param[] | null> => {
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

export const createGuessCyrillicLetterParam = async (paramData: Guess_cyrillic_letter_param): Promise<Guess_cyrillic_letter_param | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .insert(paramData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessCyrillicLetterParam = async (paramId: number): Promise<Guess_cyrillic_letter_param | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .select('*')
      .eq('id', paramId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessCyrillicLetterParam = async (paramId: number, updates: Partial<Guess_cyrillic_letter_param>): Promise<Guess_cyrillic_letter_param | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .update(updates)
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessCyrillicLetterParam = async (paramId: number): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params')
      .delete()
      .eq('id', paramId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessCyrillicLetterParams = async (): Promise<Guess_cyrillic_letter_param[] | null> => {
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
): Promise<Translate_sentence_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .upsert([optionData])
      .select()
      .maybeSingle();

    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

// Retrieve a translate sentence parameter option by ID
export const getTranslateSentenceParamOption = async (
  optionId: number
): Promise<Translate_sentence_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .select("*")
      .eq("id", optionId)
      .maybeSingle();

    if (error) throw error;

    return data;
  } catch (error) {
    return handleError(error);
  }
};

// Update an existing translate sentence parameter option
export const updateTranslateSentenceParamOption = async (
  optionId: number,
  updates: Partial<Translate_sentence_param_option>
): Promise<Translate_sentence_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .upsert([{ id: optionId, ...updates }])
      .select()
      .maybeSingle();

    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

// Delete an existing translate sentence parameter option
export const deleteTranslateSentenceParamOption = async (
  optionId: number
): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from("translate_sentence_params_options")
      .delete()
      .eq("id", optionId)
      .select()
      .maybeSingle();

    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

// Retrieve all translate sentence parameter options
export const getAllTranslateSentenceParamOptions = async (): Promise<
  Translate_sentence_param_option[] | null
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
): Promise<Guess_cyrillic_letter_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .insert(optionData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessCyrillicLetterParamOption = async (
  optionId: number
): Promise<Guess_cyrillic_letter_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .select('*')
      .eq('id', optionId)
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessCyrillicLetterParamOption = async (
  optionId: number,
  updates: Partial<Guess_cyrillic_letter_param_option>
): Promise<Guess_cyrillic_letter_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .update(updates)
      .eq('id', optionId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessCyrillicLetterParamOption = async (
  optionId: number
): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from('guess_cyrillic_letter_params_options')
      .delete()
      .eq('id', optionId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessCyrillicLetterParamOptions = async (): Promise<Guess_cyrillic_letter_param_option[] | null> => {
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
): Promise<Guess_latin_letter_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .insert(optionData)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getGuessLatinLetterParamOption = async (
  optionId: number
): Promise<Guess_latin_letter_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .select("*")
      .eq("id", optionId)
      .maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (error) {
    return handleError(error);
  }
};

export const updateGuessLatinLetterParamOption = async (
  optionId: number,
  updates: Partial<Guess_latin_letter_param_option>
): Promise<Guess_latin_letter_param_option | null> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .update(updates)
      .eq("id", optionId)
      .select()
      .maybeSingle();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessLatinLetterParamOption = async (
  optionId: number
): Promise<void | null> => {
  try {
    const { data, error } = await supabase
      .from("guess_latin_letter_params_options")
      .delete()
      .eq("id", optionId)
      .select()
      .maybeSingle();
    if (error) throw error;

    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessLatinLetterParamOptions = async (): Promise<
  Guess_latin_letter_param_option[] | null
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

export const createLevelWithSteps = async (level: Level_with_steps): Promise<{ message: string, success: boolean } | null> => {
  try {

    if (process.env.NEXT_PUBLIC_DEV) console.log("LEVEL", level)

    // check if level group exists, if not, create it
    let level_group_id;

    if (level.level_group_id) {
      level_group_id = level.level_group_id;
    } else if (level.level_group_name) {
      const level_group = await getLevelGroupByName(level.level_group_name);
      const language = await getLanguageByName(level.language);

      if (!language) throw new Error(`Couldn't find language ${level.language}"`);

      if (level_group) {
        level_group_id === level_group.id;
      }
      else {
        // create level_group if it doesn't exist
        const new_level_group_data: Level_group = {
          name: level.level_group_name,
          author_user: level.user_id,
          language_id: language?.id,
          // TODO: once app is live, change to true if it is by a user that is not admin approved!
          is_community: false,
        };
        const new_level_group = await createLevelGroup(new_level_group_data);
        level_group_id = new_level_group?.id;

        if (!new_level_group) throw new Error("Level group not created");
      }
    } else {
      throw new Error("Level group id or name is required");
    }

    // create level
    const new_level_data: Level = {
      order: level.order,
      description: level?.description,
      level_group_id: level_group_id,
    };

    const new_level = await createLevel(new_level_data);

    // create steps
    if (new_level) {
      level.steps.forEach(async (step) => {
        // create step

        const new_step_data: Level_step = {
          order: step.order,
          component: step.component,
          level_id: new_level.id!,
        };
        const new_step = await createLevelStep(new_step_data);
        if (new_step) {
          // create params according to the given component, not all components have the same params

          if (step.component === "TextCompletion") {
            const new_param_data: Text_completion_param = {
              title: step.params?.title,
              title_translated: step.params,
              level_step_id: new_step.id!,
            };
            await createTextCompletionParam(new_param_data);
          }
          else if (step.component === "TranslateSentence") {
            const new_param_data: Translate_sentence_param = {
              level_step_id: new_step.id!,
              title: step.params?.title,
            };

            const new_param = await createTranslateSentenceParam(
              new_param_data
            );

            if (new_param) {
              // create options
              step.params.options.forEach(async (option: Translate_sentence_param_option) => {
                const new_option_data: Translate_sentence_param_option = {
                  is_correct: option.is_correct,
                  text: option.text,
                  translate_sentence_params_id: new_param.id!,
                };
                await createTranslateSentenceParamOption(new_option_data);
              }
              );
            }
          }
          else if (step.component === "ImageSelect") {
            const new_param_data: Image_select_param = {
              level_step_id: new_step.id!,
              word: step.params?.word,
            };

            const new_param = await createImageSelectParam(new_param_data);
            if (new_param) {
              // create options
              step.params.options.forEach(async (option: Image_select_param_option) => {
                const new_option_data: Image_select_param_option = {
                  is_correct: option.is_correct,
                  imageURL: option.imageURL,
                  image_select_params_id: new_param.id!,
                };
                await createImageSelectParamOption(new_option_data);
              }
              );
            }
          }
          else if (step.component === "Markdown") {
            // TO-DO add markdown table and crud functions
          }
        }
      });
    }

    return { message: "successfully created new level", success: true };
  } catch (error) {
    console.log("Error", error)
    return handleError(error);
  }
}