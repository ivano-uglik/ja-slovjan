import { Language, Completed_level, Guess_cyrillic_letter_param, Guess_cyrillic_letter_param_option, Guess_latin_letter_param, Guess_latin_letter_param_option, Image_select_param, Image_select_param_option, Level, Level_group, Level_step, Text_completion_param, Translate_sentence_param, Translate_sentence_param_option, User } from "../types";
import supabase from "@/supabase/supabase-server";

type ErrorType = {
  message: string;
  details?: any;
  error: any;
};

const handleError = (error: any): ErrorType => {
  console.error('Supabase error:', error);
  return { message: 'An error occurred with Supabase.', error };
};


/* --------------- CRUD functions for Language table --------------- */

export const createLanguage = async (languageData: Language): Promise<Language | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Language')
      .insert(languageData)
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
      .from('Language')
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
      .from('Language')
      .update(updates)
      .eq('id', languageId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLanguage = async (languageId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Language')
      .delete()
      .eq('id', languageId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLanguages = async (): Promise<Language[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Language')
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
      .from('Level_group')
      .insert(groupData)
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
      .from('Level_group')
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
      .from('Level_group')
      .update(updates)
      .eq('id', groupId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevelGroup = async (groupId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Level_group')
      .delete()
      .eq('id', groupId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevelGroups = async (): Promise<Level_group[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Level_group')
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
      .from('Level')
      .insert(levelData)
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
      .from('Level')
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
      .from('Level')
      .update(updates)
      .eq('id', levelId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevel = async (levelId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Level')
      .delete()
      .eq('id', levelId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevels = async (): Promise<Level[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Level')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Level_steps table

export const createLevelStep = async (stepData: Level_step): Promise<Level_step | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Level_steps')
      .insert(stepData)
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
      .from('Level_steps')
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
      .from('Level_steps')
      .update(updates)
      .eq('id', stepId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteLevelStep = async (stepId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Level_steps')
      .delete()
      .eq('id', stepId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllLevelSteps = async (): Promise<Level_step[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Level_steps')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Completed_levels table

export const createCompletedLevel = async (completedData: Completed_level): Promise<Completed_level | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Completed_levels')
      .insert(completedData)
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
      .from('Completed_levels')
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
      .from('Completed_levels')
      .update(updates)
      .eq('id', completedId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteCompletedLevel = async (completedId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Completed_levels')
      .delete()
      .eq('id', completedId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllCompletedLevels = async (): Promise<Completed_level[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Completed_levels')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Text_completion_params table

export const createTextCompletionParam = async (paramData: Text_completion_param): Promise<Text_completion_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Text_completion_params')
      .insert(paramData)
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
      .from('Text_completion_params')
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
      .from('Text_completion_params')
      .update(updates)
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTextCompletionParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Text_completion_params')
      .delete()
      .eq('id', paramId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllTextCompletionParams = async (): Promise<Text_completion_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Text_completion_params')
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
      .from('Guess_latin_letter_params')
      .insert(paramData)
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
      .from('Guess_latin_letter_params')
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
      .from('Guess_latin_letter_params')
      .update(updates)
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessLatinLetterParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Guess_latin_letter_params')
      .delete()
      .eq('id', paramId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessLatinLetterParams = async (): Promise<Guess_latin_letter_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Guess_latin_letter_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Image_select_params table

export const createImageSelectParam = async (paramData: Image_select_param): Promise<Image_select_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Image_select_params')
      .insert(paramData)
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
      .from('Image_select_params')
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
      .from('Image_select_params')
      .update(updates)
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteImageSelectParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Image_select_params')
      .delete()
      .eq('id', paramId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllImageSelectParams = async (): Promise<Image_select_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Image_select_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Image_select_params_option table

export const createImageSelectParamOption = async (optionData: Image_select_param_option): Promise<Image_select_param_option | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Image_select_params_option')
      .insert(optionData)
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
      .from('Image_select_params_option')
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
      .from('Image_select_params_option')
      .update(updates)
      .eq('id', optionId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteImageSelectParamOption = async (optionId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Image_select_params_option')
      .delete()
      .eq('id', optionId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllImageSelectParamOptions = async (): Promise<Image_select_param_option[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Image_select_params_option')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};


// CRUD functions for Translate_sentence_params table

export const createTranslateSentenceParam = async (paramData: Translate_sentence_param): Promise<Translate_sentence_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Translate_sentence_params')
      .insert(paramData)
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
      .from('Translate_sentence_params')
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
      .from('Translate_sentence_params')
      .update(updates)
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteTranslateSentenceParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Translate_sentence_params')
      .delete()
      .eq('id', paramId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllTranslateSentenceParams = async (): Promise<Translate_sentence_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Translate_sentence_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

// CRUD functions for Guess_cyrillic_letter_params table

export const createGuessCyrillicLetterParam = async (paramData: Guess_cyrillic_letter_param): Promise<Guess_cyrillic_letter_param | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Guess_cyrillic_letter_params')
      .insert(paramData)
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
      .from('Guess_cyrillic_letter_params')
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
      .from('Guess_cyrillic_letter_params')
      .update(updates)
      .eq('id', paramId)
      .single();
    if (error) throw error;
    return data!;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteGuessCyrillicLetterParam = async (paramId: number): Promise<void | ErrorType> => {
  try {
    const { error } = await supabase
      .from('Guess_cyrillic_letter_params')
      .delete()
      .eq('id', paramId);
    if (error) throw error;
  } catch (error) {
    return handleError(error);
  }
};

export const getAllGuessCyrillicLetterParams = async (): Promise<Guess_cyrillic_letter_param[] | ErrorType> => {
  try {
    const { data, error } = await supabase
      .from('Guess_cyrillic_letter_params')
      .select('*');
    if (error) throw error;
    return data || [];
  } catch (error) {
    return handleError(error);
  }
};

